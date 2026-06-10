---
title: 安装
description: 30 秒内安装 harnessed 并完成初始化。
---

## 前提条件

- **Node.js 22+** — harnessed 使用 ESM，需要 Node 22 或更高版本
- **Claude Code** — harnessed 在 Claude Code 内运行，请先从 [anthropic.com/claude/code](https://anthropic.com/claude/code) 安装

## 安装

```bash
npm install -g harnessed
```

验证安装结果：

```bash
harnessed --version
# → 4.3.0
```

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

完整参数列表请参阅 [CLI 命令](/docs/zh-Hans/reference/cli/)。

## Windows 注意事项

PowerShell 5.x 不支持 `&&` 链式调用，请使用 `;` 或两行分开执行：

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+、bash、zsh 和 cmd.exe 均支持单行写法。
