---
title: CLI commands
description: All harnessed CLI subcommands and flags.
---

## `harnessed setup`

One-shot onboarding — install workflow skills and base manifests to `~/.claude/`.

```bash
harnessed setup [options]
```

**What it does:**

1. Scans `workflows/<name>/SKILL.md` and copies each to `~/.claude/skills/<name>/`
2. Processes `manifests/tools/*.yaml` and `manifests/skill-packs/*.yaml`
3. Writes `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` to `~/.claude/settings.json`
4. Detects OS locale and writes `env.HARNESSED_USER_LANG` (zh-* → `zh-Hans`, else `en`)

**Options:**

| Flag | Description |
|------|-------------|
| `--user-lang <code>` | Override detected locale. Accepts `en`, `zh-Hans`, `zh-CN`, `zh-TW` |
| `--dry-run` | Preview only — print what would be written, no disk changes |

**Exit codes:** `0` = success, `1` = filesystem error, `2` = no SKILL.md workflows found.

---

## `harnessed install <pack>`

Install a harness pack by name or path.

```bash
harnessed install <pack>
```

Resolves the pack manifest, validates it against the schema, and runs each `install` step in order. Currently supports bootstrap install from local paths and git URLs; npm registry pack discovery is planned.

---

## `harnessed list`

List installed packs and their contributed workflows.

```bash
harnessed list
```

Outputs a table of installed packs with name, version, description, and capability summary (skills + workflows contributed).

---

## `harnessed schemas`

Dump the workflow and manifest JSON schemas to stdout.

```bash
harnessed schemas
# → prints full JSON Schema

harnessed schemas > workflow-schema.json
# → write to file for IDE integration
```

---

## `harnessed validate <path>`

Validate a manifest file against the `harnessed.workflow.v3` schema.

```bash
harnessed validate ./my-pack/workflow.yaml
# → ✓ valid
# or: ✗ invalid — with error messages and line numbers
```

Returns exit code `0` on valid, `1` on invalid.

---

## `harnessed resume`

Resume a failed `/auto` run from the last successful stage.

```bash
harnessed resume
```

Reads `.planning/STATE.md` to find the last successful stage and re-enters the pipeline from there. Useful when a stage fails mid-run.

---

## `harnessed status`

Show current pipeline status for the working directory.

```bash
harnessed status
```

Reads `.planning/STATE.md` and prints the current phase, last completed stage, and any blocked items.

---

## `harnessed --version`

```bash
harnessed --version
# → 3.4.0
```

---

## `harnessed --help`

```bash
harnessed --help
harnessed <command> --help   # per-command help
```

---

## Global options

| Flag | Description |
|------|-------------|
| `--version` | Print version and exit |
| `--help` | Print help and exit |

Source: `src/cli.ts` and `src/cli/` in the [harnessed repository](https://github.com/easyinplay/harnessed/tree/main/src/cli).
