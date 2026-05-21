---
title: CLI 命令
description: harnessed 全部 CLI 子命令与参数。
---

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

---

## `harnessed --version`

```bash
harnessed --version
# → 3.4.0
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
