import type { Dict } from './en'

const zhHans: Dict = {
  promoBar: {
    items: [
      'v4.9.1 —— CC-native /auto 编排 · 会话级 workflow 状态 · Codex + 简中 i18n',
      'Subagent → Agent Teams 自动路由，按子任务决策',
      '已装配 ECC · Superpowers · GSD · gstack',
      'Apache-2.0 · Node 22+ · 跨平台',
      '在 GitHub 给我们加星 →',
    ],
  },
  nav: {
    docs: '文档',
    github: 'GitHub',
    npm: 'npm',
  },
  hero: {
    versionPill: 'v4.9.1 · 装配 100+ 项 capability',
    h1: 'AI 编程脚手架的包管理器',
    positioning:
      '不止是包管理器,更是装配编排器 —— 把市面上最优秀的开源生态组件,用「三层栈」(BDD → SDD → TDD) 方法论编排成一个可执行的 engine。',
    tagline:
      'gstack 决策 · GSD 项目经理 · superpowers 资深工程师 · karpathy 心法 · mattpocock 招式 · ECC 黑客松冠军配置 —— 一条命令装配就位。',
    ctaStart: '立即开始',
    ctaGitHub: '在 GitHub 查看',
    meta: 'Apache-2.0 · Node 22+ · 跨平台',
  },
  whyCards: {
    heading: '为什么选择 harnessed',
    subheading: '三个贯穿所有工作流的核心理念。',
    card1: {
      title: '装配主义，而非 vendoring',
      body: '不复制上游代码。在清单中描述安装与检查，把 ECC、Superpowers、GSD、gstack 装配成一个可运行的工作流。',
    },
    card2: {
      title: '内置五阶段节奏',
      body: 'Discuss → Plan → Task → Verify → Ship，可选 Research 与 Retro，外加自动学习回环。或运行 `/auto` 一键跑完整流程。',
    },
    card3: {
      title: 'Dogfood 优先方法论',
      body: '每个工作流都用自身定义来验证。这是 harnessed 自己交付时所遵循的纪律。',
    },
  },
  threeLayerStack: {
    heading: '三个嵌套回环，而非三个阶段',
    subheading:
      'harnessed 的三层栈方案是软件工程上 BDD → SDD → TDD 三者的嵌套实现。三个 loop，各自回答一个不同的问题。harnessed 把开源生态组合进每个 loop —— 而这些组件部分交集，这正是装配编排器需要仲裁的地方。',
    colLayer: '层 / Loop',
    colQuestion: '回答的问题',
    colComposed: '由哪些组件组合（彼此交集）',
    layers: [
      {
        num: '①',
        name: 'Behavior',
        loop: 'BDD',
        question: '做什么，以及怎样算做完。',
        composed: 'gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria',
      },
      {
        num: '②',
        name: 'Spec',
        loop: 'SDD',
        question: '怎样组织结构。',
        composed: 'GSD plan-phase → requirements / design / tasks · contracts（Spec Kit / ECC patterns）',
      },
      {
        num: '③',
        name: 'Implementation',
        loop: 'TDD',
        question: '它是否真的能跑通。',
        composed: 'superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion',
      },
    ],
    nested: {
      label: 'Nested lenses',
      body: '这些 loop 是嵌套的镜头（nested lenses），不是阶段。Cucumber 的 BDD-outer + TDD-inner 双环，在 GenAI 时代外扩出一个 SDD spec 环 → 三层回环（triple-loop）。harnessed 是这个 triple-loop 的 linear-cadence 实现 —— 完整的 routed graph 是它的演进方向。默认遍历是 outer → inner；今天真正 ship 的回转边有 3 条：Verify → Task（失败的检查把工作打回）、subagent 撞灰区时的 STATUS: NEEDS_CLARIFICATION、以及每个 shipped cycle 的 learnings 喂回下一轮 Discuss。更细粒度的结构化回转 —— contract 矛盾路由回 Spec、需求歧义回 Behavior —— 属于 roadmap，尚未 ship。',
    },
    intersections: {
      label: '组件交集',
      body: '交集正是重点 —— 它就是装配编排器要仲裁的对象。',
      items: [
        { name: 'GSD', body: '是 backbone，贯穿全部三个环 —— discuss、plan、verify。' },
        { name: 'gstack', body: '横跨 Behavior + Review。' },
        { name: 'superpowers', body: '横跨 Behavior（brainstorm）+ Implementation（TDD）。' },
      ],
    },
    crossCutting: {
      label: '横切 disciplines',
      body: '两个 discipline 贯穿每一层。',
      items: [
        { name: 'karpathy principles', body: 'how to code —— 最小可行改动、外科手术式编辑。' },
        { name: 'mattpocock moves', body: '按需召唤的工具，看场景取用。' },
      ],
    },
    runtime: {
      label: '映射到 runtime',
      body: 'Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship 以 evidence gate 收尾闭环。',
    },
  },
  orchestration: {
    heading: '并行度，按子任务自动决策',
    subheading:
      '`harnessed setup` 自动启用 Agent Teams。随后由路由关卡为每个子任务挑选执行档位 —— 无需手动 fan-out，不靠猜。',
    tiers: [
      {
        tag: '降级',
        name: '主 session',
        cond: '< 20 行 · 单命令查询',
        body: '琐碎任务内联执行。不 spawn，无 token 开销。',
      },
      {
        tag: '默认',
        name: 'Subagent fan-out',
        cond: '≤ 3 并行 · 无需互通',
        body: '独立的 research、verify、review 任务在隔离 context 中并行展开。',
      },
      {
        tag: '升级',
        name: 'Agent Teams',
        cond: '5 触发器 · SendMessage',
        body: '需对齐 contract、辩论对立假设、共享 task list 的 teammate 升级为真正的 team。',
      },
    ],
    wrapper: {
      label: '正交 wrapper',
      name: 'ralph-loop',
      body: '套在任意档位外层，守住 verbatim COMPLETE 完成承诺。',
    },
    footnote:
      '12 道 judgment gate 把你的 AI 协作规则 —— 并行路由、TDD 触发、三层澄清 —— 从静态约定机器化为路由引擎。',
  },
  workflowSection: {
    heading: '一条命令，五个阶段，零样板代码。',
    subheading: '每个阶段都从 AI 编程脚手架生态中装配经过验证的工具。',
    stages: {
      research: { name: 'research', role: '多源 RAG' },
      discuss: { name: 'discuss', role: '三层关卡' },
      plan: { name: 'plan', role: 'task_plan.md' },
      task: { name: 'task', role: '澄清·编码·测试·交付' },
      verify: { name: 'verify', role: '七项子检查' },
      ship: { name: 'ship', role: 'release-preflight → tag-ready' },
      retro: { name: 'retro', role: '沉淀经验' },
    },
    optional: '可选',
  },
  workflowTable: {
    heading: '27 个可装配工作流，100+ 项 capability',
    subheading: '从 research 到 ship，每个都有类型化清单支撑。',
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
      { cmd: '/ship', scope: '阶段关卡', caps: 'release-preflight·gstack-ship' },
      { cmd: '/retro', scope: 'ship 之后', caps: 'gstack·持久化' },
      { cmd: '/tdd', scope: '纪律', caps: 'red-green-refactor' },
      { cmd: '/ralph-loop', scope: '包装器', caps: '完成承诺' },
    ],
    githubLink: '在 GitHub 上查看全部工作流 →',
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
        caption: '在你的 AI 编程 agent 中运行，六阶段流水线自动接管。',
      },
    ],
  },
  communityStats: {
    heading: '加入 harness 生态',
    stats: [
      { value: '100+', label: '已装配 capability (ECC · Superpowers · GSD · gstack)' },
      { value: '27', label: '已发布工作流' },
      { value: 'v4.9.1', label: '最新版本 · Apache-2.0' },
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
        q: '它在哪个 AI 编程 agent 里运行？',
        a: 'harnessed 在 AI 编程 agent 内运行。Claude Code 是主要目标 —— 执行 `harnessed setup` 后，`/auto`、`/discuss` 等斜杠命令即可使用（刚接触 Claude Code？访问 anthropic.com/claude/code）。Codex 等其他 harness 通过跨 harness 平台层支持。',
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
        q: '它会自动 spawn subagent 吗？',
        a: '`harnessed setup` 自动启用 Agent Teams，并由 parallelism gate 按子任务决策档位：琐碎任务留在主 session，独立任务以 subagent fan-out（≤ 3、隔离 context），需要互通的任务 —— 对齐 contract、辩论假设、共享 task list —— 升级为真正的 Agent Team。ralph-loop 可套在任意档位外层，守住 verbatim COMPLETE。',
      },
      {
        q: '可以写自己的 harness 包吗？',
        a: '可以。清单 schema 发布在 repo 的 `schemas/manifest.v1.schema.json`（把 YAML language server 指向它）。编写一份指向任何可安装上游的清单 —— npm 包、git 仓库、自定义 skill —— harnessed 会将其视为一等可装配单元。',
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
    license: 'Apache-2.0 许可证 © 2026 easyinplay',
    madewith: '以纪律打磨而成',
  },
}

export default zhHans
