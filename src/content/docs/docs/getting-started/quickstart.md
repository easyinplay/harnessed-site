---
title: Quickstart
description: Install harnessed, start your first workflow, and check progress or resume.
---

## 1. Install harnessed and set up your agent

Choose standalone first. It includes the runtime for harnessed itself; upstream
tools have their own prerequisites.

**macOS arm64 / Linux x64**, in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

**Windows x64**, in PowerShell:

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

Follow installer prompts and PATH instructions. Interactive installers offer setup
after consent; do not repeat setup if it already succeeded.

Alternative package routes install and set up in one chain:

**Bun**:

```bash
bun install -g harnessed && bun run --bun harnessed setup
```

**npm**:

```bash
npm install -g harnessed && harnessed setup
```

On Windows these chains require PowerShell 7+. Default setup detects the host;
`--platform` is an advanced override, not a required flag.
Bun needs Bun. In 5.x, harnessed itself and its first-party hooks need no separate Node.js
when explicitly run with Bun. A bare `harnessed` package shim may use a Node shebang;
keep `bun run --bun` explicit. Check upstream prerequisites separately.
npm needs Node.js 22+ but not Bun. See [Installation](/docs/getting-started/installation/)
for supported platforms, runtime boundaries and package updates.

Installation, successful setup and upstream readiness are separate. Review setup
output, permissions and upstream blockers before continuing.

## 2. Start your first workflow

Open your chosen agent in the project after setup. These are **agent prompts**, not
shell commands.

**Claude Code**:

```text
/auto "add a health endpoint to this project"
```

**Codex**:

```text
$auto "add a health endpoint to this project"
```

Codex explicitly invokes the installed `auto` skill with `$auto`. Its
[official skills documentation](https://developers.openai.com/codex/skills/)
describes `/skills` or `$` to select a skill in CLI/IDE. If `auto` is not listed,
check setup for the correct host before proceeding. Do not substitute Claude Code
slash commands into Codex.

The workflow coordinates research when needed, discussion, planning, execution,
verification and a retrospective. Required upstream permissions or readiness gates
can still stop execution; this guide does not bypass them.

## 3. Check progress and resume

In a terminal at your project root, open the status dashboard:

```bash
harnessed
```

Resume an interrupted workflow:

```bash
harnessed resume
```

For the Bun package route, preserve explicit runtime selection:

```bash
bun run --bun harnessed
bun run --bun harnessed resume
```

Runtime selection does not identify the install manager;
npm remains the default updater even when running on Bun. For Bun-managed 5.x
package updates, explicitly select Bun:

```bash
bun run --bun harnessed update --package-manager bun
```

See [Installation](/docs/getting-started/installation/) for runtime boundaries.
Upstream dependencies and permissions remain separate checks; this runtime support
does not certify a full live-model workflow.

For individual stages and a longer example, see [Your first workflow](/docs/getting-started/first-workflow/).

### Legacy 4.x upgrade fallback

When upgrading a legacy 4.x installation, use Bun's native command as a fallback
before following the 5.x guidance above:

```bash
bun add -g harnessed@latest
```
