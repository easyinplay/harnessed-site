---
title: 快速上手
description: 安装 harnessed、启动第一个工作流，再查看进度或续跑。
---

## 1. 安装 harnessed 并初始化 agent

优先选择 standalone。它内置 harnessed 本身需要的运行时，上游工具仍有独立的前提条件。

**macOS arm64 / Linux x64**，在终端执行：

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

**Windows x64**，在 PowerShell 执行：

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

遵循安装器交互提示与 PATH 指引。交互式安装器会征求同意后提供 setup；
若已成功初始化，无需重复执行。

Package 通道通过一条链完成安装与初始化：

**Bun**：

```bash
bun install -g harnessed && bun run --bun harnessed setup
```

**npm**：

```bash
npm install -g harnessed && harnessed setup
```

Windows 链式命令需要 PowerShell 7+。默认 setup 探测宿主，
`--platform` 仅用于高级覆盖，不是必填参数。
Bun 通道需要 Bun。在 5.x 中，显式使用 Bun 运行 harnessed 时，本体及自有 first-party hooks
无需另装 Node.js。裸 `harnessed` package shim 仍可能带有 Node shebang，
请保留显式 `bun run --bun`。上游组件依赖另行检查。
npm 通道需要 Node.js 22+，无需 Bun。
平台支持范围、运行时边界和包更新方式见[安装](/zh-hans/docs/getting-started/installation/)。

安装完成、初始化成功、上游就绪是独立检查。继续前请查看 setup 输出、权限要求和上游阻塞项。

## 2. 启动第一个工作流

初始化后，在项目目录打开所选 agent。下面是 **agent prompt**，不是 shell 命令。

**Claude Code**：

```text
/auto "为当前项目添加健康检查接口"
```

**Codex**：

```text
$auto "为当前项目添加健康检查接口"
```

Codex 用 `$auto` 显式调用已安装的 `auto` skill。
[官方 skills 文档](https://developers.openai.com/codex/skills/)
说明 CLI/IDE 可用 `/skills` 或 `$` 选择 skill。如果列表中没有 `auto`，先检查所选宿主的 setup。
不要把 Claude Code 的斜杠命令直接套到 Codex。

工作流按需协调调研、讨论、规划、执行、验证和回顾。
上游权限或就绪关卡仍可能阻止执行，本指引不会绕过这些关卡。

## 3. 查看进度与续跑

在项目根目录的终端打开状态仪表盘：

```bash
harnessed
```

续跑中断的工作流：

```bash
harnessed resume
```

Bun package 通道继续显式选择运行时：

```bash
bun run --bun harnessed
bun run --bun harnessed resume
```

运行时不代表安装管理器；即使使用 Bun 运行，更新默认仍使用 npm。
对于 Bun 管理的 5.x 包，更新时显式选择 Bun：

```bash
bun run --bun harnessed update --package-manager bun
```

运行时边界见[安装](/zh-hans/docs/getting-started/installation/)。上游依赖和权限仍需单独检查；
该运行时支持不代表完整真实模型工作流已经认证。

阶段级操作和更长示例见[第一个工作流](/zh-hans/docs/getting-started/first-workflow/)。

### 旧版 4.x 升级备用方式

升级旧版 4.x 安装时，可使用 Bun 原生命令作为备用方式，再遵循上面的 5.x 指引：

```bash
bun add -g harnessed@latest
```
