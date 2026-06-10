---
title: Workflow reference
description: All 25 composable workflows shipped with harnessed v4.3.0.
---

harnessed v4.3.0 ships 25 namespace-layered workflows organized into one super-master, four stage masters, 18 sub-workflows, and two standalones.

## Super-master

| Command | Scope | Capabilities |
|---------|-------|-------------|
| `/auto` | super-master | Full 6-stage pipeline: research (conditional) → discuss → plan → task → verify → retro (mandatory). AI 1-shot complexity assessment + understanding check. `--staged` flag for stage-gate UX. Fail-fast with `harnessed resume` on failure. |

## Standalone

| Command | Scope | Capabilities |
|---------|-------|-------------|
| `/research` | standalone | Multi-source investigation via Tavily, Exa MCP, ctx7. Fires as Stage 0 in `/auto` or invoke directly before discuss. |
| `/retro` | standalone | Milestone close-out summary via gstack `/retro`. Captures lessons, decisions, and surprises to `RETROSPECTIVE.md`. Mandatory in `/auto`. |

## Discuss stage

| Command | Scope | Capabilities |
|---------|-------|-------------|
| `/discuss` | stage master | Evaluates all 3 discussion gates in parallel, runs only those that fire. |
| `/discuss-strategic` | sub-workflow | Strategic layer — new features / milestones / product direction. gstack `/office-hours` + `/plan-ceo-review`. Persists `findings.md`. |
| `/discuss-phase` | sub-workflow | Phase layer — ≥2 open implementation decisions, gray-area clarification. GSD `gsd-discuss-phase`. Persists `findings.md` + `knowledge.md`. |
| `/discuss-subtask` | sub-workflow | Subtask layer — ≥2 approaches / core algorithm / API contract. Superpowers brainstorming + `/grill-with-docs`. Ephemeral. |

## Plan stage

| Command | Scope | Capabilities |
|---------|-------|-------------|
| `/plan` | stage master | Serial: architecture review (conditional) → phase plan (always). |
| `/plan-architecture` | sub-workflow | Architecture layer — complex architecture gate. gstack `/plan-eng-review`. Locks design before planning. |
| `/plan-phase` | sub-workflow | Phase plan — GSD `gsd-plan-phase` + planning-with-files. Persists `task_plan.md` + `progress.md`. |

## Task stage

| Command | Scope | Capabilities |
|---------|-------|-------------|
| `/task` | stage master | Serial per-subtask loop: clarify → code → test → deliver. |
| `/task-clarify` | sub-workflow | Startup clarification gate. Superpowers brainstorming + `/grill-with-docs` conditional. |
| `/task-code` | sub-workflow | Coding with karpathy 4 principles. `/zoom-out` / `/improve-codebase-architecture` / `/diagnose` conditional. Cross-session `progress.md` sync. |
| `/task-test` | sub-workflow | TDD red → green → refactor. Superpowers TDD + `/diagnose` conditional. Mandatory for core logic. |
| `/task-deliver` | sub-workflow | `ralph-loop` SDK wrapper. Runs until verbatim `COMPLETE`. Agent Teams conditional for full-stack coordination. |

## Verify stage

| Command | Scope | Capabilities |
|---------|-------|-------------|
| `/verify` | stage master | Dispatches up to 7 sub-checks based on scenario flags. |
| `/verify-progress` | sub-workflow | Always first. UAT acceptance criteria check + GSD state sync. |
| `/verify-code-review` | sub-workflow | Multi-subagent parallel fan-out. High-confidence findings. |
| `/verify-paranoid` | sub-workflow | Paranoid Staff Engineer review via gstack `/review`. Mandatory pre-PR for critical modules. |
| `/verify-qa` | sub-workflow | End-to-end QA via gstack `/qa` + playwright-cli / `@playwright/test`. Fires when UI changes present. |
| `/verify-security` | sub-workflow | OWASP / auth / secrets check via gstack `/cso`. Fires when auth or secrets touched. |
| `/verify-design` | sub-workflow | Design system consistency via gstack `/design-review` + ui-ux-pro-max + frontend-design. Fires when design changes present. |
| `/verify-simplify` | sub-workflow | Final simplification pass via `code-simplifier`. Always runs last. |
| `/verify-multispec` | sub-workflow | 4-specialist Agent Team Pattern C — mutual SendMessage cross-examination. Escalation path for critical releases / large refactor PRs. |

## Discipline wrappers

| Command | Scope | Capabilities |
|---------|-------|-------------|
| `/tdd` | discipline | Red → green → refactor. Alias for `superpowers:test-driven-development`. Available as standalone discipline wrapper. |
| `/ralph-loop` | wrapper | Completion-promise wrapper. Runs any prompt until verbatim `COMPLETE` is output. Built into `/task-deliver`. |
| `/execute-task` | utility | Direct task execution entry point. Bypasses discuss/plan stages. |

All workflow definitions live in `workflows/<name>/workflow.yaml` in the [harnessed repository](https://github.com/easyinplay/harnessed).
