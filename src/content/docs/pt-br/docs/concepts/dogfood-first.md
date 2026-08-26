---
title: Metodologia dogfood-first
description: Cada workflow é validado contra a própria definição.
---

## O princípio

O requisito R8.1 do harnessed diz: o ciclo de desenvolvimento do próprio projeto precisa usar seus próprios workflows. Toda funcionalidade entregue no harnessed é construída com a mesma cadência `/discuss`, `/plan`, `/task`, `/verify` que o harnessed expõe aos usuários.

Isso não é aspiracional — é um gate rígido. Um workflow que o harnessed não consegue usar para entregar a si mesmo é um workflow que não funciona.

## O que isso pega na prática

Durante a Phase 3.5 W2.1 Cycle 4, o time rodava `/auto` no próprio repositório do harnessed para implementar um novo recurso de orquestração. Um bug apareceu na lógica de ordem de spawn do `masterOrchestrator`: os subworkflows estavam sendo inicializados fora de sequência, fazendo o estágio task começar antes de o estágio plan ter escrito `task_plan.md`.

Esse bug foi pego como regressão de dogfood — ele não aparecia nos testes unitários porque aquele caminho de integração só executa quando uma execução real de `/auto` faz spawn de agents. Como o harnessed estava usando a si mesmo, a falha foi imediata e inequívoca.

A correção foi promovida a P0 porque violava o contrato de confiança: se o harnessed não consegue orquestrar o próprio desenvolvimento, os usuários não podem confiar nele para orquestrar o deles.

## Implicações práticas

**Mudanças de schema se autovalidam.** Quando o harnessed adiciona um campo novo ao schema do manifesto, o ciclo de desenvolvimento seguinte valida os próprios manifestos do harnessed contra ele — automaticamente no `harnessed install` e no CI via `scripts/check-workflow-schema.mjs`. Qualquer regressão de schema aparece na execução de dogfood antes de chegar aos usuários.

**Workflows novos passam por estresse primeiro.** Antes de qualquer workflow ser entregue, ele é exercitado no próprio repositório do harnessed. A mesma base de código que define o workflow serve de bancada de teste.

**Bugs de dogfood são P0.** Se rodar harnessed sobre harnessed quebra, isso é um incidente P0 — não uma limitação conhecida a documentar. Isso cria um incentivo forte para manter a ferramenta funcionando de ponta a ponta, não apenas passando nos testes unitários.

## O que isso significa para os usuários

Quando você roda `/auto` no seu projeto, está rodando o mesmo pipeline que entrega o próprio harnessed. A pressão contínua do dogfooding significa que:

- Regressões aparecem durante o desenvolvimento, não em relatos de usuários
- Casos de borda na coordenação multi-agent são exercitados a cada release do harnessed
- A cadência de 5 estágios é testada em combate contra uma base de código real e ativamente mantida

A metodologia está descrita em [docs/WORKFLOW.md](https://github.com/easyinplay/harnessed/blob/main/docs/WORKFLOW.md) no repositório do harnessed.
