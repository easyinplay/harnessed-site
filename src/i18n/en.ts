const en = {
  promoBar: {
    items: [
      'v4.5.0 released — cross-session learning loop + Ship stage + per-repo workflows',
      'Auto-routed subagents → Agent Teams, decided per subtask',
      'Composing ECC · Superpowers · GSD · gstack',
      'Apache-2.0 · Node 22+ · Cross-platform',
      'Star us on GitHub →',
    ],
  },
  nav: {
    docs: 'Docs',
    github: 'GitHub',
    npm: 'npm',
  },
  hero: {
    versionPill: 'v4.5.0 · 100+ capabilities composed',
    h1: 'The package manager for AI coding harnesses',
    positioning:
      'The executable engine for Harness Engineering on Claude Code — your CLAUDE.md collaboration rules, mechanized into a routing brain.',
    tagline:
      'Compose Skills · MCP · Workflows in one manifest. Skip the curation pain — install proven harness packs in a single command.',
    ctaStart: 'Get Started',
    ctaGitHub: 'View on GitHub',
    meta: 'Apache-2.0 · Node 22+ · Cross-platform',
  },
  whyCards: {
    heading: 'Why harnessed',
    subheading: 'Three principles built into every workflow.',
    card1: {
      title: 'Composition over vendoring',
      body: "Don't fork upstream. Describe install + check in a manifest. Compose ECC, Superpowers, GSD, and gstack into one runnable workflow.",
    },
    card2: {
      title: '5-stage cadence built-in',
      body: 'Discuss → Plan → Task → Verify → Ship, with optional Research and Retro, plus an automatic learning loop. Or run `/auto` for the full pipeline.',
    },
    card3: {
      title: 'Dogfood-first methodology',
      body: 'Every workflow is validated against its own definition. The same discipline that ships harnessed itself.',
    },
  },
  orchestration: {
    heading: 'Parallelism, decided per subtask',
    subheading:
      '`harnessed setup` auto-enables Agent Teams. A routing gate then picks the right execution tier for every subtask — no manual fan-out, no guesswork.',
    tiers: [
      {
        tag: 'downgrade',
        name: 'Main session',
        cond: '< 20 lines · single query',
        body: 'Trivial work stays inline. No spawn, no token overhead.',
      },
      {
        tag: 'default',
        name: 'Subagent fan-out',
        cond: '≤ 3 parallel · no cross-talk',
        body: 'Independent research, verify, and review tasks fan out in isolated context.',
      },
      {
        tag: 'upgrade',
        name: 'Agent Teams',
        cond: '5 triggers · SendMessage',
        body: 'Teammates that align a contract, debate hypotheses, or share a task list escalate to a real team.',
      },
    ],
    wrapper: {
      label: 'orthogonal wrapper',
      name: 'ralph-loop',
      body: 'Wraps any tier and holds it to a verbatim COMPLETE completion-promise.',
    },
    footnote:
      '12 judgment gates mechanize your CLAUDE.md collaboration rules — parallelism, TDD triggers, three-layer clarification — turning static docs into a routing engine.',
  },
  workflowSection: {
    heading: 'One command. Five stages. Zero boilerplate.',
    subheading: 'Each stage composes proven tools from across the AI coding harness ecosystem.',
    stages: {
      research: { name: 'research', role: 'multi-source RAG' },
      discuss: { name: 'discuss', role: '3-layer gates' },
      plan: { name: 'plan', role: 'task_plan.md' },
      task: { name: 'task', role: 'clarify·code·test·deliver' },
      verify: { name: 'verify', role: '7 sub-checks' },
      ship: { name: 'ship', role: 'release-preflight → tag-ready' },
      retro: { name: 'retro', role: 'lessons captured' },
    },
    optional: 'opt',
  },
  workflowTable: {
    heading: '27 composable workflows, 100+ capabilities',
    subheading: 'From research to ship, each backed by a typed manifest.',
    colCommand: 'Command',
    colScope: 'Scope',
    colCaps: 'Capabilities',
    rows: [
      { cmd: '/auto', scope: 'super-master', caps: '6-stage pipeline' },
      { cmd: '/research', scope: 'standalone', caps: 'tavily·exa·ctx7' },
      { cmd: '/discuss', scope: 'stage gate', caps: 'strategic·phase·subtask' },
      { cmd: '/plan', scope: 'stage gate', caps: 'architecture·phase' },
      { cmd: '/task', scope: 'per-subtask', caps: 'clarify·code·test·deliver' },
      { cmd: '/verify', scope: 'stage gate', caps: '7 sub conditional' },
      { cmd: '/ship', scope: 'stage gate', caps: 'release-preflight·gstack-ship' },
      { cmd: '/retro', scope: 'post-ship', caps: 'gstack·persist' },
      { cmd: '/tdd', scope: 'discipline', caps: 'red-green-refactor' },
      { cmd: '/ralph-loop', scope: 'wrapper', caps: 'completion-promise' },
    ],
    githubLink: 'View all workflows on GitHub →',
  },
  quickstart: {
    heading: 'Get started in 60 seconds',
    subheading: 'No config files. No manual scaffolding. Just three commands.',
    steps: [
      {
        num: '1',
        title: 'Install',
        cmd: 'npm install -g harnessed',
        caption: 'Pulls the latest stable from npm.',
      },
      {
        num: '2',
        title: 'Setup',
        cmd: 'harnessed setup',
        caption: 'Auto-enables Agent Teams, user locale, and MCP discovery.',
      },
      {
        num: '3',
        title: 'Compose',
        cmd: '/auto research a new feature',
        caption: 'Run inside Claude Code. The 6-stage pipeline takes over.',
      },
    ],
  },
  communityStats: {
    heading: 'Join the harness ecosystem',
    stats: [
      { value: '100+', label: 'Capabilities composed (ECC · Superpowers · GSD · gstack)' },
      { value: '27', label: 'Workflows shipped' },
      { value: 'v4.5.0', label: 'Latest release · Apache-2.0' },
    ],
    links: {
      discussions: 'GitHub Discussions →',
      issues: 'Issues →',
      releases: 'Releases →',
    },
  },
  faq: {
    heading: 'FAQ',
    subheading: 'Common questions, plain answers.',
    items: [
      {
        q: 'What is harnessed?',
        a: 'harnessed is the package manager and composition orchestrator for AI coding harnesses. It installs, composes, and runs workflows that combine Skills, MCP servers, and other harness packs through a typed manifest — without vendoring upstream code.',
      },
      {
        q: 'Do I need to know Claude Code first?',
        a: "Yes — harnessed runs inside Claude Code. After `harnessed setup`, slash commands like `/auto` and `/discuss` become available. If you're new to Claude Code, see anthropic.com/claude/code.",
      },
      {
        q: 'How does composition work without vendoring?',
        a: 'Each harness pack ships a manifest that describes install steps, capability metadata, and integration points. harnessed reads these manifests, validates compatibility, and stitches the upstream tools together at runtime — so you always run the official upstream, never a stale fork.',
      },
      {
        q: "What's the difference between /auto and individual stage commands?",
        a: '`/auto` runs the full 6-stage pipeline end-to-end with one prompt. Individual stage commands (`/discuss`, `/plan`, `/task`, `/verify`, etc.) give you fine-grained control when you only need part of the cadence.',
      },
      {
        q: 'Does it spawn subagents automatically?',
        a: '`harnessed setup` auto-enables Agent Teams, and a parallelism gate decides the tier per subtask: trivial work stays in the main session, independent tasks fan out as subagents (≤ 3, isolated context), and work that needs cross-talk — contract alignment, hypothesis debate, shared task lists — escalates to a real Agent Team. ralph-loop can wrap any tier to hold it to a verbatim COMPLETE.',
      },
      {
        q: 'Can I write my own harness pack?',
        a: 'Yes. The manifest schema is published in the repo at `schemas/manifest.v1.schema.json` (point your YAML language server at it). Author a manifest pointing at any installable upstream — npm package, git repo, custom skill — and harnessed will treat it as a first-class composable unit.',
      },
    ],
  },
  footer: {
    tagline: 'AI coding harness package manager + composition orchestrator.',
    resources: 'Resources',
    community: 'Community',
    links: {
      github: 'GitHub',
      npm: 'npm',
      changelog: 'Changelog',
      docs: 'Docs',
      discussions: 'Discussions',
      issues: 'Issues',
      twitter: 'Twitter',
    },
    license: 'Apache-2.0 License © 2026 easyinplay',
    madewith: 'Made with discipline',
  },
}

export default en
export type Dict = typeof en
