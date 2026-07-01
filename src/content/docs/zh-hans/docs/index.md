---
title: 欢迎使用 harnessed
description: AI 编程脚手架的包管理器与装配编排器。
---

harnessed 是 AI 编程脚手架的包管理器与装配编排器。它通过类型化清单安装、装配并运行整合了 Skills、MCP 服务器及其他脚手架包的工作流 —— 无需 vendor 上游代码。

如果你在使用 Claude Code，harnessed 会将最优秀的开源组件 —— ECC、Superpowers、GSD、gstack —— 通过一条命令串联成统一的可运行工作流。

## 从哪里开始

- **[安装](/zh-hans/docs/getting-started/installation/)** — 30 秒内安装 harnessed 并完成初始化
- **[快速上手](/zh-hans/docs/getting-started/quickstart/)** — 60 秒内从安装到第一个工作流
- **[装配主义概念](/zh-hans/docs/concepts/composition/)** — harnessed 如何在不 fork 上游的情况下装配工具
- **[工作流参考](/zh-hans/docs/reference/workflows/)** — v4.12.0 附带的全部 28 个可装配工作流

## harnessed 的差异化优势

每个工作流都建立在三个核心理念上：

**装配主义，而非 vendoring。** 每个脚手架包提供一份清单。harnessed 读取清单、验证兼容性，并在运行时将上游工具拼接在一起。你始终运行的是官方上游版本，而不是陈旧的 fork。

**内置五阶段节奏。** Discuss → Plan → Task → Verify → Ship，可选 Research 与 Retro，外加自动学习回环。或运行 `/auto` 一条命令跑完完整的六阶段流水线（research → retro；Ship 为显式）。

**Dogfood 优先方法论。** 每个工作流都用自身定义来验证 —— 这是 harnessed 自己交付时所遵循的纪律。

完整的高层介绍请阅读 [README](https://github.com/easyinplay/harnessed#readme)。
