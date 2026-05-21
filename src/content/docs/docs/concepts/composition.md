---
title: Composition over vendoring
description: How harnessed runs upstream tools without forking them.
---

## The problem

AI coding harnesses — ECC, Superpowers, GSD, gstack — each ship as separate npm packages or git repositories. Pulling them together by hand is fragile: you fork upstream code, patch it locally, and then watch it rot as upstreams release new versions you can't easily merge.

The traditional answer is vendoring: copy upstream code into your repo and maintain it. This works until the upstream ships a major improvement and you're stuck on an old fork. Keeping dozens of harness components in sync by hand doesn't scale.

## harnessed's approach

harnessed never copies upstream code. Instead, each harness pack ships a **manifest** — a typed YAML file that describes how to install the pack, what capabilities it exposes, and how it integrates with other components.

At runtime, harnessed reads these manifests, validates compatibility, and orchestrates the upstream tools via composition skills. You always run the official upstream binary — harnessed just coordinates the handoffs.

Example manifest (abbreviated):

```yaml
name: my-pack
version: 1.0.0
description: Adds OAuth2 workflows to harnessed
install:
  - npm: superpowers
  - git: https://github.com/example/skill-pack-oauth
capability:
  skills:
    - brainstorming
    - tdd
  workflows:
    - discuss
    - plan
```

## Benefits

**Always latest upstream.** When Superpowers ships a new release, you re-run `harnessed install` and pick it up immediately. No manual merging, no stale forks.

**Validated composition.** `harnessed setup` checks manifest compatibility before installing. Conflicting capability declarations surface as errors, not runtime surprises.

**Author your own pack.** The manifest schema is published — run `harnessed schemas` to dump it locally. Point your manifest at any installable upstream (npm package, git repo, custom skill) and harnessed treats it as a first-class composable unit.

**Unified entry point.** Users face `/discuss`, `/plan`, `/task`, `/verify` without learning each upstream's terminology. The composition skill handles routing to the right upstream tool for each stage.

## How composition skills work

Composition skills are in-house workflow skills that act as the conductor's baton. When you run `/discuss`, harnessed's composition skill:

1. Evaluates which of the 3 discussion gates should fire (strategic / phase / subtask)
2. Spawns the appropriate upstream sub-workflow for each firing gate
3. Coordinates outputs and persists artifacts to `.planning/`
4. Returns a unified result without exposing upstream implementation details

This is why the 25 workflows in harnessed can compose ECC, Superpowers, GSD, and gstack simultaneously — the composition layer abstracts the seams.

See [Workflow reference](/docs/reference/workflows/) for all 25 workflows and their upstream dependencies.
