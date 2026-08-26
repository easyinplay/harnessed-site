---
title: Manifest スキーマ
description: harness パックが従う型付きの契約。
---

各 harness パックはマニフェストを同梱します —— `harnessed.workflow.v3` スキーマで検証される YAML ファイルです。マニフェストは harnessed に対し、そのパックのインストール方法、公開する capability、サブワークフローへの委譲方法を伝えます。

## スキーマバージョン

```yaml
schema_version: harnessed.workflow.v3
```

## トップレベルのフィールド

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // 一意なパック識別子
  version: string                 // semver（例 "4.3.0"）
  description: string             // 一段落の説明
  install?: InstallStep[]         // upstream 依存をインストールする手順
  capability?: Capability         // このパックが提供する capability
  delegates_to?: SubWorkflowRef[] // オーケストレーターワークフロー用
  disciplines_applied?: string[]  // 横断的な規則（例 "karpathy"）
  tools_available?: string[]      // このワークフローが呼べるツール
}
```

## インストール手順

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // 任意の shell コマンドを実行
```

例：

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
  skills?: string[]    // 提供するスラッシュコマンド skills
  workflows?: string[] // 提供するワークフロー名
  mcp?: string[]       // 登録する MCP サーバー名
}
```

例：

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

## サブワークフローへの委譲（オーケストレーターワークフロー）

サブワークフローを spawn する master・super-master ワークフロー向け：

```typescript
interface SubWorkflowRef {
  name: string    // サブワークフロー名
  order: number   // 実行順（0 始まり）
  mode: 'serial' | 'parallel'
  gate?: string   // このサブワークフローが発火するために true でなければならない判断キー
}
```

例（`workflows/auto/workflow.yaml` より）：

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

## 検証

マニフェストは `harnessed install` 時に AJV + ajv-errors + ajv-formats で自動検証されます（CI では `scripts/check-workflow-schema.mjs`）。無効なマニフェストは何も書き込まれる前に拒否され、行番号付きのエラーが表示されます。

## スキーマファイル

JSON Schema はリポジトリの [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json) に公開され、npm パッケージにも `node_modules/harnessed/dist/schemas/` として同梱されます。エディタの YAML language server をそこに向ければインライン検証が効きます：

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## 最小のマニフェスト例

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: Express アプリに OAuth2 の discuss と task ワークフローを追加する。
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
