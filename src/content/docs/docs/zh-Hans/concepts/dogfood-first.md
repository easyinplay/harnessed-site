---
title: Dogfood 优先方法论
description: 每个工作流都用自身定义来验证。
---

## 核心原则

harnessed 的需求 R8.1 规定：项目自身的开发周期必须使用其自己的工作流。harnessed 中发布的每个功能，都是用它对用户暴露的同一套 `/discuss`、`/plan`、`/task`、`/verify` 节奏来构建的。

这不是愿景声明，而是硬性关卡。一个 harnessed 自己无法用来交付的工作流，就是一个不能正常工作的工作流。

## 实践中的收益

在 Phase 3.5 W2.1 Cycle 4 期间，团队正在用 `/auto` 对 harnessed 仓库本身实现一个新的编排功能。`masterOrchestrator` 的 spawn-order 逻辑中出现了一个 bug：子工作流的初始化顺序出错，导致 task 阶段在 plan 阶段写入 `task_plan.md` 之前就启动了。

这个 bug 是作为 dogfood 回归被捕获的 —— 它没有出现在单元测试中，因为该集成路径只有在真实的 `/auto` 运行生成 agent 时才会执行。正因为 harnessed 在使用自身，失败是立即且明确的。

这个修复被提升为 P0，因为它违反了信任契约：如果 harnessed 无法编排自己的开发，用户也无法信任它来编排他们的开发。

## 实践含义

**Schema 变更自我验证。** 当 harnessed 向清单 schema 添加新字段时，下一个开发周期会通过 `harnessed validate` 将 harnessed 自己的清单送入验证。任何 schema 回归都会在 dogfood 运行中暴露，而不是在到达用户时。

**新工作流先经受压力测试。** 任何工作流发布之前，都会先在 harnessed 仓库本身上运行。定义该工作流的同一代码库，也作为测试平台。

**Dogfood bug 是 P0。** 如果在 harnessed 上运行 harnessed 会出错，这是 P0 事件，而不是要记录在案的已知限制。这强烈激励保持工具端到端正常运行，而不仅仅是通过单元测试。

## 对用户的意义

当你在项目中运行 `/auto` 时，你运行的是 harnessed 自己用来交付自身的同一套流水线。dogfood 的持续压力意味着：

- 回归在开发过程中浮现，而不是出现在用户反馈里
- 多 agent 协调中的边界情况在每次 harnessed 发布时都会被实际执行
- 四阶段节奏经过真实活跃维护代码库的实战检验

该方法论详见 harnessed 仓库中的 [docs/WORKFLOW.md](https://github.com/easyinplay/harnessed/blob/main/docs/WORKFLOW.md)。
