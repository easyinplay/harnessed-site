import type { Dict } from "./en";

const ru: Dict = {
  promoBar: {
    items: [
      "v4.32.20 — двухканальная поставка (npm + однофайловый бинарник) · самообновление и откат с подписью ed25519 · набор regression trap для оркестрации",
      "Автоматическая маршрутизация subagent → Agent Teams, решение по каждой подзадаче",
      "Собрано из ECC · Superpowers · GSD · gstack",
      "Apache-2.0 · Node 22+ · Кроссплатформенно",
      "Поставьте звезду на GitHub →",
    ],
  },
  nav: {
    docs: "Документация",
    github: "GitHub",
    npm: "npm",
  },
  hero: {
    versionPill: "v4.32.20 · собрано 100+ capability",
    h1: "Пакетный менеджер для AI-харнессов разработки",
    positioning:
      "Больше чем пакетный менеджер — оркестратор композиции. Он собирает лучшее из открытой экосистемы в один исполняемый engine, связывая всё трёхслойной методологией BDD → SDD → TDD.",
    tagline:
      "harnessed — это orchestration brain + библиотека промптов. Он запускает нативный spawn subagent через три быстрых чистых CLI: `harnessed gates` (какие подworkflow срабатывают), `harnessed prompt` (готовый к spawn промпт для подworkflow) и `harnessed checkpoint` (фиксация прогресса).",
    ctaStart: "Начать",
    ctaGitHub: "Открыть на GitHub",
    meta: "Apache-2.0 · Node 22+ · Кроссплатформенно",
  },
  whyCards: {
    heading: "Почему harnessed",
    subheading: "Три принципа, встроенных в каждый workflow.",
    card1: {
      title: "Композиция вместо vendoring",
      body: "Никогда не форкайте upstream. Опишите install и check в манифесте — и harnessed соберёт лучшее из открытой экосистемы (Superpowers, GSD, gstack, ECC …) в один исполняемый workflow. Всегда на свежем upstream и без боли: достаточно обновиться.",
    },
    card2: {
      title: "Встроенный ритм из 5 стадий",
      body: "Discuss → Plan → Task → Verify → Ship, с опциональными Research и Retro, вплетёнными в каждый loop и замыкаемыми автоматическим циклом Learn. Или запустите `/auto` и прогоните весь конвейер разом.",
    },
    card3: {
      title: "Методология dogfood-first",
      body: "Каждый workflow проверяется собственным определением. Та же дисциплина, по которой выпускается сам harnessed.",
    },
  },
  threeLayerStack: {
    heading: "Три вложенных цикла, а не три фазы",
    subheading:
      "Трёхслойный стек harnessed — это инженерная реализация давно устоявшейся вложенности BDD → SDD → TDD. Три loop, каждый отвечает на свой вопрос. harnessed вплетает открытую экосистему в каждый loop — и компоненты частично пересекаются, а разрешать эти пересечения и есть работа оркестратора композиции.",
    colLayer: "Слой / Loop",
    colQuestion: "На какой вопрос отвечает",
    colComposed: "Из чего собран (с пересечениями)",
    layers: [
      {
        num: "①",
        name: "Behavior",
        loop: "BDD",
        question: "Что строим и как понять, что готово.",
        composed:
          "gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria",
      },
      {
        num: "②",
        name: "Spec",
        loop: "SDD",
        question: "Как это устроено.",
        composed:
          "GSD plan-phase → requirements / design / tasks · contracts (Spec Kit / ECC patterns)",
      },
      {
        num: "③",
        name: "Implementation",
        loop: "TDD",
        question: "Работает ли это на самом деле.",
        composed:
          "superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion",
      },
    ],
    nested: {
      label: "Вложенные линзы",
      body: "Эти loop — вложенные линзы, а не фазы. Двойной цикл Cucumber (BDD снаружи + TDD внутри) в эпоху GenAI расширен кольцом spec из SDD → triple-loop. harnessed — это реализация такого triple-loop с линейным ритмом, а полный маршрутизированный граф — путь его эволюции. Обход по умолчанию идёт снаружи внутрь; сегодня в продакшене три обратные связи: Verify → Task (провалившаяся проверка возвращает работу назад), STATUS: NEEDS_CLARIFICATION от subagent в серой зоне и выводы каждого выпущенного цикла, попадающие в следующий Discuss. Более тонкие структурированные возвраты — противоречие контракта в Spec, неоднозначность требования в Behavior — есть в roadmap, но пока не выпущены.",
    },
    intersections: {
      label: "Компоненты пересекаются",
      body: "Пересечение — это и есть суть: именно его разрешает оркестратор композиции.",
      items: [
        {
          name: "GSD",
          body: "— несущая ось, проходит через все три кольца: discuss, plan, verify.",
        },
        { name: "gstack", body: "охватывает Behavior + Review." },
        { name: "superpowers", body: "охватывает Behavior (brainstorm) + Implementation (TDD)." },
      ],
    },
    crossCutting: {
      label: "Сквозные дисциплины",
      body: "Две дисциплины проходят через каждый слой.",
      items: [
        {
          name: "karpathy principles",
          body: "how to code — минимальное жизнеспособное изменение, точечные правки.",
        },
        { name: "mattpocock moves", body: "инструменты по запросу, вызываемые под ситуацию." },
      ],
    },
    runtime: {
      label: "Проекция на runtime",
      body: "Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship замыкают цикл через gate с доказательствами.",
    },
  },
  orchestration: {
    heading: "Параллелизм решается по каждой подзадаче",
    subheading:
      "`harnessed setup` автоматически включает Agent Teams. Дальше маршрутизирующий gate выбирает подходящий уровень исполнения для каждой подзадачи — без ручного fan-out и без догадок.",
    tiers: [
      {
        tag: "понижение",
        name: "Основная session",
        cond: "< 20 строк · один запрос",
        body: "Тривиальная работа остаётся inline. Без spawn и без расхода токенов.",
      },
      {
        tag: "по умолчанию",
        name: "Fan-out subagent",
        cond: "≤ 3 параллельно · без переписки",
        body: "Независимые задачи research, verify и review расходятся по изолированным context.",
      },
      {
        tag: "повышение",
        name: "Agent Teams",
        cond: "5 триггеров · SendMessage",
        body: "Teammate, которым нужно согласовать контракт, спорить о гипотезах или делить общий task list, поднимаются до настоящей команды.",
      },
    ],
    wrapper: {
      label: "ортогональный wrapper",
      name: "ralph-loop",
      body: "Оборачивает любой уровень и удерживает его на дословном обещании завершения COMPLETE.",
    },
    footnote:
      "12 judgment gate механизируют ваши правила работы с ИИ — параллелизм, триггеры TDD, трёхслойное прояснение — превращая статичные договорённости в движок маршрутизации.",
  },
  workflowSection: {
    heading: "Одна команда. Пять стадий. Ноль шаблонного кода.",
    subheading:
      "Каждая стадия собирает проверенные инструменты со всей экосистемы AI-харнессов разработки.",
    stages: {
      research: { name: "research", role: "многоисточниковый RAG" },
      discuss: { name: "discuss", role: "3-слойные gate" },
      plan: { name: "plan", role: "task_plan.md" },
      task: { name: "task", role: "прояснить·написать·протестировать·сдать" },
      verify: { name: "verify", role: "7 подпроверок" },
      ship: { name: "ship", role: "release-preflight → tag-ready" },
      retro: { name: "retro", role: "выводы зафиксированы" },
    },
    optional: "опц",
  },
  workflowTable: {
    heading: "27 составных workflow, 100+ capability",
    subheading: "От research до ship — каждый опирается на типизированный манифест.",
    colCommand: "Команда",
    colScope: "Область",
    colCaps: "Capability",
    rows: [
      { cmd: "/auto", scope: "super-master", caps: "конвейер из 6 стадий" },
      { cmd: "/research", scope: "отдельно", caps: "tavily·exa·ctx7" },
      { cmd: "/discuss", scope: "stage gate", caps: "стратегия·фаза·подзадача" },
      { cmd: "/plan", scope: "stage gate", caps: "архитектура·фаза" },
      { cmd: "/task", scope: "на подзадачу", caps: "прояснить·написать·протестировать·сдать" },
      { cmd: "/verify", scope: "stage gate", caps: "7 условных подпроверок" },
      { cmd: "/ship", scope: "stage gate", caps: "release-preflight·gstack-ship" },
      { cmd: "/retro", scope: "после ship", caps: "gstack·сохранение" },
      { cmd: "/tdd", scope: "дисциплина", caps: "red-green-refactor" },
      { cmd: "/ralph-loop", scope: "wrapper", caps: "обещание завершения" },
    ],
    githubLink: "Посмотреть все workflow на GitHub →",
  },
  quickstart: {
    heading: "Старт за 60 секунд",
    subheading: "Без конфигов. Без ручного скаффолдинга. Всего три команды.",
    steps: [
      {
        num: "1",
        title: "Установка",
        cmd: "npm install -g harnessed",
        caption: "Забирает последнюю стабильную версию из npm.",
      },
      {
        num: "2",
        title: "Настройка",
        cmd: "harnessed setup",
        caption: "Автоматически включает Agent Teams, локаль пользователя и обнаружение MCP.",
      },
      {
        num: "3",
        title: "Композиция",
        cmd: "/auto research a new feature",
        caption:
          "Запустите внутри вашего AI-агента разработки. Конвейер из 6 стадий берёт дело на себя.",
      },
    ],
  },
  communityStats: {
    heading: "Присоединяйтесь к экосистеме harness",
    stats: [
      { value: "100+", label: "Собранных capability (ECC · Superpowers · GSD · gstack)" },
      { value: "28", label: "Выпущенных workflow" },
      { value: "v4.32.20", label: "Последний релиз · Apache-2.0" },
    ],
    links: {
      discussions: "GitHub Discussions →",
      issues: "Issues →",
      releases: "Releases →",
    },
  },
  faq: {
    heading: "Частые вопросы",
    subheading: "Обычные вопросы, прямые ответы.",
    items: [
      {
        q: "Что такое harnessed?",
        a: "harnessed — пакетный менеджер и оркестратор композиции для AI-харнессов разработки. Он устанавливает, собирает и запускает workflow, объединяющие Skills, серверы MCP и другие harness-паки через типизированный манифест — без vendoring исходников upstream.",
      },
      {
        q: "В каком AI-агенте разработки он работает?",
        a: "harnessed работает внутри AI-агента разработки. Основная цель — Claude Code: после `harnessed setup` становятся доступны слеш-команды вроде `/auto` и `/discuss` (впервые в Claude Code? см. anthropic.com/claude/code). Codex и другие харнессы поддерживаются через кросс-harness платформенный слой.",
      },
      {
        q: "Как работает композиция без vendoring?",
        a: "Каждый harness-пак поставляется с манифестом, описывающим шаги установки, метаданные capability и точки интеграции. harnessed читает эти манифесты, проверяет совместимость и сшивает upstream-инструменты в runtime — так вы всегда запускаете официальный upstream, а не устаревший форк.",
      },
      {
        q: "Чем /auto отличается от отдельных команд стадий?",
        a: "`/auto` прогоняет весь конвейер из 6 стадий от начала до конца по одному промпту. Отдельные команды стадий (`/discuss`, `/plan`, `/task`, `/verify` и т. д.) дают точный контроль, когда нужна лишь часть ритма.",
      },
      {
        q: "Он сам порождает subagent?",
        a: "`harnessed setup` автоматически включает Agent Teams, а gate параллелизма выбирает уровень для каждой подзадачи: тривиальная работа остаётся в основной session, независимые задачи расходятся как subagent (≤ 3, изолированный context), а работа, требующая переписки — согласование контракта, спор о гипотезах, общий task list — поднимается до настоящей Agent Team. ralph-loop может обернуть любой уровень и удержать его на дословном COMPLETE.",
      },
      {
        q: "Можно ли написать свой harness-пак?",
        a: "Да. Схема манифеста опубликована в репозитории по пути `schemas/manifest.v1.schema.json` (направьте на неё свой YAML language server). Напишите манифест, указывающий на любой устанавливаемый upstream — npm-пакет, git-репозиторий, собственный skill — и harnessed будет считать его полноправной составной единицей.",
      },
    ],
  },
  footer: {
    tagline: "Пакетный менеджер + оркестратор композиции для AI-харнессов разработки.",
    resources: "Ресурсы",
    community: "Сообщество",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      docs: "Документация",
      discussions: "Discussions",
      issues: "Issues",
      twitter: "Twitter",
    },
    license: "Лицензия Apache-2.0 © 2026 easyinplay",
    madewith: "Сделано с дисциплиной",
  },
};

export default ru;
