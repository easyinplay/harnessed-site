---
title: Início rápido
description: Da instalação ao primeiro workflow em 60 segundos.
---

## Passo 1 — Instalar e configurar

```bash
npm install -g harnessed && harnessed setup
```

Isso instala o harnessed globalmente e roda o onboarding de uma vez: Agent Teams habilitado, workflow skills instalados, manifestos base processados. Veja [Instalação](/pt-br/docs/getting-started/installation/) para o que cada passo faz.

## Passo 2 — Abrir o Claude Code

Abra o Claude Code em qualquer diretório de projeto. Os comandos de barra já estão disponíveis globalmente — você não precisa estar em um projeto específico.

## Passo 3 — Rodar seu primeiro comando

Digite isto no Claude Code:

```
/auto research how to add OAuth to my Express app
```

Ou comece com um requisito concreto:

```
/auto "adicionar rate limiter à nossa API Express — 100 req/min por IP, com Redis"
```

## O que acontece em seguida

`/auto` é o comando super-master do harnessed. Ele roda o pipeline completo de 6 estágios:

| Estágio                      | O que faz                                                                                                       |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **① Research** (condicional) | Investigação multifonte via Tavily, Exa, ctx7 — dispara se você responder "não" à checagem de entendimento      |
| **② Discuss**                | Gates de esclarecimento em 3 camadas: escopo estratégico, decisões de fase, ambiguidade de subtarefa            |
| **③ Plan**                   | Revisão de arquitetura (condicional) + persiste `task_plan.md` e `progress.md` em `.planning/`                  |
| **④ Task**                   | Loop serial por subtarefa: esclarecer → codar → testar → entregar, com TDD na lógica central                    |
| **⑤ Verify**                 | 7 subverificações condicionais: progresso, code review, revisão paranoica, QA, segurança, design, simplificação |
| **⑥ Retro**                  | Resumo obrigatório do marco — lições registradas, decisões documentadas                                         |

`/auto` roda todos os estágios de forma contínua. Se um estágio falhar, o harnessed para e você retoma com `harnessed resume`.

Para controle fino, invoque os estágios individualmente: `/discuss`, `/plan`, `/task`, `/verify`. Veja [Seu primeiro workflow](/pt-br/docs/getting-started/first-workflow/) para um passo a passo prático.
