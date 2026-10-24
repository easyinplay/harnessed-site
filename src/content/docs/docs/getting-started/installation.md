---
title: Installation
description: Choose standalone, Bun or npm, then set up Claude Code or Codex.
---

## Standalone (recommended)

harnessed includes its own runtime in the standalone binary. You do not need
separate Node.js or Bun **for harnessed itself**. Upstream tools and your coding
agent may still require Node.js, Bun, Git, other dependencies and authorization.

### macOS arm64 / Linux x64

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

Installs to `~/.local/bin/harnessed`. Follow the installer's per-shell PATH
instructions if that directory is not already on PATH, then open a new terminal.

### Windows x64 (PowerShell)

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

Installs to `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`. The installer requests
consent before updating the user PATH in interactive sessions; otherwise it prints
manual instructions. Open a new terminal when needed.

Both installers download GitHub release assets and verify their `.sha256` checksum.
Interactive installers offer setup after consent. Follow their prompts and PATH
instructions; do not run setup again if it already completed successfully.
For other architectures, choose the package routes below. See
[`harnessed update`](/docs/reference/cli/#harnessed-update) for binary updates and rollback.

## Bun (secondary)

Requires an existing Bun installation. In 4.x, first-party hooks still use Node
transport and require **Node.js 22+**, even when harnessed runs with Bun.
Install and set up with the explicit Bun runtime:

```bash
bun install -g harnessed && bun run --bun harnessed setup
```

Keep `bun run --bun` explicit: a bare `harnessed` package shim may use a Node
shebang. The runtime does not identify the install manager. For a Bun-managed
package, use Bun's native update command, which works across harnessed versions:

```bash
bun add -g harnessed@latest
```

## npm (compatibility)

Requires **Node.js 22+**; Bun is not required.

```bash
npm install -g harnessed && harnessed setup
```

These chains use `&&` (PowerShell 7+ on Windows).

## Advanced host override

Install Claude Code or Codex separately. Default `harnessed setup` uses host
detection; no `--platform` flag is required. When both environments are ambiguous,
the current CLI prefers Claude Code, not an inferred user preference. Use an
explicit override only when needed, not as a second required setup step.

**Claude Code**, with standalone or npm:

```bash
harnessed setup --platform claude
```

**Codex**, with standalone or npm:

```bash
harnessed setup --platform codex
```

**Bun**, with explicit runtime selection:

```bash
bun run --bun harnessed setup --platform claude
```

Or, for Codex:

```bash
bun run --bun harnessed setup --platform codex
```

Setup installs host-specific workflow skills and processes upstream manifests.
Claude Code settings and Codex integration differ; installation alone is not proof
of successful setup or upstream readiness. Review setup output, permissions and
any upstream blockers before starting a workflow.

Use `--dry-run` to preview setup changes, or `--user-lang zh-Hans` / `--user-lang en`
to choose the language. See [CLI commands](/docs/reference/cli/) for all flags.
For PowerShell 5.x, run the install and setup commands separately, checking that
installation succeeded before setup.

Continue with the [three-step Quickstart](/docs/getting-started/quickstart/).
