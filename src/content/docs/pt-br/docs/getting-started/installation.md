---
title: Instalação
description: Instale o harnessed e rode o setup em 30 segundos.
---

## Pré-requisitos

- **Node.js 22+** — o harnessed usa ESM e exige Node 22 ou mais recente
- **Um agent de programação com IA** — o harnessed roda dentro de um. Claude Code é o alvo principal (instale em [anthropic.com/claude/code](https://anthropic.com/claude/code)); Codex e outros harnesses são suportados pela camada de plataforma cross-harness

## Instalar

```bash
npm install -g harnessed
```

Verifique a instalação:

```bash
harnessed --version
# → 4.43.0
```

## Binário autônomo (sem Node.js)

Sem Node.js? Instale o binário de arquivo único autocontido — distribuído por plataforma e com autoatualização via `harnessed update`:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

Instala em `~/.local/bin/harnessed`. No unix o PATH nunca é editado automaticamente — se `~/.local/bin` não estiver no seu PATH, o instalador imprime o trecho exato a adicionar para o seu shell.

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

Instala em `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`. Em sessões interativas há um pedido de consentimento antes de um append idempotente ao PATH do usuário; execuções não interativas (CI / pipeline) imprimem a instrução manual.

Ambos os instaladores baixam o artefato da plataforma das GitHub releases e verificam seu checksum `.sha256`. Os canais binário e npm rodam a mesma CLI — tudo abaixo se aplica sem mudanças. Veja [`harnessed update`](/pt-br/docs/reference/cli/#harnessed-update) para saber como o binário se autoatualiza (assinado com ed25519) e faz rollback.

## Rodar o setup

```bash
harnessed setup
```

O setup executa quatro passos automaticamente:

1. **Habilita Agent Teams** — grava `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em `~/.claude/settings.json` para que os padrões multi-agent (Pattern A full-stack, Pattern C revisão por especialistas) funcionem de imediato
2. **Define o locale do usuário** — detecta o locale do SO e grava `env.HARNESSED_USER_LANG` (zh-* → `zh-Hans`, o restante → `en`); sobrescreva com `--user-lang`
3. **Instala os workflow skills** — copia cada `workflows/<name>/SKILL.md` para `~/.claude/skills/<name>/` para que os comandos de barra fiquem disponíveis no Claude Code
4. **Processa os manifestos base** — percorre `manifests/tools/*.yaml` e `manifests/skill-packs/*.yaml` para registrar as dependências de ferramentas upstream

Depois do setup, comandos de barra como `/auto`, `/discuss`, `/plan`, `/task` e `/verify` ficam disponíveis em qualquer sessão do Claude Code.

## Flags opcionais

```bash
harnessed setup --user-lang zh-Hans   # força chinês independentemente do locale do SO
harnessed setup --user-lang en        # força inglês
harnessed setup --dry-run             # apenas prévia do que seria escrito — sem alterar o disco
```

Veja a lista completa de flags em [Comandos da CLI](/pt-br/docs/reference/cli/).

## Nota sobre Windows

O PowerShell 5.x não suporta encadeamento com `&&`. Use `;` ou duas linhas separadas:

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+, bash, zsh e cmd.exe suportam a forma de uma linha só.
