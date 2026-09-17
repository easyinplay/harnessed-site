import type { Dict } from "./en";

const ko: Dict = {
  promoBar: {
    items: [
      "v4.43.0 — 선언만 되고 평가되지 않는 schema 필드를 잡는 게이트 · 외부 코드 리뷰 39건 조치 · Windows 안전 spawn 및 codex 플러그인 감지",
      "Subagent → Agent Teams 자동 라우팅, 서브태스크 단위로 결정",
      "ECC · Superpowers · GSD · gstack 조합",
      "Apache-2.0 · Node 22+ · 크로스 플랫폼",
      "GitHub에서 스타 눌러주세요 →",
    ],
  },
  nav: {
    docs: "문서",
    github: "GitHub",
    npm: "npm",
  },
  hero: {
    versionPill: "v4.43.0 · 100+ capability 조합",
    h1: "AI 코딩 harness를 위한 패키지 매니저",
    positioning:
      "단순한 패키지 매니저가 아니라 조합 오케스트레이터입니다. 오픈소스 생태계의 최고 구성 요소를 하나의 실행 가능한 engine으로 조립하고, 3계층 BDD → SDD → TDD 방법론으로 연결합니다.",
    tagline:
      "harnessed는 orchestration brain + prompt library입니다. 세 개의 빠른 순수 함수 CLI —— `harnessed gates`(어떤 하위 워크플로가 발동하는지), `harnessed prompt`(하위 워크플로용 spawn-ready prompt), `harnessed checkpoint`(진행 상황 기록) —— 로 native subagent spawn을 구동합니다.",
    ctaStart: "시작하기",
    ctaGitHub: "GitHub에서 보기",
    meta: "Apache-2.0 · Node 22+ · 크로스 플랫폼",
  },
  whyCards: {
    heading: "harnessed를 쓰는 이유",
    subheading: "모든 워크플로에 내장된 세 가지 원칙.",
    card1: {
      title: "vendoring 대신 조합",
      body: "upstream을 fork하지 않습니다. 매니페스트에 install과 check만 기술하면 harnessed가 오픈소스 생태계의 최고 구성 요소(Superpowers, GSD, gstack, ECC …)를 실행 가능한 하나의 워크플로로 조합합니다. 항상 최신 upstream 위에서, 고통 없이: update만 하면 됩니다.",
    },
    card2: {
      title: "5단계 리듬 기본 탑재",
      body: "Discuss → Plan → Task → Verify → Ship. 선택 단계인 Research와 Retro까지 모든 loop에 조합되어 있고, 자동 Learn 사이클로 닫힙니다. 또는 `/auto`를 실행해 전체 파이프라인을 한 번에 돌리세요.",
    },
    card3: {
      title: "Dogfood 우선 방법론",
      body: "모든 워크플로는 자기 자신의 정의로 검증됩니다. harnessed 자체를 출시할 때 지키는 것과 똑같은 규율입니다.",
    },
  },
  threeLayerStack: {
    heading: "세 단계가 아니라, 세 개의 중첩 루프",
    subheading:
      "harnessed의 3계층 스택은 이미 확립된 BDD → SDD → TDD 중첩 구조를 소프트웨어 엔지니어링으로 구현한 것입니다. 세 개의 loop가 각기 다른 질문에 답합니다. harnessed는 각 loop에 오픈소스 생태계를 조합하는데, 구성 요소들이 부분적으로 겹칩니다. 바로 그 겹침을 중재하는 것이 조합 오케스트레이터의 일입니다.",
    colLayer: "계층 / Loop",
    colQuestion: "답하는 질문",
    colComposed: "조합 대상(겹침 있음)",
    layers: [
      {
        num: "①",
        name: "Behavior",
        loop: "BDD",
        question: "무엇을 만들 것인가, 그리고 무엇으로 완료를 판단하는가.",
        composed:
          "gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria",
      },
      {
        num: "②",
        name: "Spec",
        loop: "SDD",
        question: "어떻게 구조화할 것인가.",
        composed:
          "GSD plan-phase → requirements / design / tasks · contracts(Spec Kit / ECC patterns)",
      },
      {
        num: "③",
        name: "Implementation",
        loop: "TDD",
        question: "실제로 동작하는가.",
        composed:
          "superpowers TDD red-green · subagent execution · GSD verify-work · harnessed completion gate",
      },
    ],
    nested: {
      label: "Nested lenses",
      body: "이 loop들은 단계가 아니라 중첩된 렌즈(nested lenses)입니다. Cucumber의 BDD-outer + TDD-inner 이중 루프를 GenAI 시대에 SDD spec 링으로 확장한 것이 triple-loop입니다. harnessed는 이 triple-loop의 linear-cadence 구현이며, 완전한 routed graph는 그 진화 경로입니다. 기본 순회는 outer → inner이고, 오늘 출시된 피드백 간선은 세 개입니다: Verify → Task(실패한 검사가 작업을 되돌림), 회색 지대에서 subagent가 반환하는 STATUS: NEEDS_CLARIFICATION, 그리고 출시된 각 사이클의 learnings가 다음 Discuss로 흘러드는 것. 더 세밀한 구조적 복귀 —— contract 모순을 Spec으로, 요구사항 모호성을 Behavior로 라우팅 —— 은 roadmap에 있으며 아직 출시되지 않았습니다.",
    },
    intersections: {
      label: "구성 요소의 교집합",
      body: "겹침이 핵심입니다. 조합 오케스트레이터가 중재하는 대상이 바로 그것입니다.",
      items: [
        { name: "GSD", body: "는 backbone으로 discuss·plan·verify 세 링을 모두 관통합니다." },
        { name: "gstack", body: "은 Behavior + Review에 걸칩니다." },
        { name: "superpowers", body: "는 Behavior(brainstorm) + Implementation(TDD)에 걸칩니다." },
      ],
    },
    crossCutting: {
      label: "횡단 규율",
      body: "두 가지 규율이 모든 계층을 관통합니다.",
      items: [
        {
          name: "karpathy principles",
          body: "how to code —— 가장 작은 실행 가능한 변경, 외과적 편집.",
        },
        { name: "mattpocock moves", body: "상황에 따라 호출하는 온디맨드 도구." },
      ],
    },
    runtime: {
      label: "runtime 매핑",
      body: "Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship이 evidence gate로 루프를 닫습니다.",
    },
  },
  orchestration: {
    heading: "병렬성, 서브태스크마다 결정",
    subheading:
      "`harnessed setup`이 Agent Teams를 자동으로 켭니다. 이후 라우팅 게이트가 서브태스크마다 알맞은 실행 티어를 고릅니다. 수동 fan-out도, 추측도 필요 없습니다.",
    tiers: [
      {
        tag: "다운그레이드",
        name: "메인 session",
        cond: "< 20줄 · 단일 쿼리",
        body: "사소한 작업은 인라인으로 처리합니다. spawn 없음, token 오버헤드 없음.",
      },
      {
        tag: "기본",
        name: "Subagent fan-out",
        cond: "≤ 3 병렬 · 상호 통신 없음",
        body: "독립적인 research, verify, review 작업이 격리된 context에서 병렬로 펼쳐집니다.",
      },
      {
        tag: "업그레이드",
        name: "Agent Teams",
        cond: "5가지 트리거 · SendMessage",
        body: "contract를 맞추거나 가설을 토론하거나 task list를 공유해야 하는 teammate는 진짜 team으로 승격합니다.",
      },
    ],
    wrapper: {
      label: "직교 wrapper",
      name: "harnessed checkpoint complete",
      body: "어떤 티어든 감싸서 verbatim COMPLETE 완료 약속을 지키게 합니다.",
    },
    footnote:
      "12개의 judgment gate가 병렬성, TDD 트리거, 3계층 명확화 같은 AI 협업 규칙을 기계화하여 정적인 관례를 라우팅 엔진으로 바꿉니다.",
  },
  workflowSection: {
    heading: "명령 하나. 다섯 단계. 보일러플레이트 제로.",
    subheading: "각 단계는 AI 코딩 harness 생태계 전반에서 검증된 도구를 조합합니다.",
    stages: {
      research: { name: "research", role: "다중 소스 RAG" },
      discuss: { name: "discuss", role: "3계층 게이트" },
      plan: { name: "plan", role: "task_plan.md" },
      task: { name: "task", role: "명확화·구현·테스트·전달" },
      verify: { name: "verify", role: "7가지 하위 검사" },
      ship: { name: "ship", role: "release-preflight → tag-ready" },
      retro: { name: "retro", role: "교훈 축적" },
    },
    optional: "선택",
  },
  workflowTable: {
    heading: "27개의 조합 가능한 워크플로, 100+ capability",
    subheading: "research부터 ship까지, 각각 타입이 정의된 매니페스트가 뒷받침합니다.",
    colCommand: "명령",
    colScope: "범위",
    colCaps: "capability",
    rows: [
      { cmd: "/auto", scope: "super-master", caps: "6단계 파이프라인" },
      { cmd: "/research", scope: "단독 실행", caps: "tavily·exa·ctx7" },
      { cmd: "/discuss", scope: "스테이지 게이트", caps: "전략·페이즈·서브태스크" },
      { cmd: "/plan", scope: "스테이지 게이트", caps: "아키텍처·페이즈" },
      { cmd: "/task", scope: "서브태스크 단위", caps: "명확화·구현·테스트·전달" },
      { cmd: "/verify", scope: "스테이지 게이트", caps: "11가지 조건 검사" },
      { cmd: "/ship", scope: "스테이지 게이트", caps: "release-preflight·gstack-ship" },
      { cmd: "/retro", scope: "ship 이후", caps: "gstack·영속화" },
      { cmd: "/tdd", scope: "규율", caps: "red-green-refactor" },
    ],
    githubLink: "GitHub에서 전체 워크플로 보기 →",
  },
  quickstart: {
    heading: "60초 만에 시작하기",
    subheading: "설정 파일 없음. 수동 스캐폴딩 없음. 명령 세 개면 끝.",
    steps: [
      {
        num: "1",
        title: "설치",
        cmd: "npm install -g harnessed",
        caption: "npm에서 최신 안정 버전을 받아옵니다.",
      },
      {
        num: "2",
        title: "초기 설정",
        cmd: "harnessed setup",
        caption: "Agent Teams, 사용자 로케일, MCP 디스커버리를 자동으로 켭니다.",
      },
      {
        num: "3",
        title: "조합",
        cmd: "/auto research a new feature",
        caption: "AI 코딩 agent 안에서 실행하세요. 6단계 파이프라인이 이어받습니다.",
      },
    ],
  },
  communityStats: {
    heading: "harness 생태계에 합류하세요",
    npmDownloadsLabel: "npm 누적 다운로드",
    stats: [
      { value: "100+", label: "조합된 capability (ECC · Superpowers · GSD · gstack)" },
      { value: "29", label: "출시된 워크플로" },
      { value: "v4.43.0", label: "최신 릴리스 · Apache-2.0" },
    ],
    links: {
      discussions: "GitHub Discussions →",
      issues: "Issues →",
      releases: "Releases →",
    },
  },
  faq: {
    heading: "FAQ",
    subheading: "자주 묻는 질문에 담백하게 답합니다.",
    items: [
      {
        q: "harnessed란 무엇인가요?",
        a: "harnessed는 AI 코딩 harness를 위한 패키지 매니저이자 조합 오케스트레이터입니다. 타입이 정의된 매니페스트를 통해 Skills, MCP 서버, 기타 harness 팩을 결합한 워크플로를 설치하고 조합하고 실행합니다. upstream 코드를 vendoring하지 않습니다.",
      },
      {
        q: "어떤 AI 코딩 agent에서 동작하나요?",
        a: "harnessed는 AI 코딩 agent 안에서 동작합니다. 주 대상은 Claude Code이며, `harnessed setup` 이후 `/auto`, `/discuss` 같은 슬래시 명령을 쓸 수 있습니다(Claude Code가 처음이라면 anthropic.com/claude/code 참고). Codex를 비롯한 다른 harness는 크로스 harness 플랫폼 계층으로 지원합니다.",
      },
      {
        q: "vendoring 없이 어떻게 조합하나요?",
        a: "각 harness 팩은 설치 절차, capability 메타데이터, 통합 지점을 기술한 매니페스트를 함께 제공합니다. harnessed는 이 매니페스트를 읽고 호환성을 검증한 뒤 runtime에 upstream 도구들을 이어 붙입니다. 그래서 언제나 공식 upstream을 실행하며, 낡은 fork를 쓰지 않습니다.",
      },
      {
        q: "/auto와 개별 스테이지 명령의 차이는?",
        a: "`/auto`는 하나의 prompt로 6단계 파이프라인을 처음부터 끝까지 실행합니다. 개별 스테이지 명령(`/discuss`, `/plan`, `/task`, `/verify` 등)은 리듬의 일부만 필요할 때 세밀한 제어를 제공합니다.",
      },
      {
        q: "subagent를 자동으로 spawn하나요?",
        a: "`harnessed setup`이 Agent Teams를 자동으로 켜고, parallelism gate가 서브태스크마다 티어를 정합니다. 사소한 작업은 메인 session에 남고, 독립적인 작업은 subagent로 fan-out되며(≤ 3, 격리된 context), 상호 통신이 필요한 작업 —— contract 정렬, 가설 토론, task list 공유 —— 은 진짜 Agent Team으로 승격합니다. `harnessed checkpoint complete`는 어떤 티어에 대해서도 verbatim COMPLETE를 지키게 할 수 있습니다.",
      },
      {
        q: "직접 harness 팩을 만들 수 있나요?",
        a: "가능합니다. 매니페스트 schema는 저장소의 `schemas/manifest.v1.schema.json`에 공개되어 있습니다(YAML language server를 그 파일로 지정하세요). 설치 가능한 어떤 upstream —— npm 패키지, git 저장소, 커스텀 skill —— 이든 가리키는 매니페스트를 작성하면 harnessed가 이를 일급 조합 단위로 취급합니다.",
      },
    ],
  },
  footer: {
    tagline: "AI 코딩 harness 패키지 매니저 + 조합 오케스트레이터.",
    resources: "리소스",
    community: "커뮤니티",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      docs: "문서",
      discussions: "Discussions",
      issues: "Issues",
      twitter: "Twitter",
    },
    license: "Apache-2.0 License © 2026 easyinplay",
    madewith: "규율로 만들었습니다",
  },
};

export default ko;
