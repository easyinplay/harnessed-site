---
title: Schema ของ manifest
description: contract ที่กำหนดชนิดซึ่ง harness pack ยึดตาม
---

harness pack แต่ละตัวมาพร้อม manifest — ไฟล์ YAML ที่ตรวจสอบด้วย schema `harnessed.workflow.v3` manifest บอก harnessed ว่าจะติดตั้ง pack อย่างไร มันเปิด capability อะไรออกมา และมอบงานให้ subworkflow อย่างไร

## เวอร์ชันของ schema

```yaml
schema_version: harnessed.workflow.v3
```

## ฟิลด์ระดับบนสุด

```typescript
interface Manifest {
  schema_version: 'harnessed.workflow.v3'
  name: string                    // ตัวระบุ pack ที่ไม่ซ้ำ
  version: string                 // semver (เช่น "4.3.0")
  description: string             // คำอธิบายหนึ่งย่อหน้า
  install?: InstallStep[]         // ขั้นตอนติดตั้งการพึ่งพา upstream
  capability?: Capability         // capability ที่ pack นี้มอบให้
  delegates_to?: SubWorkflowRef[] // สำหรับ workflow ที่เป็น orchestrator
  disciplines_applied?: string[]  // กฎที่ตัดขวาง (เช่น "karpathy")
  tools_available?: string[]      // เครื่องมือที่ workflow นี้เรียกได้
}
```

## ขั้นตอนติดตั้ง

```typescript
type InstallStep =
  | { npm: string }               // npm install -g <package>
  | { git: string }               // git clone <url>
  | { script: string }            // รันคำสั่ง shell ใดก็ได้
```

ตัวอย่าง:

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
  skills?: string[]    // skills แบบคำสั่งสแลชที่มอบให้
  workflows?: string[] // ชื่อ workflow ที่มอบให้
  mcp?: string[]       // ชื่อ MCP server ที่ลงทะเบียน
}
```

ตัวอย่าง:

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

## การมอบงานให้ subworkflow (workflow แบบ orchestrator)

สำหรับ workflow ระดับ master และ super-master ที่ spawn subworkflow:

```typescript
interface SubWorkflowRef {
  name: string    // ชื่อ subworkflow
  order: number   // ลำดับการรัน (เริ่มจาก 0)
  mode: 'serial' | 'parallel'
  gate?: string   // คีย์การตัดสินที่ต้องเป็น true เพื่อให้ subworkflow นี้ทำงาน
}
```

ตัวอย่าง (จาก `workflows/auto/workflow.yaml`):

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

## การตรวจสอบความถูกต้อง

manifest ถูกตรวจอัตโนมัติตอน `harnessed install` ด้วย AJV + ajv-errors + ajv-formats (และใน CI ผ่าน `scripts/check-workflow-schema.mjs`) manifest ที่ไม่ถูกต้องจะถูกปฏิเสธก่อนเขียนอะไรลงไป พร้อมข้อความผิดพลาดที่ระบุหมายเลขบรรทัด

## ไฟล์ schema

JSON Schema เผยแพร่อยู่ใน repo ที่ [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json) และมาพร้อมแพ็กเกจ npm ที่ `node_modules/harnessed/dist/schemas/` ชี้ YAML language server ของเอดิเตอร์ไปที่ไฟล์นี้เพื่อให้ตรวจแบบอินไลน์:

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## ตัวอย่าง manifest ขั้นต่ำ

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: เพิ่ม workflow discuss และ task สำหรับ OAuth2 ให้แอป Express
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
