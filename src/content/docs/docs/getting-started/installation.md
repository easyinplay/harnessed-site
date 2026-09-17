---
title: Installation
description: Install harnessed and run setup in 30 seconds.
---

## Prerequisites

- **Node.js 22+** — harnessed uses ESM and requires Node 22 or newer
- **An AI coding agent** — harnessed runs inside one. Claude Code is the primary target (install it from [anthropic.com/claude/code](https://anthropic.com/claude/code)); Codex and other harnesses are supported via the cross-harness platform layer

## Install

```bash
npm install -g harnessed
```

Verify the install:

```bash
harnessed --version
# → 4.43.0
```

## Standalone binary (no Node.js)

No Node.js? Install the self-contained single-file binary instead — per-platform, self-updates via `harnessed update`:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

Installs to `~/.local/bin/harnessed`. PATH is never auto-edited on unix — if `~/.local/bin` is not on your PATH, the installer prints the exact per-shell snippet to add.

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

Installs to `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`. Interactive sessions get a consent prompt before an idempotent user-scope PATH append; non-interactive runs print a manual instruction instead.

Both installers download the platform asset from GitHub releases and verify its `.sha256` checksum. The binary and npm channels run the same CLI — everything below applies unchanged. See [`harnessed update`](/docs/reference/cli/#harnessed-update) for how the binary self-updates (ed25519-signed) and rolls back.

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
