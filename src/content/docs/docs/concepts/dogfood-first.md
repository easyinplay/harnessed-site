---
title: Dogfood-first methodology
description: Every workflow is validated against its own definition.
---

## The principle

harnessed's requirement R8.1 states: the project's own development cycle must use its own workflows. Every feature shipped in harnessed is built with the same `/discuss`, `/plan`, `/task`, `/verify` cadence that harnessed exposes to users.

This is not aspirational — it is a hard gate. A workflow that harnessed can't use to ship itself is a workflow that doesn't work.

## What it catches in practice

During Phase 3.5 W2.1 Cycle 4, the team was running `/auto` on the harnessed repository itself to implement a new orchestration feature. A bug surfaced in `masterOrchestrator`'s spawn-order logic: sub-workflows were being initialized out of sequence, causing the task stage to start before the plan stage had written `task_plan.md`.

This bug was caught as a dogfood regression — it didn't surface in unit tests because the integration path only executes when a real `/auto` run spawns agents. Because harnessed was using itself, the failure was immediate and unambiguous.

The fix was promoted to P0 because it violated the trust contract: if harnessed can't orchestrate its own development, users can't trust it to orchestrate theirs.

## Practical implications

**Schema changes are self-validating.** When harnessed adds a new field to the manifest schema, the next development cycle validates harnessed's own manifests against it — automatically on `harnessed install` and in CI via `scripts/check-workflow-schema.mjs`. Any schema regression appears in the dogfood run before it reaches users.

**New workflows are stress-tested first.** Before any workflow ships, it is exercised on the harnessed repository itself. The same codebase that defines the workflow serves as the test harness.

**Dogfood bugs are P0.** If running harnessed on harnessed breaks, that is a P0 incident — not a known limitation to document. This creates a strong incentive to keep the tool working end-to-end, not just passing unit tests.

## What this means for users

When you run `/auto` on your project, you are running the same pipeline that ships harnessed itself. The continuous pressure of dogfooding means:

- Regressions surface during development, not in user reports
- Edge cases in multi-agent coordination get exercised on every harnessed release
- The 5-stage cadence is battle-tested against a real, actively maintained codebase

The methodology is described in [docs/WORKFLOW.md](https://github.com/easyinplay/harnessed/blob/main/docs/WORKFLOW.md) in the harnessed repository.
