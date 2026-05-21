---
title: Quickstart
description: From install to first workflow in 60 seconds.
---

## Step 1 — Install and setup

```bash
npm install -g harnessed && harnessed setup
```

This installs harnessed globally and runs one-shot onboarding: Agent Teams enabled, workflow skills installed, base manifests processed. See [Installation](/docs/getting-started/installation/) for what each step does.

## Step 2 — Open Claude Code

Open Claude Code in any project directory. Slash commands are now available globally — you don't need to be in a specific project.

## Step 3 — Run your first command

Type this in Claude Code:

```
/auto research how to add OAuth to my Express app
```

Or start with a concrete requirement:

```
/auto "add a rate limiter to our Express API — 100 req/min per IP, Redis-backed"
```

## What happens next

`/auto` is harnessed's super-master command. It runs the full 6-stage pipeline:

| Stage | What it does |
|-------|-------------|
| **① Research** (conditional) | Multi-source investigation via Tavily, Exa, ctx7 — fires if you answer "no" to the understanding check |
| **② Discuss** | 3-layer clarification gates: strategic scope, phase decisions, subtask ambiguity |
| **③ Plan** | Architecture review (conditional) + persists `task_plan.md` and `progress.md` in `.planning/` |
| **④ Task** | Per-subtask serial loop: clarify → code → test → deliver, with TDD on core logic |
| **⑤ Verify** | 7 conditional sub-checks: progress, code review, paranoid review, QA, security, design, simplify |
| **⑥ Retro** | Mandatory milestone summary — lessons captured, decisions recorded |

`/auto` runs all stages continuously. If a stage fails, harnessed stops and you can resume with `harnessed resume`.

For fine-grained control, invoke individual stages: `/discuss`, `/plan`, `/task`, `/verify`. See [Your first workflow](/docs/getting-started/first-workflow/) for a hands-on walkthrough.
