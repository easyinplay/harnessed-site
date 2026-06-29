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

诊断本地 harnessed + Claude Code 安装 —— 14 项健康检查（Node、MCP scope/可用性、jq、Windows bash、origin、gstack prefix、deprecations、token budget、Agent Teams env、planning-with-files、mattpocock-skills、CodeGraph、update-available）。

```bash
harnessed doctor
harnessed doctor --json   # 机器可读报告
```

---

## `harnessed update`

保持 harnessed（及可选的上游插件）最新。第 14 项 doctor check 也会被动提示 "update available X→Y"。

```bash
harnessed update                    # 自升级：npm i -g harnessed@latest + CHANGELOG + 重启提示
harnessed update --check            # 只报告 installed/latest 版本，不安装
harnessed update --upstreams        # 额外重跑 base manifests 升级上游插件
harnessed update --migration-report # 只读盘点 stale harnessed 状态（不删除任何东西）
```

网络访问 fail-soft —— npm 不可达时绝不报错。

---

## `harnessed release-preflight`

Ship 阶段的门。**只读**的发布就绪检查 —— repo 未就绪发版则 exit 1。不改任何东西（实际 publish 由 CI 在 tag push 时执行）。

```bash
harnessed release-preflight
```

检查项：`CHANGELOG.md` 的 `[Unreleased]`（或 `[<version>]` 段）非空、`package.json` 有合法 version、工作树干净（tracked 改动）、`v<version>` tag 尚未存在。

---

## `harnessed compact`

总结+驱逐已解决的 sub-progress ledger 条目，为长任务释放上下文。**G6-safe**：`fail_count > 0` 的条目永不驱逐，break-loop 信号得以保留。

```bash
harnessed compact                                  # 手动 compaction
harnessed checkpoint complete <sub> --tokens <n>   # token 数越过阈值时自动触发
```

---

## `harnessed workflows`

列出在飞的 workflow —— 每个 repo 一个（harnessed 按 repo root 给 checkpoint 状态分槽，并行项目不再互相覆盖）。

```bash
harnessed workflows
```

---

## `harnessed learn`

向当前 repo 的 `.planning/LEARNINGS.md` 追加一条 prose learning。完成的 workflow 也会自动追加其 failure/loop/reject 信号；inject hook 把相关 learnings 注入下个 session。

```bash
harnessed learn "别盲目重试迁移 —— 它需要先拿一个干净快照"
```

---

## `harnessed next`

打印确定性的 next-step 契约 —— 只读，不修改状态。两层：

1. **workflow 在飞**（仍有 sub 待处理）→ 沿用 workflow 内契约 `NEXT: auto <sub> | manual <sub> | done`（exit `0`，不变）。
2. **subs 全部 resolved** → fall-through 到**跨 unit 横向续作**（v4.10）：从 `.planning/` 磁盘 SoT 派生下一个 work unit（下一 phase / task），打印 `NEXT: advance | blocked | done`。

```bash
harnessed next
# 在飞：        NEXT: auto <sub>
# fall-through: NEXT: advance
#               UNIT: phase 16 'rate limiter'
#               HINT: run /auto (or harnessed advance) to start it — 2 phases remain
```

**跨 unit 退出码：** `0` = advance（有下一个 unit）· `2` = done（所有 phase 完成）· `10` = blocked（需人工决策）。

---

## `harnessed advance`

推进到从 `.planning/` 磁盘 SoT 派生的下一个 work unit —— **print-only（只打印）**。它打印下一个 phase/task 以及该跑的命令（如 `→ run /auto "..."`），但**不** seed 状态、**不** spawn；由 main session 自己跑打印出来的命令，从而保留澄清往返与 Agent Teams。

```bash
harnessed advance
# ADVANCE: advance
# UNIT: phase 16 'rate limiter'
# → run /auto "phase 16 'rate limiter'"
```

**advance-gate。** `advance` 拒绝越过更早的*未完成* phase（"comet" gate）：若派生出的下一个 phase 排序早于 workflow pointer，或有失败的 sub 阻塞 ledger，它会非零退出且**不**打印 run 命令。加 `--force` 覆盖 —— 会在输出里记一条 audit note 然后继续。

```bash
harnessed advance --force   # 覆盖 gate（记录 audit note）
```

**driver loop。** `--json` 输出机器可读的 `{ next, unit, hint }`，让 shell 循环 hands-free 串联多个 phase —— 循环在任何非零退出时停止（done / blocked / gate-reject）：

```bash
while harnessed advance --json; do : ; done
```

**退出码：** `0` = advance · `2` = done（所有 phase 完成）· `10` = blocked · `11` = gate-reject（更早的 phase 未完成；用 `--force`）· `1` = error。

**设计 —— 从磁盘派生，不维护队列。** “下一个”始终从磁盘派生，绝不来自存储的队列。一个 phase 算完成 ⇔ 每个 `NN-*-PLAN.md` 都有匹配的 `NN-*-SUMMARY.md`（artifact-derived，所以已 ship 的 phase 天然被跳过）。中途插入 phase（改 `ROADMAP.md` 或加 `phases/16.1-*/`），下一次 `advance` 自动捡起。phase 级续作是 shipped floor；task 级 resolution 已 resolver-ready 但尚未接到 CLI。

---

## `harnessed reject <sub>`

把某个 sub-workflow 标记为用户拒绝 —— 终态，区别于 `failed`（`failed` 驱动 break-loop 重试逻辑）。

```bash
harnessed reject <sub>
```

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
