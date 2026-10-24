---
title: 安装
description: 选择 standalone、Bun 或 npm，再初始化 Claude Code 或 Codex。
---

## Standalone (推荐)

Standalone 二进制内置运行时，**harnessed 本身**无需另装 Node.js 或 Bun。
上游工具和编程 agent 仍可能需要 Node.js、Bun、Git、其他依赖及授权。

### macOS arm64 / Linux x64

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

安装到 `~/.local/bin/harnessed`。如果该目录不在 PATH 中，按安装器打印的
shell 提示配置，再按需打开新终端。

### Windows x64 (PowerShell)

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

安装到 `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`。交互式安装会先征求同意，
再更新用户级 PATH；非交互式安装打印手动操作提示。按需打开新终端。

两个安装器均从 GitHub releases 下载平台资产并校验 `.sha256`。
交互式安装器会征求同意后提供 setup。遵循交互提示与 PATH 指引；
若已成功初始化，无需再次执行 setup。
其他架构请使用下面的 package 通道。二进制更新和回滚见
[`harnessed update`](/zh-hans/docs/reference/cli/#harnessed-update)。

## Bun (次选)

需要已有 Bun。在 5.x 中，显式使用 Bun 运行 harnessed 时，本体及自有 first-party hooks
无需另装 Node.js。上游工具和编程 agent 的依赖另行检查；
该运行时支持不代表上游或真实模型工作流已就绪。使用显式 Bun 运行时完成安装与初始化：

```bash
bun install -g harnessed && bun run --bun harnessed setup
```

裸 `harnessed` package shim 仍可能带有 Node shebang，请保留显式 `bun run --bun`。
运行时不代表安装管理器；即使使用 Bun 运行，更新默认仍使用 npm。
对于 Bun 管理的 5.x 包，显式选择 Bun 运行时和更新管理器：

```bash
bun run --bun harnessed update --package-manager bun
```

### 旧版 4.x 升级备用方式

升级旧版 4.x 安装时，可使用 Bun 原生命令作为备用方式，再遵循上面的 5.x 指引：

```bash
bun add -g harnessed@latest
```

## npm (兼容通道)

需要 **Node.js 22+**，无需 Bun。

```bash
npm install -g harnessed && harnessed setup
```

以上链式命令使用 `&&` (Windows 需 PowerShell 7+)。

## 高级宿主覆盖

Claude Code 或 Codex 需单独安装。默认 `harnessed setup` 使用宿主探测，
不要求 `--platform`。当两个环境存在歧义时，当前 CLI 优先 Claude Code，
不会推断用户想用哪个。仅在需要时显式覆盖，不是必须再做一次初始化。

**Claude Code**，使用 standalone 或 npm：

```bash
harnessed setup --platform claude
```

**Codex**，使用 standalone 或 npm：

```bash
harnessed setup --platform codex
```

**Bun**，显式选择运行时：

```bash
bun run --bun harnessed setup --platform claude
```

或选择 Codex：

```bash
bun run --bun harnessed setup --platform codex
```

Setup 安装对应宿主的 workflow skills 并处理上游 manifests。
Claude Code 的配置与 Codex 集成不同；安装完成不代表初始化成功，也不代表上游已就绪。
启动工作流前，请检查 setup 输出、权限要求和上游阻塞项。

可用 `--dry-run` 预览修改，用 `--user-lang zh-Hans` / `--user-lang en` 指定语言。
完整参数见 [CLI 命令](/zh-hans/docs/reference/cli/)。PowerShell 5.x 请分行执行安装与 setup，
确认安装成功后再初始化。

接下来按[三步快速上手](/zh-hans/docs/getting-started/quickstart/)启动工作流。
