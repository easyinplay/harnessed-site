---
title: 快速上手
description: 60 秒内从安装到第一个工作流。
---

## 第一步 — 安装与初始化

```bash
npm install -g harnessed && harnessed setup
```

全局安装 harnessed 并完成一键入门初始化：启用 Agent Teams、安装工作流 skills、处理基础清单。各步骤详情请参阅[安装](/docs/zh-Hans/getting-started/installation/)。

## 第二步 — 打开 Claude Code

在任意项目目录下打开 Claude Code。斜杠命令现在全局可用，无需在特定项目中。

## 第三步 — 运行第一条命令

在 Claude Code 中输入：

```
/auto research how to add OAuth to my Express app
```

或者直接给出具体需求：

```
/auto "给我们的 Express API 添加限速中间件 —— 每 IP 每分钟 100 次请求，Redis 后端"
```

## 接下来会发生什么

`/auto` 是 harnessed 的超级主控命令，运行完整的六阶段流水线：

| 阶段 | 说明 |
|------|------|
| **① Research**（条件触发） | 通过 Tavily、Exa、ctx7 进行多源调研。当你回答"否"（不清楚需求）时触发 |
| **② Discuss** | 三层澄清关卡：战略范围、阶段决策、子任务歧义 |
| **③ Plan** | 架构审查（条件触发）+ 将 `task_plan.md` 和 `progress.md` 持久化到 `.planning/` |
| **④ Task** | 每个子任务的串行循环：澄清 → 编码 → 测试 → 交付，核心逻辑强制 TDD |
| **⑤ Verify** | 最多 7 项条件子检查：进度、代码审查、偏执审查、QA、安全、设计、简化 |
| **⑥ Retro** | 强制里程碑总结 —— 沉淀经验教训，记录决策 |

`/auto` 持续运行所有阶段。如果某个阶段失败，harnessed 会停止，你可以用 `harnessed resume` 续跑。

如需精细控制，可单独调用各阶段：`/discuss`、`/plan`、`/task`、`/verify`。动手实践请参阅[第一个工作流](/docs/zh-Hans/getting-started/first-workflow/)。
