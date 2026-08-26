---
title: Schema của manifest
description: Contract có kiểu mà các harness pack tuân theo.
---

Mỗi harness pack đi kèm một manifest — tệp YAML được kiểm tra bằng schema `harnessed.workflow.v3`. Manifest cho harnessed biết cách cài pack, nó phơi ra những capability nào và ủy thác cho subworkflow ra sao.

## Phiên bản schema

```yaml
schema_version: harnessed.workflow.v3
```

## Các trường cấp cao nhất

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // định danh duy nhất của pack
  version: string                 // semver (ví dụ "4.3.0")
  description: string             // mô tả một đoạn
  install?: InstallStep[]         // các bước cài phụ thuộc upstream
  capability?: Capability         // capability mà pack này đóng góp
  delegates_to?: SubWorkflowRef[] // dành cho workflow orchestrator
  disciplines_applied?: string[]  // quy tắc xuyên suốt (ví dụ "karpathy")
  tools_available?: string[]      // công cụ mà workflow này có thể gọi
}
```

## Các bước cài đặt

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // chạy một lệnh shell tùy ý
```

Ví dụ:

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
  skills?: string[]    // skills lệnh gạch chéo được đóng góp
  workflows?: string[] // tên workflow được đóng góp
  mcp?: string[]       // tên MCP server được đăng ký
}
```

Ví dụ:

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

## Ủy thác cho subworkflow (workflow orchestrator)

Dành cho workflow master và super-master có spawn subworkflow:

```typescript
interface SubWorkflowRef {
  name: string    // tên subworkflow
  order: number   // thứ tự thực thi (bắt đầu từ 0)
  mode: 'serial' | 'parallel'
  gate?: string   // khóa phán quyết phải là true thì subworkflow này mới kích hoạt
}
```

Ví dụ (từ `workflows/auto/workflow.yaml`):

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

## Kiểm tra hợp lệ

Manifest được kiểm tra tự động khi `harnessed install` bằng AJV + ajv-errors + ajv-formats (và trong CI qua `scripts/check-workflow-schema.mjs`). Manifest không hợp lệ bị từ chối trước khi ghi bất cứ thứ gì, kèm thông báo lỗi có số dòng.

## Tệp schema

JSON Schema được công bố trong repo tại [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json) và đi kèm gói npm ở `node_modules/harnessed/dist/schemas/`. Trỏ YAML language server của trình soạn thảo vào đó để có kiểm tra nội tuyến:

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## Ví dụ manifest tối thiểu

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: Thêm workflow discuss và task cho OAuth2 vào ứng dụng Express.
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
