---
title: Manifest Schema
description: 脚手架包遵循的类型化契约。
---

每个脚手架包提供一份清单 —— 一个经 `harnessed.workflow.v3` schema 验证的 YAML 文件。清单告诉 harnessed 如何安装该包、它暴露了哪些能力，以及如何委托给子工作流。

## Schema 版本

```yaml
schema_version: harnessed.workflow.v3
```

## 顶层字段

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // 唯一的包标识符
  version: string                 // semver（如 "4.3.0"）
  description: string             // 一段话描述，用于 `harnessed list`
  install?: InstallStep[]         // 安装上游依赖的步骤
  capability?: Capability         // 此包贡献的能力
  delegates_to?: SubWorkflowRef[] // 用于编排器工作流
  disciplines_applied?: string[]  // 横切规则（如 "karpathy"）
  tools_available?: string[]      // 此工作流可调用的工具
}
```

## 安装步骤

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // 运行任意 shell 命令
```

示例：

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
  skills?: string[]    // 贡献的斜杠命令 skills
  workflows?: string[] // 贡献的工作流名称
  mcp?: string[]       // 注册的 MCP 服务器名称
}
```

示例：

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

## 委托子工作流（编排器工作流）

用于生成子工作流的主控和超级主控工作流：

```typescript
interface SubWorkflowRef {
  name: string    // 子工作流名称
  order: number   // 执行顺序（从 0 开始）
  mode: 'serial' | 'parallel'
  gate?: string   // 必须为 true 才触发此子工作流的判断键
}
```

示例（来自 `workflows/auto/workflow.yaml`）：

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

## 验证

清单在安装时和执行 `harnessed validate` 时通过 AJV + ajv-errors + ajv-formats 进行验证：

```bash
harnessed validate ./my-pack/workflow.yaml
# → ✓ valid（或带行号的错误信息）
```

## 本地查看 Schema

```bash
harnessed schemas
# 将完整 JSON Schema 输出到 stdout
# 可管道写入文件供 IDE 集成：
harnessed schemas > workflow-schema.json
```

Schema 文件同时随 npm 包发布，位于 `node_modules/harnessed/schemas/workflow.schema.json`。

## 最小清单示例

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: 为 Express 应用添加 OAuth2 讨论和任务工作流。
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
