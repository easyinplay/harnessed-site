---
title: Installation
description: Install harnessed and run setup in 30 seconds.
---

## Prerequisites

- **Node.js 22+** — harnessed uses ESM and requires Node 22 or newer
- **Claude Code** — harnessed runs inside Claude Code; install it first from [anthropic.com/claude/code](https://anthropic.com/claude/code)

## Install

```bash
npm install -g harnessed
```

Verify the install:

```bash
harnessed --version
# → 4.3.0
```

## Run setup

```bash
harnessed setup
```

Setup performs four steps automatically:

1. **Enables Agent Teams** — writes `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` to `~/.claude/settings.json` so multi-agent patterns (Pattern A full-stack, Pattern C specialist review) work out of the box
2. **Sets user language** — detects OS locale and writes `env.HARNESSED_USER_LANG` (zh-* → `zh-Hans`, everything else → `en`); override with `--user-lang`
3. **Installs workflow skills** — copies each `workflows/<name>/SKILL.md` to `~/.claude/skills/<name>/` so slash commands become available in Claude Code
4. **Processes base manifests** — runs through `manifests/tools/*.yaml` and `manifests/skill-packs/*.yaml` to register upstream tool dependencies

After setup, slash commands like `/auto`, `/discuss`, `/plan`, `/task`, and `/verify` are available in any Claude Code session.

## Optional flags

```bash
harnessed setup --user-lang zh-Hans   # force Chinese regardless of OS locale
harnessed setup --user-lang en        # force English
harnessed setup --dry-run             # preview what would be written — no disk changes
```

See the full flag list in [CLI commands](/docs/reference/cli/).

## Windows note

PowerShell 5.x does not support `&&` chaining. Use `;` or two separate lines:

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+, bash, zsh, and cmd.exe all support the single-line form.
