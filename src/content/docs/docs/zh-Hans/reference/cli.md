---
title: CLI 命令
description: harnessed 全部 CLI 子命令与参数。
---

> **v4.0 执行模型。** harnessed 是 *orchestration brain + prompt library*（决策大脑 + prompt 库），不是执行引擎。slash 命令体（由 `harnessed setup` 生成）通过三个秒级纯函数 CLI 驱动 **CC-native subagent spawn** —— `harnessed gates`（哪些子工作流触发）、`harnessed prompt`（子工作流的 spawn-ready prompt）、`harnessed checkpoint`（记录进度）。实际的 spawn、Agent Teams、ralph-loop、澄清往返都由 Claude Code main session 用原生工具执行。`harnessed run` 仅保留给 CI/headless 场景。

## `harnessed setup`

一键入门初始化 —— 将工作流 skills 和基础清单安装到 `~/.claude/`。

```bash
harnessed setup [选项]
```

**执行内容：**

1. 扫描 `workflows/<name>/SKILL.md`，将每个复制到 `~/.claude/skills/<name>/`
2. 处理 `manifests/tools/*.yaml` 和 `manifests/skill-packs/*.yaml`
3. 向 `~/.claude/settings.json` 写入 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`
4. 检测操作系统语言并写入 `env.HARNESSED_USER_LANG`（zh-* → `zh-Hans`，其他 → `en`）

**参数：**

| 参数 | 说明 |
|------|------|
| `--user-lang <code>` | 覆盖检测到的语言。接受 `en`、`zh-Hans`、`zh-CN`、`zh-TW` |
| `--dry-run` | 仅预览 —— 打印将写入的内容，不修改磁盘 |

**退出码：** `0` = 成功，`1` = 文件系统错误，`2` = 未找到 SKILL.md 工作流。

---

## `harnessed install <pack>`

按名称或路径安装脚手架包。

```bash
harnessed install <pack>
```

解析包清单，对照 schema 验证，然后按顺序执行每个 `install` 步骤。目前支持从本地路径和 git URL 进行引导安装；npm registry 包发现功能已在规划中。

---

## `harnessed uninstall [pack]`

卸载一个已安装的包；不带参数时，移除 harnessed 自身安装的文件。

```bash
harnessed uninstall <pack>   # 移除单个包（执行其清单的 uninstall 步骤）
harnessed uninstall          # 从 ~/.claude/ 移除 harnessed 自身的 skills/manifests
```

执行清单声明的 `uninstall` 命令与 cleanup 路径。不带参数的统一卸载会逆转 `harnessed setup`。

---

## Orchestration CLI（v4.0）

这三个纯函数 CLI 是生成的 slash 命令体用来驱动 CC-native spawn 的。它们只打印 JSON、自身不做 spawn —— 由 main session 编排。

### `harnessed gates <master>`

针对某个 master orchestrator（`discuss` / `plan` / `task` / `verify` / `auto`）和任务 spec，评估哪些子工作流触发。

```bash
harnessed gates plan --task "add OAuth login" --skip-sub clarify
# → JSON: { fire: [{ sub, order, mode }], skip: [...], parallelism: { escalate_to_teams } }
```

`fire` 列出通过判据 gate 的子工作流（按执行顺序）；`parallelism.escalate_to_teams` 表示何时改用 CC-native Agent Teams 而非顺序 subagent spawn。

### `harnessed prompt <sub>`

为单个子工作流输出 spawn-ready prompt —— role-prompt 主体 + checklist + 已应用的 disciplines。

```bash
harnessed prompt plan-phase --task "add OAuth login" --json
# → JSON: { prompt, max_iterations, model }
```

main session 把 `prompt` 喂给原生 `Task` spawn（外层套 ralph-loop plugin）；`max_iterations` / `model` 直接取自工作流默认值。

### `harnessed checkpoint`

把子工作流进度记录到 harnessed checkpoint store。main session 在每个子工作流完成（及失败）后调用，使得 compaction 后可用 `harnessed status --recover` 恢复。

```bash
harnessed checkpoint start <master> --plan <json>   # 播种进度 ledger
harnessed checkpoint complete <sub>                 # 标记子工作流完成（带 evidence guard）
harnessed checkpoint fail <sub>                      # 记录失败的子工作流
```

### `harnessed run`

**仅 CI / headless。** 在进程内 SDK spawn 整条工作流 —— 用于没有可编排的交互式 main session 时。v4.0 默认路径是上面的 gates → prompt → checkpoint 编排；`run` 是 fallback。

```bash
harnessed run <master> --task "<spec>"
```

---

## `harnessed doctor`

诊断本地 harnessed + Claude Code 安装 —— 检查 skills、manifests、settings、环境变量与上游可用性。

```bash
harnessed doctor
harnessed doctor --json   # 机器可读报告
```

---

## `harnessed list`

列出已安装的包及其贡献的工作流。

```bash
harnessed list
```

输出已安装包的表格，包含名称、版本、描述和能力摘要（贡献的 skills + 工作流）。

---

## `harnessed schemas`

将工作流和清单 JSON Schema 输出到 stdout。

```bash
harnessed schemas
# → 打印完整 JSON Schema

harnessed schemas > workflow-schema.json
# → 写入文件供 IDE 集成
```

---

## `harnessed validate <path>`

对照 `harnessed.workflow.v3` schema 验证清单文件。

```bash
harnessed validate ./my-pack/workflow.yaml
# → ✓ valid
# 或：✗ invalid —— 带行号的错误信息
```

有效返回退出码 `0`，无效返回 `1`。

---

## `harnessed resume`

从上次成功的阶段续跑失败的 `/auto` 流水线。

```bash
harnessed resume
```

读取 `.planning/STATE.md` 找到上次成功的阶段，从该处重新进入流水线。适用于阶段中途失败的情况。

---

## `harnessed status`

显示当前工作目录的流水线状态。

```bash
harnessed status
```

读取 `.planning/STATE.md`，打印当前阶段、上次完成的阶段以及所有阻塞项。

```bash
harnessed status --recover
```

`--recover` 读取 checkpoint 进度 ledger（而非 STATE.md），打印结构化的 compaction 后恢复视图 —— 已完成 / 待执行 / 已跳过的子工作流、下一条要跑的命令、以及任何 evidence-drift 警告。用于 context compaction 后重新定位。

---

## `harnessed audit-log`

查看路由/安装审计日志 —— 哪些 gate 触发、哪些包安装、何时。

```bash
harnessed audit-log                    # 人类可读 5 列表格
harnessed audit-log --filter <pack>    # 按包/事件过滤
harnessed audit-log --json             # 完整 12 字段记录
```

---

## `harnessed gc`

回收 install/uninstall/rollback 产生的陈旧备份。

```bash
harnessed gc
```

---

## `harnessed rollback`

从最近一次备份恢复上一个状态（保留 CRLF/LF）—— 撤销上一次 install/setup 改动。

```bash
harnessed rollback
```

---

## `harnessed --version`

```bash
harnessed --version
# → 4.3.0
```

---

## `harnessed --help`

```bash
harnessed --help
harnessed <command> --help   # 各命令的帮助信息
```

---

## 全局参数

| 参数 | 说明 |
|------|------|
| `--version` | 打印版本并退出 |
| `--help` | 打印帮助并退出 |

源码位于 [harnessed 仓库](https://github.com/easyinplay/harnessed/tree/main/src/cli) 的 `src/cli.ts` 和 `src/cli/`。
