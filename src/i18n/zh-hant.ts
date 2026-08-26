import type { Dict } from "./en";

const zhHant: Dict = {
  promoBar: {
    items: [
      "v4.32.20 —— 雙通道發佈（npm + 單檔二進位）· ed25519 簽章自動更新與回滾 · 編排回歸 trap 套件",
      "Subagent → Agent Teams 自動路由，依子任務決策",
      "已裝配 ECC · Superpowers · GSD · gstack",
      "Apache-2.0 · Node 22+ · 跨平台",
      "在 GitHub 給我們加星 →",
    ],
  },
  nav: {
    docs: "文件",
    github: "GitHub",
    npm: "npm",
  },
  hero: {
    versionPill: "v4.32.20 · 裝配 100+ 項 capability",
    h1: "AI 編程 harness 的套件管理器",
    positioning:
      "不只是套件管理器，更是裝配編排器 —— 把開源生態中最優秀的元件，用「三層堆疊」(BDD → SDD → TDD) 方法論編排成一個可執行的 engine。",
    tagline:
      "harnessed 是 orchestration brain + prompt library，透過三個秒級純函式 CLI 驅動 native subagent spawn —— harnessed gates（哪些子工作流觸發）、harnessed prompt（子工作流的 spawn-ready prompt）、harnessed checkpoint（記錄進度）。",
    ctaStart: "立即開始",
    ctaGitHub: "在 GitHub 檢視",
    meta: "Apache-2.0 · Node 22+ · 跨平台",
  },
  whyCards: {
    heading: "為什麼選擇 harnessed",
    subheading: "三個貫穿所有工作流的核心理念。",
    card1: {
      title: "裝配主義，而非 vendoring",
      body: "不複製上游程式碼。在清單中描述安裝與檢查，harnessed 便把開源社群最優秀的元件（Superpowers、GSD、gstack、ECC 等）裝配成一個可執行的工作流 —— 永遠跑在上游最新版，無痛享用：更新即可。",
    },
    card2: {
      title: "內建五階段節奏",
      body: "Discuss → Plan → Task → Verify → Ship，可選 Research 與 Retro，已為你組合進每個 loop，並由自動的 Learn 迴圈收尾。或執行 `/auto` 一次跑完整條流程。",
    },
    card3: {
      title: "Dogfood 優先方法論",
      body: "每個工作流都用自身定義來驗證。這正是 harnessed 交付自己時所遵循的紀律。",
    },
  },
  threeLayerStack: {
    heading: "三個巢狀迴圈，而非三個階段",
    subheading:
      "harnessed 的三層堆疊是軟體工程上 BDD → SDD → TDD 巢狀關係的實作。三個 loop，各自回答一個不同的問題。harnessed 把開源生態組合進每個 loop —— 而這些元件彼此部分交集，這正是裝配編排器要仲裁的地方。",
    colLayer: "層 / Loop",
    colQuestion: "回答的問題",
    colComposed: "由哪些元件組合（彼此交集）",
    layers: [
      {
        num: "①",
        name: "Behavior",
        loop: "BDD",
        question: "要做什麼，以及怎樣算做完。",
        composed:
          "gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria",
      },
      {
        num: "②",
        name: "Spec",
        loop: "SDD",
        question: "結構怎麼安排。",
        composed:
          "GSD plan-phase → requirements / design / tasks · contracts（Spec Kit / ECC patterns）",
      },
      {
        num: "③",
        name: "Implementation",
        loop: "TDD",
        question: "它是否真的跑得通。",
        composed:
          "superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion",
      },
    ],
    nested: {
      label: "Nested lenses",
      body: "這些 loop 是巢狀的鏡頭（nested lenses），不是階段。Cucumber 的 BDD-outer + TDD-inner 雙環，在 GenAI 時代外擴出一個 SDD spec 環 → 三層迴圈（triple-loop）。harnessed 是這個 triple-loop 的 linear-cadence 實作 —— 完整的 routed graph 是它的演進方向。預設走訪是 outer → inner；今天真正 ship 的回轉邊有 3 條：Verify → Task（失敗的檢查把工作打回）、subagent 撞到灰色地帶時的 STATUS: NEEDS_CLARIFICATION、以及每個 shipped cycle 的 learnings 餵回下一輪 Discuss。更細粒度的結構化回轉 —— contract 矛盾路由回 Spec、需求歧義回 Behavior —— 屬於 roadmap，尚未 ship。",
    },
    intersections: {
      label: "元件交集",
      body: "交集正是重點 —— 它就是裝配編排器要仲裁的對象。",
      items: [
        { name: "GSD", body: "是 backbone，貫穿全部三個環 —— discuss、plan、verify。" },
        { name: "gstack", body: "橫跨 Behavior + Review。" },
        { name: "superpowers", body: "橫跨 Behavior（brainstorm）+ Implementation（TDD）。" },
      ],
    },
    crossCutting: {
      label: "橫切 disciplines",
      body: "兩個 discipline 貫穿每一層。",
      items: [
        { name: "karpathy principles", body: "how to code —— 最小可行改動、外科手術式編輯。" },
        { name: "mattpocock moves", body: "按需召喚的工具，看場景取用。" },
      ],
    },
    runtime: {
      label: "映射到 runtime",
      body: "Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship 以 evidence gate 收尾閉環。",
    },
  },
  orchestration: {
    heading: "平行度，依子任務自動決策",
    subheading:
      "`harnessed setup` 自動啟用 Agent Teams。接著由路由關卡為每個子任務挑選執行檔位 —— 不必手動 fan-out，不靠猜。",
    tiers: [
      {
        tag: "降級",
        name: "主 session",
        cond: "< 20 行 · 單一查詢",
        body: "瑣碎任務就地執行。不 spawn，沒有 token 開銷。",
      },
      {
        tag: "預設",
        name: "Subagent fan-out",
        cond: "≤ 3 平行 · 無需互通",
        body: "獨立的 research、verify、review 任務在隔離 context 中平行展開。",
      },
      {
        tag: "升級",
        name: "Agent Teams",
        cond: "5 觸發器 · SendMessage",
        body: "需要對齊 contract、辯論對立假設、共享 task list 的 teammate 升級為真正的 team。",
      },
    ],
    wrapper: {
      label: "正交 wrapper",
      name: "ralph-loop",
      body: "套在任一檔位外層，守住 verbatim COMPLETE 完成承諾。",
    },
    footnote:
      "12 道 judgment gate 把你的 AI 協作規則 —— 平行路由、TDD 觸發、三層釐清 —— 從靜態約定機器化為路由引擎。",
  },
  workflowSection: {
    heading: "一條命令，五個階段，零樣板程式碼。",
    subheading: "每個階段都從 AI 編程 harness 生態中裝配經過驗證的工具。",
    stages: {
      research: { name: "research", role: "多來源 RAG" },
      discuss: { name: "discuss", role: "三層關卡" },
      plan: { name: "plan", role: "task_plan.md" },
      task: { name: "task", role: "釐清·編碼·測試·交付" },
      verify: { name: "verify", role: "七項子檢查" },
      ship: { name: "ship", role: "release-preflight → tag-ready" },
      retro: { name: "retro", role: "沉澱經驗" },
    },
    optional: "選用",
  },
  workflowTable: {
    heading: "27 個可裝配工作流，100+ 項 capability",
    subheading: "從 research 到 ship，每個都有型別化清單支撐。",
    colCommand: "命令",
    colScope: "範圍",
    colCaps: "能力",
    rows: [
      { cmd: "/auto", scope: "超級主流程", caps: "六階段管線" },
      { cmd: "/research", scope: "獨立執行", caps: "tavily·exa·ctx7" },
      { cmd: "/discuss", scope: "階段關卡", caps: "策略·階段·子任務" },
      { cmd: "/plan", scope: "階段關卡", caps: "架構·階段" },
      { cmd: "/task", scope: "子任務級", caps: "釐清·編碼·測試·交付" },
      { cmd: "/verify", scope: "階段關卡", caps: "七項條件檢查" },
      { cmd: "/ship", scope: "階段關卡", caps: "release-preflight·gstack-ship" },
      { cmd: "/retro", scope: "ship 之後", caps: "gstack·持久化" },
      { cmd: "/tdd", scope: "紀律", caps: "red-green-refactor" },
      { cmd: "/ralph-loop", scope: "包裝器", caps: "完成承諾" },
    ],
    githubLink: "在 GitHub 檢視全部工作流 →",
  },
  quickstart: {
    heading: "60 秒上手",
    subheading: "不用設定檔，不用手動搭建，只要三條命令。",
    steps: [
      {
        num: "1",
        title: "安裝",
        cmd: "npm install -g harnessed",
        caption: "從 npm 拉取最新穩定版。",
      },
      {
        num: "2",
        title: "初始化",
        cmd: "harnessed setup",
        caption: "自動啟用 Agent Teams、使用者語系、MCP 探索。",
      },
      {
        num: "3",
        title: "裝配",
        cmd: "/auto research a new feature",
        caption: "在你的 AI 編程 agent 中執行，六階段管線自動接手。",
      },
    ],
  },
  communityStats: {
    heading: "加入 harness 生態",
    stats: [
      { value: "100+", label: "已裝配 capability (ECC · Superpowers · GSD · gstack)" },
      { value: "28", label: "已發佈工作流" },
      { value: "v4.32.20", label: "最新版本 · Apache-2.0" },
    ],
    links: {
      discussions: "GitHub Discussions →",
      issues: "Issues →",
      releases: "Releases →",
    },
  },
  faq: {
    heading: "常見問題",
    subheading: "常見疑問，直白回答。",
    items: [
      {
        q: "harnessed 是什麼？",
        a: "harnessed 是 AI 編程 harness 的套件管理器與裝配編排器。它透過型別化清單安裝、裝配並執行整合了 Skills、MCP 伺服器及其他 harness 套件的工作流 —— 不必 vendor 上游程式碼。",
      },
      {
        q: "它在哪個 AI 編程 agent 裡執行？",
        a: "harnessed 在 AI 編程 agent 內執行。Claude Code 是主要目標 —— 執行 `harnessed setup` 後，`/auto`、`/discuss` 等斜線命令即可使用（剛接觸 Claude Code？請看 anthropic.com/claude/code）。Codex 等其他 harness 透過跨 harness 平台層支援。",
      },
      {
        q: "不 vendor 上游要怎麼做裝配？",
        a: "每個 harness 套件都附一份清單，描述安裝步驟、能力 metadata 與整合點。harnessed 讀取這些清單、驗證相容性，並在 runtime 把上游工具拼接起來 —— 你跑的永遠是官方上游，而不是陳舊的 fork。",
      },
      {
        q: "/auto 和單獨的階段命令差在哪？",
        a: "`/auto` 用一個 prompt 端到端跑完整條六階段管線。單獨的階段命令（`/discuss`、`/plan`、`/task`、`/verify` 等）在你只需要部分節奏時提供細緻控制。",
      },
      {
        q: "它會自動 spawn subagent 嗎？",
        a: "`harnessed setup` 自動啟用 Agent Teams，並由 parallelism gate 依子任務決定檔位：瑣碎任務留在主 session，獨立任務以 subagent fan-out（≤ 3、隔離 context），需要互通的任務 —— 對齊 contract、辯論假設、共享 task list —— 升級為真正的 Agent Team。ralph-loop 可套在任一檔位外層，守住 verbatim COMPLETE。",
      },
      {
        q: "可以寫自己的 harness 套件嗎？",
        a: "可以。清單 schema 發佈在 repo 的 `schemas/manifest.v1.schema.json`（把 YAML language server 指向它）。撰寫一份指向任何可安裝上游的清單 —— npm 套件、git 儲存庫、自訂 skill —— harnessed 就會把它視為一等的可裝配單元。",
      },
    ],
  },
  footer: {
    tagline: "AI 編程 harness 套件管理器 + 裝配編排器。",
    resources: "資源",
    community: "社群",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      docs: "文件",
      discussions: "Discussions",
      issues: "Issues",
      twitter: "Twitter",
    },
    license: "Apache-2.0 授權條款 © 2026 easyinplay",
    madewith: "以紀律打磨而成",
  },
};

export default zhHant;
