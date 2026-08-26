---
title: Manifest Schema
description: harness 套件遵循的型別化契約。
---

每個 harness 套件提供一份清單 —— 一個經 `harnessed.workflow.v3` schema 驗證的 YAML 檔。清單告訴 harnessed 如何安裝該套件、它暴露哪些能力，以及如何委派給子工作流。

## Schema 版本

```yaml
schema_version: harnessed.workflow.v3
```

## 頂層欄位

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // 唯一的套件識別碼
  version: string                 // semver（如 "4.3.0"）
  description: string             // 一段話描述
  install?: InstallStep[]         // 安裝上游相依的步驟
  capability?: Capability         // 此套件貢獻的能力
  delegates_to?: SubWorkflowRef[] // 用於編排器工作流
  disciplines_applied?: string[]  // 橫切規則（如 "karpathy"）
  tools_available?: string[]      // 此工作流可呼叫的工具
}
```

## 安裝步驟

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // 執行任意 shell 指令
```

範例：

```yaml
install:
  - npm: superpowers
  - npm: "@oh-my-claude/gsd"
  - git: https://github.com/example/skill-pack-extra
  - script: harnessed setup --user-lang zh-Hans
```

## Capability（能力）

```typescript
interface Capability {
  skills?: string[]    // 貢獻的斜線命令 skills
  workflows?: string[] // 貢獻的工作流名稱
  mcp?: string[]       // 註冊的 MCP 伺服器名稱
}
```

範例：

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

## 委派子工作流（編排器工作流）

用於產生子工作流的主控與超級主控工作流：

```typescript
interface SubWorkflowRef {
  name: string    // 子工作流名稱
  order: number   // 執行順序（從 0 開始）
  mode: 'serial' | 'parallel'
  gate?: string   // 必須為 true 才觸發此子工作流的判斷鍵
}
```

範例（來自 `workflows/auto/workflow.yaml`）：

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

## 驗證

清單在 `harnessed install` 時透過 AJV + ajv-errors + ajv-formats 自動驗證（CI 中由 `scripts/check-workflow-schema.mjs` 驗證）。無效清單在寫入任何內容之前就會被拒絕，並給出帶行號的錯誤訊息。

## Schema 檔案

JSON Schema 發佈在 repo 的 [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json)，並隨 npm 套件發佈於 `node_modules/harnessed/dist/schemas/`。把編輯器的 YAML language server 指向它即可取得行內驗證：

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## 最小清單範例

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: 為 Express 應用加上 OAuth2 討論與任務工作流。
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
