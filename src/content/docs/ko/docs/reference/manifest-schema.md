---
title: Manifest 스키마
description: harness 팩이 따르는 타입이 정의된 계약.
---

각 harness 팩은 매니페스트를 함께 제공합니다 —— `harnessed.workflow.v3` 스키마로 검증되는 YAML 파일입니다. 매니페스트는 harnessed에게 팩의 설치 방법, 노출하는 capability, 서브워크플로에 위임하는 방식을 알려 줍니다.

## 스키마 버전

```yaml
schema_version: harnessed.workflow.v3
```

## 최상위 필드

```typescript
interface Manifest {
  schema_version: "harnessed.workflow.v3";
  name: string; // 고유한 팩 식별자
  version: string; // semver(예: "4.3.0")
  description: string; // 한 문단 설명
  install?: InstallStep[]; // upstream 의존성 설치 단계
  capability?: Capability; // 이 팩이 제공하는 capability
  delegates_to?: SubWorkflowRef[]; // 오케스트레이터 워크플로용
  disciplines_applied?: string[]; // 횡단 규칙(예: "karpathy")
  tools_available?: string[]; // 이 워크플로가 호출할 수 있는 도구
}
```

## 설치 단계

```typescript
type InstallStep =
  | { npm: string } // npm install -g <package>
  | { git: string } // git clone <url>
  | { script: string }; // 임의의 shell 명령 실행
```

예:

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
  skills?: string[]; // 제공하는 슬래시 명령 skills
  workflows?: string[]; // 제공하는 워크플로 이름
  mcp?: string[]; // 등록하는 MCP 서버 이름
}
```

예:

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

## 서브워크플로 위임(오케스트레이터 워크플로)

서브워크플로를 spawn하는 master 및 super-master 워크플로용:

```typescript
interface SubWorkflowRef {
  name: string; // 서브워크플로 이름
  order: number; // 실행 순서(0부터)
  mode: "serial" | "parallel";
  gate?: string; // 이 서브워크플로가 발동하려면 true여야 하는 판단 키
}
```

예(`workflows/auto/workflow.yaml`에서):

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

## 검증

매니페스트는 `harnessed install` 시 AJV + ajv-errors + ajv-formats로 자동 검증됩니다(CI에서는 `scripts/check-workflow-schema.mjs`). 유효하지 않은 매니페스트는 아무것도 기록되기 전에 거부되며, 행 번호가 붙은 오류가 표시됩니다.

## 스키마 파일

JSON Schema는 저장소의 [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json)에 공개되어 있고, npm 패키지에도 `node_modules/harnessed/dist/schemas/`로 포함됩니다. 에디터의 YAML language server를 그 파일로 지정하면 인라인 검증이 됩니다:

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## 최소 매니페스트 예시

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: Express 앱에 OAuth2 discuss와 task 워크플로를 추가.
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
