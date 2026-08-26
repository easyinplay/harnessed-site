---
title: Schema do manifesto
description: O contrato tipado que os harness packs seguem.
---

Cada harness pack traz um manifesto — um arquivo YAML validado pelo schema `harnessed.workflow.v3`. O manifesto informa ao harnessed como instalar o pack, quais capabilities ele expõe e como delega a subworkflows.

## Versão do schema

```yaml
schema_version: harnessed.workflow.v3
```

## Campos de nível superior

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // identificador único do pack
  version: string                 // semver (ex.: "4.3.0")
  description: string             // descrição em um parágrafo
  install?: InstallStep[]         // passos para instalar dependências upstream
  capability?: Capability         // capabilities que este pack contribui
  delegates_to?: SubWorkflowRef[] // para workflows orquestradores
  disciplines_applied?: string[]  // regras transversais (ex.: "karpathy")
  tools_available?: string[]      // ferramentas que este workflow pode invocar
}
```

## Passos de instalação

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // executa um comando shell arbitrário
```

Exemplo:

```yaml
install:
  - npm: superpowers
  - npm: "@oh-my-claude/gsd"
  - git: https://github.com/example/skill-pack-extra
  - script: harnessed setup --user-lang zh-Hans
```

## Capability

```typescript
interface Capability {
  skills?: string[]    // skills de comando de barra contribuídos
  workflows?: string[] // nomes de workflow contribuídos
  mcp?: string[]       // nomes de servidores MCP registrados
}
```

Exemplo:

```yaml
capability:
  skills:
    - brainstorming
    - tdd
  workflows:
    - discuss
    - plan
    - task
    - verify
  mcp:
    - tavily
    - exa
```

## Delegação a subworkflows (workflows orquestradores)

Para workflows master e super-master que fazem spawn de subworkflows:

```typescript
interface SubWorkflowRef {
  name: string    // nome do subworkflow
  order: number   // ordem de execução (a partir de 0)
  mode: 'serial' | 'parallel'
  gate?: string   // chave de julgamento que precisa ser true para este subworkflow disparar
}
```

Exemplo (de `workflows/auto/workflow.yaml`):

```yaml
delegates_to:
  - name: research
    order: 0
    mode: serial
    gate: judgments.stage-routing.auto-research-unclear.fires
  - name: discuss
    order: 1
    mode: serial
  - name: plan
    order: 2
    mode: serial
  - name: task
    order: 3
    mode: serial
  - name: verify
    order: 4
    mode: serial
  - name: retro
    order: 5
    mode: serial
```

## Validação

Os manifestos são validados automaticamente no `harnessed install` com AJV + ajv-errors + ajv-formats (e no CI via `scripts/check-workflow-schema.mjs`). Um manifesto inválido é rejeitado antes de qualquer escrita, com mensagens de erro que apontam a linha.

## Arquivo do schema

O JSON Schema está publicado no repositório em [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json) e vai junto no pacote npm em `node_modules/harnessed/dist/schemas/`. Aponte o YAML language server do seu editor para ele e ganhe validação inline:

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## Exemplo de manifesto mínimo

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: Adiciona workflows de discuss e task de OAuth2 a apps Express.
install:
  - npm: superpowers
  - git: https://github.com/example/oauth-skill-pack
capability:
  skills:
    - brainstorming
  workflows:
    - discuss
    - task
disciplines_applied:
  - karpathy
  - output-style
```
