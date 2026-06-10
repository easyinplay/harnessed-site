---
title: 工作流参考
description: harnessed v4.3.0 附带的全部 25 个可装配工作流。
---

harnessed v4.3.0 提供 25 个按命名空间分层的工作流：一个超级主控、四个阶段主控、18 个子工作流和两个独立工作流。

## 超级主控

| 命令 | 范围 | 能力 |
|------|------|------|
| `/auto` | 超级主控 | 完整六阶段流水线：research（条件触发）→ discuss → plan → task → verify → retro（强制）。AI 一键复杂度评估 + 理解确认。`--staged` 标志启用阶段关卡 UX。失败快速停止，`harnessed resume` 续跑。 |

## 独立工作流

| 命令 | 范围 | 能力 |
|------|------|------|
| `/research` | 独立 | 通过 Tavily、Exa MCP、ctx7 进行多源调研。在 `/auto` 中作为第 0 阶段触发，或直接在 discuss 前调用。 |
| `/retro` | 独立 | 通过 gstack `/retro` 进行里程碑收尾总结。沉淀经验教训、决策记录和意外发现到 `RETROSPECTIVE.md`。`/auto` 中强制运行。 |

## Discuss 阶段

| 命令 | 范围 | 能力 |
|------|------|------|
| `/discuss` | 阶段主控 | 并行评估全部三个讨论关卡，仅运行触发的那些。 |
| `/discuss-strategic` | 子工作流 | 战略层 —— 新功能 / milestone / 产品方向。gstack `/office-hours` + `/plan-ceo-review`。持久化 `findings.md`。 |
| `/discuss-phase` | 子工作流 | 阶段层 —— ≥2 个开放决策，灰色地带澄清。GSD `gsd-discuss-phase`。持久化 `findings.md` + `knowledge.md`。 |
| `/discuss-subtask` | 子工作流 | 子任务层 —— ≥2 种方案 / 核心算法 / API contract。Superpowers brainstorming + `/grill-with-docs`。短暂，不持久化。 |

## Plan 阶段

| 命令 | 范围 | 能力 |
|------|------|------|
| `/plan` | 阶段主控 | 串行：架构审查（条件触发）→ 阶段计划（始终运行）。 |
| `/plan-architecture` | 子工作流 | 架构层 —— 复杂架构治理关卡。gstack `/plan-eng-review`。在计划前锁定设计。 |
| `/plan-phase` | 子工作流 | 阶段计划 —— GSD `gsd-plan-phase` + planning-with-files。持久化 `task_plan.md` + `progress.md`。 |

## Task 阶段

| 命令 | 范围 | 能力 |
|------|------|------|
| `/task` | 阶段主控 | 每子任务串行循环：澄清 → 编码 → 测试 → 交付。 |
| `/task-clarify` | 子工作流 | 启动澄清关卡。Superpowers brainstorming + `/grill-with-docs` 条件触发。 |
| `/task-code` | 子工作流 | 遵循 karpathy 四原则编码。`/zoom-out` / `/improve-codebase-architecture` / `/diagnose` 条件触发。跨 session `progress.md` 同步。 |
| `/task-test` | 子工作流 | TDD 红灯 → 绿灯 → 重构。Superpowers TDD + `/diagnose` 条件触发。核心逻辑强制。 |
| `/task-deliver` | 子工作流 | `ralph-loop` SDK 包装器。运行直至逐字输出 `COMPLETE`。全栈协调条件触发 Agent Teams。 |

## Verify 阶段

| 命令 | 范围 | 能力 |
|------|------|------|
| `/verify` | 阶段主控 | 根据场景标志派发最多 7 项子检查。 |
| `/verify-progress` | 子工作流 | 始终第一步运行。UAT 验收标准检查 + GSD 状态同步。 |
| `/verify-code-review` | 子工作流 | 多 subagent 并行 fan-out。高置信度发现。 |
| `/verify-paranoid` | 子工作流 | 通过 gstack `/review` 进行偏执工程师审查。关键模块 PR 前强制。 |
| `/verify-qa` | 子工作流 | 通过 gstack `/qa` + playwright-cli / `@playwright/test` 进行端到端 QA。有 UI 变更时触发。 |
| `/verify-security` | 子工作流 | 通过 gstack `/cso` 进行 OWASP / 认证 / 密钥检查。涉及认证或密钥时触发。 |
| `/verify-design` | 子工作流 | 通过 gstack `/design-review` + ui-ux-pro-max + frontend-design 进行设计系统一致性检查。有设计变更时触发。 |
| `/verify-simplify` | 子工作流 | 通过 `code-simplifier` 进行最终简化。始终最后运行。 |
| `/verify-multispec` | 子工作流 | 四专家 Agent Team Pattern C —— 互相 SendMessage 交叉审查。关键发布 / 大规模重构 PR 的升级路径。 |

## 纪律包装器

| 命令 | 范围 | 能力 |
|------|------|------|
| `/tdd` | 纪律 | 红灯 → 绿灯 → 重构。`superpowers:test-driven-development` 的别名。可作为独立纪律包装器使用。 |
| `/ralph-loop` | 包装器 | 完成承诺包装器。运行任意 prompt 直至输出逐字 `COMPLETE`。内置于 `/task-deliver`。 |
| `/execute-task` | 工具 | 直接任务执行入口。跳过 discuss/plan 阶段。 |

所有工作流定义位于 [harnessed 仓库](https://github.com/easyinplay/harnessed) 的 `workflows/<name>/workflow.yaml`。
