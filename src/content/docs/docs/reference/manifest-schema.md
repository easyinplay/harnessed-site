---
title: Manifest schema
description: The typed contract harness packs follow.
---

Every harness pack ships a manifest — a YAML file validated against the `harnessed.workflow.v3` schema. The manifest tells harnessed how to install the pack, what capabilities it exposes, and how it delegates to sub-workflows.

## Schema version

```yaml
schema_version: harnessed.workflow.v3
```

## Top-level fields

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // unique pack identifier
  version: string                 // semver (e.g. "4.3.0")
  description: string             // one paragraph, used in `harnessed list`
  install?: InstallStep[]         // steps to install upstream dependencies
  capability?: Capability         // what this pack contributes
  delegates_to?: SubWorkflowRef[] // for orchestrator workflows
  disciplines_applied?: string[]  // cross-cutting rules (e.g. "karpathy")
  tools_available?: string[]      // tools this workflow can call
}
```

## Install steps

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // run arbitrary shell command
```

Example:

```yaml
install:
  - npm: superpowers
  - npm: "@oh-my-claude/gsd"
  - git: https://github.com/example/skill-pack-extra
  - script: harnessed setup --user-lang en
```

## Capability

```typescript
interface Capability {
  skills?: string[]    // slash-command skills contributed
  workflows?: string[] // workflow names contributed
  mcp?: string[]       // MCP server names registered
}
```

Example:

```yaml
capability:
  skills:
    - brainstorming
    - tdd
  workflows:
    - discuss
    - plan
    - task
    - verify
  mcp:
    - tavily
    - exa
```

## Delegates to (orchestrator workflows)

For master and super-master workflows that spawn sub-workflows:

```typescript
interface SubWorkflowRef {
  name: string    // sub-workflow name
  order: number   // execution order (0-indexed)
  mode: 'serial' | 'parallel'
  gate?: string   // judgment key that must be true for this sub to fire
}
```

Example (from `workflows/auto/workflow.yaml`):

```yaml
delegates_to:
  - name: research
    order: 0
    mode: serial
    gate: judgments.stage-routing.auto-research-unclear.fires
  - name: discuss
    order: 1
    mode: serial
  - name: plan
    order: 2
    mode: serial
  - name: task
    order: 3
    mode: serial
  - name: verify
    order: 4
    mode: serial
  - name: retro
    order: 5
    mode: serial
```

## Validation

Manifests are validated with AJV + ajv-errors + ajv-formats on install and at `harnessed validate`:

```bash
harnessed validate ./my-pack/workflow.yaml
# → ✓ valid  (or error messages with line numbers)
```

## Dump the schema locally

```bash
harnessed schemas
# Prints the full JSON Schema to stdout.
# Pipe to a file for IDE integration:
harnessed schemas > workflow-schema.json
```

The schema file is also published as part of the npm package at `node_modules/harnessed/schemas/workflow.schema.json`.

## Example: minimal pack manifest

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: Adds OAuth2 discussion and task workflows for Express apps.
install:
  - npm: superpowers
  - git: https://github.com/example/oauth-skill-pack
capability:
  skills:
    - brainstorming
  workflows:
    - discuss
    - task
disciplines_applied:
  - karpathy
  - output-style
```
