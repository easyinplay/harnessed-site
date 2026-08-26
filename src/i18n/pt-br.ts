import type { Dict } from './en'

const ptBr: Dict = {
  promoBar: {
    items: [
      'v4.32.20 — entrega em dois canais (npm + binário de arquivo único) · autoatualização e rollback assinados com ed25519 · suíte de traps de regressão de orquestração',
      'Subagents roteados automaticamente → Agent Teams, decidido por subtarefa',
      'Compondo ECC · Superpowers · GSD · gstack',
      'Apache-2.0 · Node 22+ · Multiplataforma',
      'Dê uma estrela no GitHub →',
    ],
  },
  nav: {
    docs: 'Documentação',
    github: 'GitHub',
    npm: 'npm',
  },
  hero: {
    versionPill: 'v4.32.20 · 100+ capabilities compostas',
    h1: 'O gerenciador de pacotes para harnesses de programação com IA',
    positioning:
      'Mais que um gerenciador de pacotes — um orquestrador de composição. Ele monta o melhor do ecossistema open source em um único engine executável, conectado pela metodologia de três camadas BDD → SDD → TDD.',
    tagline:
      'harnessed é um orchestration brain + biblioteca de prompts, que dispara o spawn nativo de subagents por meio de três CLIs rápidas e puras — `harnessed gates` (quais subworkflows disparam), `harnessed prompt` (prompt pronto para spawn de um sub) e `harnessed checkpoint` (registro de progresso).',
    ctaStart: 'Começar',
    ctaGitHub: 'Ver no GitHub',
    meta: 'Apache-2.0 · Node 22+ · Multiplataforma',
  },
  whyCards: {
    heading: 'Por que harnessed',
    subheading: 'Três princípios embutidos em cada workflow.',
    card1: {
      title: 'Composição em vez de vendoring',
      body: 'Nunca faça fork do upstream. Descreva install e check em um manifesto, e o harnessed compõe o melhor do ecossistema open source (Superpowers, GSD, gstack, ECC, …) em um workflow executável — sempre no upstream mais recente, sem dor: basta atualizar.',
    },
    card2: {
      title: 'Cadência de 5 estágios embutida',
      body: 'Discuss → Plan → Task → Verify → Ship, com Research e Retro opcionais, compostos em cada loop e fechados por um ciclo automático de Learn. Ou rode `/auto` para conduzir o pipeline inteiro de uma vez.',
    },
    card3: {
      title: 'Metodologia dogfood-first',
      body: 'Cada workflow é validado contra a própria definição. A mesma disciplina que entrega o próprio harnessed.',
    },
  },
  threeLayerStack: {
    heading: 'Três loops aninhados, não três fases',
    subheading:
      'A pilha de três camadas do harnessed é uma implementação de engenharia de software do aninhamento consagrado BDD → SDD → TDD. Três loops, cada um respondendo a uma pergunta diferente. O harnessed compõe o ecossistema open source dentro de cada loop — e os componentes se sobrepõem parcialmente, que é exatamente o que um orquestrador de composição precisa arbitrar.',
    colLayer: 'Camada / Loop',
    colQuestion: 'Pergunta que responde',
    colComposed: 'Composta de (com sobreposição)',
    layers: [
      {
        num: '①',
        name: 'Behavior',
        loop: 'BDD',
        question: 'O que construir e como saber que está pronto.',
        composed: 'gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria',
      },
      {
        num: '②',
        name: 'Spec',
        loop: 'SDD',
        question: 'Como está estruturado.',
        composed: 'GSD plan-phase → requirements / design / tasks · contracts (Spec Kit / ECC patterns)',
      },
      {
        num: '③',
        name: 'Implementation',
        loop: 'TDD',
        question: 'Funciona de fato.',
        composed: 'superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion',
      },
    ],
    nested: {
      label: 'Lentes aninhadas',
      body: 'Os loops são lentes aninhadas, não fases. O duplo loop BDD-externo + TDD-interno do Cucumber, estendido na era GenAI com um anel de spec SDD → um triple-loop. O harnessed é a realização em cadência linear desse triple-loop — o grafo roteado completo é seu caminho de evolução. A travessia padrão é externo → interno; três arestas de feedback já estão em produção: Verify → Task (uma verificação que falha empurra o trabalho de volta), o STATUS: NEEDS_CLARIFICATION de um subagent numa zona cinzenta, e os aprendizados de cada ciclo entregue alimentando o Discuss seguinte. Retornos estruturados mais granulares — uma contradição de contrato roteando para Spec, uma ambiguidade de requisito para Behavior — estão no roadmap, ainda não entregues.',
    },
    intersections: {
      label: 'Os componentes se cruzam',
      body: 'A sobreposição é o ponto — é o que o orquestrador de composição arbitra.',
      items: [
        { name: 'GSD', body: 'é a espinha dorsal, atravessando os três anéis — discuss, plan, verify.' },
        { name: 'gstack', body: 'abrange Behavior + Review.' },
        { name: 'superpowers', body: 'abrange Behavior (brainstorm) + Implementation (TDD).' },
      ],
    },
    crossCutting: {
      label: 'Disciplinas transversais',
      body: 'Duas disciplinas percorrem todas as camadas.',
      items: [
        { name: 'karpathy principles', body: 'how to code — a menor mudança viável, edições cirúrgicas.' },
        { name: 'mattpocock moves', body: 'ferramentas sob demanda, invocadas conforme a situação.' },
      ],
    },
    runtime: {
      label: 'Mapeado para o runtime',
      body: 'Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship fecham o loop com gates de evidência.',
    },
  },
  orchestration: {
    heading: 'Paralelismo decidido por subtarefa',
    subheading:
      '`harnessed setup` habilita Agent Teams automaticamente. Um gate de roteamento então escolhe o tier de execução certo para cada subtarefa — sem fan-out manual, sem achismo.',
    tiers: [
      {
        tag: 'downgrade',
        name: 'Sessão principal',
        cond: '< 20 linhas · consulta única',
        body: 'Trabalho trivial fica inline. Sem spawn, sem custo de tokens.',
      },
      {
        tag: 'padrão',
        name: 'Fan-out de subagents',
        cond: '≤ 3 em paralelo · sem troca de mensagens',
        body: 'Tarefas independentes de research, verify e review se abrem em contextos isolados.',
      },
      {
        tag: 'upgrade',
        name: 'Agent Teams',
        cond: '5 gatilhos · SendMessage',
        body: 'Teammates que precisam alinhar um contrato, debater hipóteses ou compartilhar uma task list escalam para um time de verdade.',
      },
    ],
    wrapper: {
      label: 'wrapper ortogonal',
      name: 'ralph-loop',
      body: 'Envolve qualquer tier e o mantém preso a uma promessa de conclusão COMPLETE literal.',
    },
    footnote:
      '12 gates de julgamento mecanizam suas regras de colaboração com IA — paralelismo, gatilhos de TDD, esclarecimento em três camadas — transformando convenções estáticas em um motor de roteamento.',
  },
  workflowSection: {
    heading: 'Um comando. Cinco estágios. Zero boilerplate.',
    subheading: 'Cada estágio compõe ferramentas comprovadas de todo o ecossistema de harnesses de programação com IA.',
    stages: {
      research: { name: 'research', role: 'RAG multifonte' },
      discuss: { name: 'discuss', role: 'gates de 3 camadas' },
      plan: { name: 'plan', role: 'task_plan.md' },
      task: { name: 'task', role: 'esclarecer·codar·testar·entregar' },
      verify: { name: 'verify', role: '7 subverificações' },
      ship: { name: 'ship', role: 'release-preflight → tag-ready' },
      retro: { name: 'retro', role: 'lições registradas' },
    },
    optional: 'opc',
  },
  workflowTable: {
    heading: '27 workflows componíveis, 100+ capabilities',
    subheading: 'De research a ship, cada um respaldado por um manifesto tipado.',
    colCommand: 'Comando',
    colScope: 'Escopo',
    colCaps: 'Capabilities',
    rows: [
      { cmd: '/auto', scope: 'super-master', caps: 'pipeline de 6 estágios' },
      { cmd: '/research', scope: 'independente', caps: 'tavily·exa·ctx7' },
      { cmd: '/discuss', scope: 'stage gate', caps: 'estratégico·fase·subtarefa' },
      { cmd: '/plan', scope: 'stage gate', caps: 'arquitetura·fase' },
      { cmd: '/task', scope: 'por subtarefa', caps: 'esclarecer·codar·testar·entregar' },
      { cmd: '/verify', scope: 'stage gate', caps: '7 subverificações condicionais' },
      { cmd: '/ship', scope: 'stage gate', caps: 'release-preflight·gstack-ship' },
      { cmd: '/retro', scope: 'pós-ship', caps: 'gstack·persistência' },
      { cmd: '/tdd', scope: 'disciplina', caps: 'red-green-refactor' },
      { cmd: '/ralph-loop', scope: 'wrapper', caps: 'promessa de conclusão' },
    ],
    githubLink: 'Ver todos os workflows no GitHub →',
  },
  quickstart: {
    heading: 'Comece em 60 segundos',
    subheading: 'Sem arquivos de configuração. Sem scaffolding manual. Só três comandos.',
    steps: [
      {
        num: '1',
        title: 'Instalar',
        cmd: 'npm install -g harnessed',
        caption: 'Baixa a última versão estável do npm.',
      },
      {
        num: '2',
        title: 'Configurar',
        cmd: 'harnessed setup',
        caption: 'Habilita automaticamente Agent Teams, locale do usuário e descoberta de MCP.',
      },
      {
        num: '3',
        title: 'Compor',
        cmd: '/auto research a new feature',
        caption: 'Rode dentro do seu agent de programação com IA. O pipeline de 6 estágios assume daí.',
      },
    ],
  },
  communityStats: {
    heading: 'Entre no ecossistema harness',
    stats: [
      { value: '100+', label: 'Capabilities compostas (ECC · Superpowers · GSD · gstack)' },
      { value: '28', label: 'Workflows entregues' },
      { value: 'v4.32.20', label: 'Último release · Apache-2.0' },
    ],
    links: {
      discussions: 'GitHub Discussions →',
      issues: 'Issues →',
      releases: 'Releases →',
    },
  },
  faq: {
    heading: 'Perguntas frequentes',
    subheading: 'Perguntas comuns, respostas diretas.',
    items: [
      {
        q: 'O que é o harnessed?',
        a: 'O harnessed é o gerenciador de pacotes e orquestrador de composição para harnesses de programação com IA. Ele instala, compõe e executa workflows que combinam Skills, servidores MCP e outros harness packs por meio de um manifesto tipado — sem fazer vendoring do código upstream.',
      },
      {
        q: 'Em qual agent de programação com IA ele roda?',
        a: 'O harnessed roda dentro de um agent de programação com IA. Claude Code é o alvo principal — depois de `harnessed setup`, comandos de barra como `/auto` e `/discuss` ficam disponíveis (novo no Claude Code? veja anthropic.com/claude/code). Codex e outros harnesses são suportados pela camada de plataforma cross-harness.',
      },
      {
        q: 'Como a composição funciona sem vendoring?',
        a: 'Cada harness pack traz um manifesto que descreve passos de instalação, metadados de capability e pontos de integração. O harnessed lê esses manifestos, valida a compatibilidade e costura as ferramentas upstream em runtime — então você sempre roda o upstream oficial, nunca um fork desatualizado.',
      },
      {
        q: 'Qual a diferença entre /auto e os comandos de estágio individuais?',
        a: '`/auto` roda o pipeline completo de 6 estágios de ponta a ponta com um único prompt. Os comandos de estágio individuais (`/discuss`, `/plan`, `/task`, `/verify` etc.) dão controle fino quando você só precisa de parte da cadência.',
      },
      {
        q: 'Ele faz spawn de subagents automaticamente?',
        a: '`harnessed setup` habilita Agent Teams automaticamente, e um gate de paralelismo decide o tier por subtarefa: trabalho trivial fica na sessão principal, tarefas independentes se abrem como subagents (≤ 3, contexto isolado) e trabalho que exige troca de mensagens — alinhamento de contrato, debate de hipóteses, task lists compartilhadas — escala para um Agent Team de verdade. O ralph-loop pode envolver qualquer tier para mantê-lo preso a um COMPLETE literal.',
      },
      {
        q: 'Posso escrever meu próprio harness pack?',
        a: 'Sim. O schema do manifesto está publicado no repositório em `schemas/manifest.v1.schema.json` (aponte seu YAML language server para ele). Escreva um manifesto apontando para qualquer upstream instalável — pacote npm, repositório git, skill própria — e o harnessed vai tratá-lo como uma unidade componível de primeira classe.',
      },
    ],
  },
  footer: {
    tagline: 'Gerenciador de pacotes + orquestrador de composição para harnesses de programação com IA.',
    resources: 'Recursos',
    community: 'Comunidade',
    links: {
      github: 'GitHub',
      npm: 'npm',
      changelog: 'Changelog',
      docs: 'Documentação',
      discussions: 'Discussions',
      issues: 'Issues',
      twitter: 'Twitter',
    },
    license: 'Licença Apache-2.0 © 2026 easyinplay',
    madewith: 'Feito com disciplina',
  },
}

export default ptBr
