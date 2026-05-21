import type { Dict } from './en'

const zhHans: Dict = {
  promoBar: {
    items: [
      'v3.4.0 发布 —— CLI 国际化 + 通用语言规则',
      '新功能：六阶段 `/auto` 流水线，强制 Retro',
      '已装配 ECC · Superpowers · GSD · gstack',
      'MIT 许可证 · Node 22+ · 跨平台',
      '在 GitHub 给我们加星 →',
    ],
  },
  nav: {
    docs: '文档',
    github: 'GitHub',
    npm: 'npm',
  },
  hero: {
    versionPill: 'v3.4.0 · CLI 国际化 + GA',
    h1: 'AI 编程脚手架的包管理器',
    tagline:
      '在一份清单中编排 Skills · MCP · Workflows。省去手工拼装的痛苦 —— 一条命令安装经过验证的脚手架包。',
    ctaStart: '立即开始',
    ctaGitHub: '在 GitHub 查看',
    meta: 'MIT · Node 22+ · 跨平台',
  },
  whyCards: {
    heading: '为什么选择 harnessed',
    subheading: '三个贯穿所有工作流的核心理念。',
    card1: {
      title: '装配主义，而非 vendoring',
      body: '不复制上游代码。在清单中描述安装与检查，把 ECC、Superpowers、GSD、gstack 装配成一个可运行的工作流。',
    },
    card2: {
      title: '内置四阶段节奏',
      body: 'Discuss → Plan → Task → Verify，可选 Research，强制 Retro。或运行 `/auto` 一键跑完整流程。',
    },
    card3: {
      title: 'Dogfood 优先方法论',
      body: '每个工作流都用自身定义来验证。这是 harnessed 自己交付时所遵循的纪律。',
    },
  },
  workflowSection: {
    heading: '一条命令，六个阶段，零样板代码。',
    subheading: '每个阶段都从 AI 编程脚手架生态中装配经过验证的工具。',
    stages: {
      research: { name: 'research', role: '多源 RAG' },
      discuss: { name: 'discuss', role: '三层关卡' },
      plan: { name: 'plan', role: 'task_plan.md' },
      task: { name: 'task', role: '澄清·编码·测试·交付' },
      verify: { name: 'verify', role: '七项子检查' },
      retro: { name: 'retro', role: '沉淀经验' },
    },
    optional: '可选',
  },
  workflowTable: {
    heading: '25 个可装配的工作流，开箱即用',
    subheading: '从 research 到 retro，每个都有类型化清单支撑。',
    colCommand: '命令',
    colScope: '范围',
    colCaps: '能力',
    rows: [
      { cmd: '/auto', scope: '超级主流程', caps: '六阶段流水线' },
      { cmd: '/research', scope: '独立运行', caps: 'tavily·exa·ctx7' },
      { cmd: '/discuss', scope: '阶段关卡', caps: '战略·阶段·子任务' },
      { cmd: '/plan', scope: '阶段关卡', caps: '架构·阶段' },
      { cmd: '/task', scope: '子任务级', caps: '澄清·编码·测试·交付' },
      { cmd: '/verify', scope: '阶段关卡', caps: '七项条件检查' },
      { cmd: '/retro', scope: '验证后', caps: 'gstack·持久化' },
      { cmd: '/tdd', scope: '纪律', caps: 'red-green-refactor' },
      { cmd: '/ralph-loop', scope: '包装器', caps: '完成承诺' },
    ],
    githubLink: '在 GitHub 上查看全部 25 个工作流 →',
  },
  quickstart: {
    heading: '60 秒上手',
    subheading: '无需配置文件，无需手动搭建，只要三条命令。',
    steps: [
      {
        num: '1',
        title: '安装',
        cmd: 'npm install -g harnessed',
        caption: '从 npm 拉取最新稳定版。',
      },
      {
        num: '2',
        title: '初始化',
        cmd: 'harnessed setup',
        caption: '自动启用 Agent Teams、用户语言、MCP 发现。',
      },
      {
        num: '3',
        title: '装配',
        cmd: '/auto research a new feature',
        caption: '在 Claude Code 中运行，六阶段流水线自动接管。',
      },
    ],
  },
  communityStats: {
    heading: '加入 harness 生态',
    stats: [
      { value: '4+', label: '已装配的兄弟生态 (ECC · Superpowers · GSD · gstack)' },
      { value: '25', label: '已发布工作流' },
      { value: 'v3.4.0', label: '最新版本 · MIT' },
    ],
    links: {
      discussions: 'GitHub Discussions →',
      issues: 'Issues →',
      releases: 'Releases →',
    },
  },
  faq: {
    heading: '常见问题',
    subheading: '常见疑问，直白回答。',
    items: [
      {
        q: 'harnessed 是什么？',
        a: 'harnessed 是 AI 编程脚手架的包管理器与装配编排器。它通过类型化清单安装、装配并运行整合了 Skills、MCP 服务器及其他脚手架包的工作流 —— 无需 vendor 上游代码。',
      },
      {
        q: '需要先熟悉 Claude Code 吗？',
        a: '需要 —— harnessed 在 Claude Code 内运行。执行 `harnessed setup` 后，`/auto`、`/discuss` 等斜杠命令即可使用。如果你刚接触 Claude Code，请访问 anthropic.com/claude/code。',
      },
      {
        q: '不 vendor 上游怎么做装配？',
        a: '每个脚手架包都附带一份清单，描述安装步骤、能力元数据和集成点。harnessed 读取这些清单、验证兼容性，并在运行时将上游工具拼接在一起 —— 你始终运行的是官方上游，而不是陈旧的 fork。',
      },
      {
        q: '/auto 和单独的阶段命令有什么区别？',
        a: '`/auto` 用一个 prompt 端到端运行完整的六阶段流水线。单独的阶段命令（`/discuss`、`/plan`、`/task`、`/verify` 等）在你只需要部分节奏时提供精细控制。',
      },
      {
        q: '可以写自己的 harness 包吗？',
        a: '可以。清单 schema 已公开发布（`harnessed schemas` 可查看）。编写一份指向任何可安装上游的清单 —— npm 包、git 仓库、自定义 skill —— harnessed 会将其视为一等可装配单元。',
      },
    ],
  },
  footer: {
    tagline: 'AI 编程脚手架包管理器 + 装配编排器。',
    resources: '资源',
    community: '社区',
    links: {
      github: 'GitHub',
      npm: 'npm',
      changelog: 'Changelog',
      docs: '文档',
      discussions: 'Discussions',
      issues: 'Issues',
      twitter: 'Twitter',
    },
    license: 'MIT 许可证 © 2026 easyinplay',
    madewith: '以纪律打磨而成',
  },
}

export default zhHans
