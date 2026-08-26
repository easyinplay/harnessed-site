---
title: Схема манифеста
description: Типизированный контракт, которому следуют harness-паки.
---

Каждый harness-пак поставляется с манифестом — YAML-файлом, проверяемым схемой `harnessed.workflow.v3`. Манифест сообщает harnessed, как установить пак, какие capability он предоставляет и как делегирует подworkflow.

## Версия схемы

```yaml
schema_version: harnessed.workflow.v3
```

## Поля верхнего уровня

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // уникальный идентификатор пака
  version: string                 // semver (например, "4.3.0")
  description: string             // описание в один абзац
  install?: InstallStep[]         // шаги установки upstream-зависимостей
  capability?: Capability         // capability, которые даёт этот пак
  delegates_to?: SubWorkflowRef[] // для оркестрирующих workflow
  disciplines_applied?: string[]  // сквозные правила (например, "karpathy")
  tools_available?: string[]      // инструменты, доступные этому workflow
}
```

## Шаги установки

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // выполнить произвольную shell-команду
```

Пример:

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
  skills?: string[]    // предоставляемые slash-команды skills
  workflows?: string[] // предоставляемые имена workflow
  mcp?: string[]       // регистрируемые имена MCP-серверов
}
```

Пример:

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

## Делегирование подworkflow (оркестрирующие workflow)

Для master и super-master workflow, порождающих подworkflow:

```typescript
interface SubWorkflowRef {
  name: string    // имя подworkflow
  order: number   // порядок выполнения (с 0)
  mode: 'serial' | 'parallel'
  gate?: string   // ключ решения, который должен быть true, чтобы подworkflow сработал
}
```

Пример (из `workflows/auto/workflow.yaml`):

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

## Валидация

Манифесты автоматически проверяются при `harnessed install` через AJV + ajv-errors + ajv-formats (а в CI — через `scripts/check-workflow-schema.mjs`). Некорректный манифест отклоняется до любой записи, с сообщениями об ошибках и номерами строк.

## Файл схемы

JSON Schema опубликована в репозитории по пути [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json) и поставляется с npm-пакетом в `node_modules/harnessed/dist/schemas/`. Направьте на неё YAML language server своего редактора ради inline-валидации:

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## Минимальный пример манифеста

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: Добавляет workflow discuss и task для OAuth2 в приложения Express.
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
