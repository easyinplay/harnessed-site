import type { Dict } from "./en";

const ja: Dict = {
  promoBar: {
    items: [
      "v4.43.0 — 宣言されたまま評価されない schema フィールドを検出するゲート · 外部コードレビュー 39 件に対応 · Windows で安全な spawn と codex プラグイン検出",
      "Subagent → Agent Teams への自動ルーティング、サブタスクごとに判断",
      "ECC · Superpowers · GSD · gstack を合成",
      "Apache-2.0 · Node 22+ · クロスプラットフォーム",
      "GitHub でスターをお願いします →",
    ],
  },
  nav: {
    docs: "ドキュメント",
    github: "GitHub",
    npm: "npm",
  },
  hero: {
    versionPill: "v4.43.0 · 100+ の capability を合成",
    h1: "AI コーディング harness のパッケージマネージャー",
    positioning:
      "単なるパッケージマネージャーではなく、合成オーケストレーターです。オープンソースエコシステムの best を 1 つの実行可能な engine にまとめ、三層メソドロジー（BDD → SDD → TDD）で配線します。",
    tagline:
      "harnessed は orchestration brain + prompt library です。3 つの高速な純関数 CLI —— `harnessed gates`（どのサブワークフローが発火するか）、`harnessed prompt`（サブ用の spawn-ready prompt）、`harnessed checkpoint`（進捗の記録）—— を通じて native subagent spawn を駆動します。",
    ctaStart: "はじめる",
    ctaGitHub: "GitHub で見る",
    meta: "Apache-2.0 · Node 22+ · クロスプラットフォーム",
  },
  whyCards: {
    heading: "harnessed を選ぶ理由",
    subheading: "すべてのワークフローに組み込まれた 3 つの原則。",
    card1: {
      title: "vendoring ではなく合成",
      body: "upstream を fork しません。install と check をマニフェストに記述するだけで、harnessed がオープンソースエコシステムの best（Superpowers、GSD、gstack、ECC …）を 1 つの実行可能なワークフローに合成します。常に最新の upstream を、痛みなく: update するだけです。",
    },
    card2: {
      title: "5 段階のリズムを標準装備",
      body: "Discuss → Plan → Task → Verify → Ship。任意の Research と Retro を含めてすべての loop に組み込まれ、自動の Learn サイクルで閉じます。あるいは `/auto` を実行すればパイプライン全体を一気に走らせられます。",
    },
    card3: {
      title: "Dogfood 優先のメソドロジー",
      body: "すべてのワークフローは自身の定義に対して検証されます。harnessed 自体を出荷するのと同じ規律です。",
    },
  },
  threeLayerStack: {
    heading: "3 つの段階ではなく、3 つの入れ子ループ",
    subheading:
      "harnessed の三層スタックは、確立された BDD → SDD → TDD の入れ子構造をソフトウェアエンジニアリングとして実装したものです。3 つの loop がそれぞれ別の問いに答えます。harnessed は各 loop にオープンソースエコシステムを合成しますが、コンポーネントは部分的に重なります。その重なりの調停こそ、合成オーケストレーターの仕事です。",
    colLayer: "レイヤー / Loop",
    colQuestion: "答える問い",
    colComposed: "合成元（重なりあり）",
    layers: [
      {
        num: "①",
        name: "Behavior",
        loop: "BDD",
        question: "何を作るか、そして何をもって完了とするか。",
        composed:
          "gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria",
      },
      {
        num: "②",
        name: "Spec",
        loop: "SDD",
        question: "どう構造化するか。",
        composed:
          "GSD plan-phase → requirements / design / tasks · contracts（Spec Kit / ECC patterns）",
      },
      {
        num: "③",
        name: "Implementation",
        loop: "TDD",
        question: "実際に動くのか。",
        composed:
          "superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion",
      },
    ],
    nested: {
      label: "Nested lenses",
      body: "これらの loop は段階ではなく入れ子のレンズ（nested lenses）です。Cucumber の BDD-outer + TDD-inner という二重ループを、GenAI 時代に SDD の spec リングで拡張したものが triple-loop です。harnessed はこの triple-loop の linear-cadence 実装であり、完全な routed graph は進化の到達点です。既定の走査は outer → inner。今日出荷済みのフィードバック辺は 3 本あります: Verify → Task（失敗したチェックが作業を差し戻す）、グレーゾーンで subagent が返す STATUS: NEEDS_CLARIFICATION、そして出荷済みサイクルの learnings が次の Discuss に流れ込むこと。より粒度の細かい構造化された戻り —— contract の矛盾を Spec へ、要件の曖昧さを Behavior へ —— は roadmap 上であり、まだ出荷されていません。",
    },
    intersections: {
      label: "コンポーネントの交差",
      body: "重なりこそが要点であり、合成オーケストレーターが調停する対象です。",
      items: [
        {
          name: "GSD",
          body: "は backbone で、discuss・plan・verify と 3 つのリングすべてを貫きます。",
        },
        { name: "gstack", body: "は Behavior + Review にまたがります。" },
        {
          name: "superpowers",
          body: "は Behavior（brainstorm）+ Implementation（TDD）にまたがります。",
        },
      ],
    },
    crossCutting: {
      label: "横断する規律",
      body: "2 つの規律がすべてのレイヤーを貫きます。",
      items: [
        {
          name: "karpathy principles",
          body: "how to code —— 最小限の実行可能な変更、外科手術的な編集。",
        },
        { name: "mattpocock moves", body: "オンデマンドのツール、状況ごとに呼び出す。" },
      ],
    },
    runtime: {
      label: "runtime へのマッピング",
      body: "Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship が evidence gate でループを閉じます。",
    },
  },
  orchestration: {
    heading: "並列度は、サブタスクごとに決まる",
    subheading:
      "`harnessed setup` が Agent Teams を自動で有効化します。あとはルーティングゲートがサブタスクごとに適切な実行ティアを選びます。手動 fan-out も当て推量も不要です。",
    tiers: [
      {
        tag: "ダウングレード",
        name: "メイン session",
        cond: "< 20 行 · 単一クエリ",
        body: "些細な作業はインラインのまま。spawn なし、token のオーバーヘッドなし。",
      },
      {
        tag: "デフォルト",
        name: "Subagent fan-out",
        cond: "≤ 3 並列 · 相互通信なし",
        body: "独立した research・verify・review タスクを隔離された context で fan-out します。",
      },
      {
        tag: "アップグレード",
        name: "Agent Teams",
        cond: "5 つのトリガー · SendMessage",
        body: "contract を揃える、仮説を戦わせる、task list を共有する teammate は本物の team に昇格します。",
      },
    ],
    wrapper: {
      label: "直交する wrapper",
      name: "ralph-loop",
      body: "任意のティアを包み、verbatim の COMPLETE という完了約束を守らせます。",
    },
    footnote:
      "12 の judgment gate があなたの AI コラボレーション規則 —— 並列度、TDD トリガー、三層の明確化 —— を機械化し、静的な規約をルーティングエンジンに変えます。",
  },
  workflowSection: {
    heading: "1 コマンド。5 段階。ボイラープレートゼロ。",
    subheading:
      "各段階が AI コーディング harness エコシステム全体から実証済みのツールを合成します。",
    stages: {
      research: { name: "research", role: "マルチソース RAG" },
      discuss: { name: "discuss", role: "3 層ゲート" },
      plan: { name: "plan", role: "task_plan.md" },
      task: { name: "task", role: "明確化・実装・テスト・納品" },
      verify: { name: "verify", role: "7 つのサブチェック" },
      ship: { name: "ship", role: "release-preflight → tag-ready" },
      retro: { name: "retro", role: "学びを記録" },
    },
    optional: "任意",
  },
  workflowTable: {
    heading: "27 の合成可能なワークフロー、100+ の capability",
    subheading: "research から ship まで、それぞれが型付きマニフェストに裏打ちされています。",
    colCommand: "コマンド",
    colScope: "スコープ",
    colCaps: "capability",
    rows: [
      { cmd: "/auto", scope: "super-master", caps: "6 段階パイプライン" },
      { cmd: "/research", scope: "単体実行", caps: "tavily·exa·ctx7" },
      { cmd: "/discuss", scope: "ステージゲート", caps: "戦略·フェーズ·サブタスク" },
      { cmd: "/plan", scope: "ステージゲート", caps: "アーキテクチャ·フェーズ" },
      { cmd: "/task", scope: "サブタスク単位", caps: "明確化·実装·テスト·納品" },
      { cmd: "/verify", scope: "ステージゲート", caps: "7 つの条件チェック" },
      { cmd: "/ship", scope: "ステージゲート", caps: "release-preflight·gstack-ship" },
      { cmd: "/retro", scope: "ship 後", caps: "gstack·永続化" },
      { cmd: "/tdd", scope: "規律", caps: "red-green-refactor" },
      { cmd: "/ralph-loop", scope: "wrapper", caps: "完了約束" },
    ],
    githubLink: "GitHub ですべてのワークフローを見る →",
  },
  quickstart: {
    heading: "60 秒ではじめる",
    subheading: "設定ファイルなし。手動の足場作りなし。コマンド 3 つだけ。",
    steps: [
      {
        num: "1",
        title: "インストール",
        cmd: "npm install -g harnessed",
        caption: "npm から最新の安定版を取得します。",
      },
      {
        num: "2",
        title: "セットアップ",
        cmd: "harnessed setup",
        caption: "Agent Teams、ユーザーロケール、MCP ディスカバリーを自動で有効化します。",
      },
      {
        num: "3",
        title: "合成",
        cmd: "/auto research a new feature",
        caption: "AI コーディング agent の中で実行します。6 段階パイプラインが引き継ぎます。",
      },
    ],
  },
  communityStats: {
    heading: "harness エコシステムに参加する",
    npmDownloadsLabel: "npm 累計ダウンロード数",
    stats: [
      { value: "100+", label: "合成済み capability（ECC · Superpowers · GSD · gstack）" },
      { value: "29", label: "出荷済みワークフロー" },
      { value: "v4.43.0", label: "最新リリース · Apache-2.0" },
    ],
    links: {
      discussions: "GitHub Discussions →",
      issues: "Issues →",
      releases: "Releases →",
    },
  },
  faq: {
    heading: "FAQ",
    subheading: "よくある質問に、率直に答えます。",
    items: [
      {
        q: "harnessed とは何ですか？",
        a: "harnessed は AI コーディング harness のためのパッケージマネージャーであり合成オーケストレーターです。型付きマニフェストを通じて Skills、MCP サーバー、その他の harness パックを組み合わせたワークフローをインストール・合成・実行します。upstream のコードを vendor することはありません。",
      },
      {
        q: "どの AI コーディング agent の中で動きますか？",
        a: "harnessed は AI コーディング agent の中で動作します。主なターゲットは Claude Code で、`harnessed setup` の後に `/auto` や `/discuss` などのスラッシュコマンドが使えるようになります（Claude Code が初めてなら anthropic.com/claude/code を参照）。Codex やその他の harness はクロス harness プラットフォーム層でサポートされます。",
      },
      {
        q: "vendoring なしでどう合成するのですか？",
        a: "各 harness パックは、インストール手順・capability メタデータ・統合ポイントを記述したマニフェストを同梱します。harnessed はそれらを読み、互換性を検証し、runtime で upstream のツールを繋ぎ合わせます。だからあなたが動かすのは常に公式の upstream であり、古い fork ではありません。",
      },
      {
        q: "/auto と個別のステージコマンドの違いは？",
        a: "`/auto` は 1 つの prompt で 6 段階パイプラインを端から端まで実行します。個別のステージコマンド（`/discuss`、`/plan`、`/task`、`/verify` など）は、リズムの一部だけが必要なときに細かい制御を与えます。",
      },
      {
        q: "subagent は自動で spawn されますか？",
        a: "`harnessed setup` が Agent Teams を自動で有効化し、parallelism gate がサブタスクごとにティアを決めます。些細な作業はメイン session に留まり、独立したタスクは subagent として fan-out され（≤ 3、隔離された context）、相互通信が要る作業 —— contract の擦り合わせ、仮説の議論、task list の共有 —— は本物の Agent Team に昇格します。ralph-loop はどのティアも包んで verbatim の COMPLETE を守らせられます。",
      },
      {
        q: "自分で harness パックを書けますか？",
        a: "はい。マニフェスト schema はリポジトリの `schemas/manifest.v1.schema.json` に公開されています（YAML language server をそこに向けてください）。インストール可能な任意の upstream —— npm パッケージ、git リポジトリ、独自 skill —— を指すマニフェストを書けば、harnessed はそれを一級の合成単位として扱います。",
      },
    ],
  },
  footer: {
    tagline: "AI コーディング harness のパッケージマネージャー + 合成オーケストレーター。",
    resources: "リソース",
    community: "コミュニティ",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      docs: "ドキュメント",
      discussions: "Discussions",
      issues: "Issues",
      twitter: "Twitter",
    },
    license: "Apache-2.0 License © 2026 easyinplay",
    madewith: "規律をもって作られました",
  },
};

export default ja;
