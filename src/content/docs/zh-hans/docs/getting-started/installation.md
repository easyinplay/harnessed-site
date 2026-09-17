---
title: 安装
description: 30 秒内安装 harnessed 并完成初始化。
---

## 前提条件

- **Node.js 22+** — harnessed 使用 ESM，需要 Node 22 或更高版本
- **一个 AI 编程 agent** — harnessed 在其内运行。Claude Code 是主要目标（先从 [anthropic.com/claude/code](https://anthropic.com/claude/code) 安装）；Codex 等其他 harness 通过跨 harness 平台层支持

## 安装

```bash
npm install -g harnessed
```

验证安装结果：

```bash
harnessed --version
# → 4.43.0
```

## 单文件二进制(无需 Node.js)

没有 Node.js?可改装自包含的单文件二进制 —— 按平台分发,通过 `harnessed update` 自更新:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

安装到 `~/.local/bin/harnessed`。unix 上绝不自动改 PATH —— 若 `~/.local/bin` 不在 PATH 中,安装器会打印对应 shell 的精确添加片段。

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

安装到 `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`。交互式会话在幂等的用户级 PATH 追加前会先征得同意;非交互(CI / 管道)则打印手动操作说明。

两个安装器均从 GitHub releases 下载平台资产并校验其 `.sha256`。二进制与 npm 通道运行同一套 CLI —— 下文全部内容同样适用。二进制如何自更新(ed25519 签名)与回滚,见 [`harnessed update`](/zh-hans/docs/reference/cli/#harnessed-update)。

## 运行初始化

```bash
harnessed setup
```

Setup 自动完成四个步骤：

1. **启用 Agent Teams** — 将 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 写入 `~/.claude/settings.json`，使多智能体模式（Pattern A 全栈三路、Pattern C 专家审查）开箱即用
2. **设置用户语言** — 检测操作系统语言并写入 `env.HARNESSED_USER_LANG`（zh-* → `zh-Hans`，其他 → `en`）；可通过 `--user-lang` 覆盖
3. **安装工作流 skills** — 将每个 `workflows/<name>/SKILL.md` 复制到 `~/.claude/skills/<name>/`，使斜杠命令在 Claude Code 中可用
4. **处理基础清单** — 依次处理 `manifests/tools/*.yaml` 和 `manifests/skill-packs/*.yaml`，注册上游工具依赖

Setup 完成后，`/auto`、`/discuss`、`/plan`、`/task`、`/verify` 等斜杠命令在任何 Claude Code 会话中均可使用。

## 可选参数

```bash
harnessed setup --user-lang zh-Hans   # 无论操作系统语言如何，强制使用中文
harnessed setup --user-lang en        # 强制使用英文
harnessed setup --dry-run             # 预览将写入的内容，不修改磁盘
```

完整参数列表请参阅 [CLI 命令](/zh-hans/docs/reference/cli/)。

## Windows 注意事项

PowerShell 5.x 不支持 `&&` 链式调用，请使用 `;` 或两行分开执行：

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+、bash、zsh 和 cmd.exe 均支持单行写法。
