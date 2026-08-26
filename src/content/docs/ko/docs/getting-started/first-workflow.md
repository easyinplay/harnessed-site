---
title: 첫 워크플로
description: 실제 /discuss → /plan → /task → /verify 사이클을 처음부터 끝까지 따라가 봅니다.
---

이 튜토리얼에서는 현실적인 예제로 5단계 리듬을 수동으로 따라갑니다: **"Express API에 레이트 리미터 추가 —— IP당 분당 100 요청, Redis 백엔드."**

첫 `/auto` 실행은 다섯 단계를 끝에서 끝까지 통과합니다:

```mermaid
flowchart LR
  D["① Discuss"] --> P["② Plan"] --> T["③ Task"] --> V["④ Verify"] --> S["⑤ Ship"]
  V -. "fail / gap" .-> T
```

## 1단계 — Discuss

```
/discuss "Express API에 레이트 리미터 추가 —— IP당 분당 100 요청, Redis 백엔드"
```

`/discuss`는 세 개의 명확화 게이트를 병렬로 평가하고, 발동한 것만 실행합니다:

- **전략 게이트**(`discuss-strategic`): 이것은 새 기능인가, 기존 인프라의 변경인가? 제품 포지셔닝에 영향을 주는가? 레이트 리미터라면 이 게이트는 대체로 빠른 거버넌스 점검을 발동시킵니다.
- **페이즈 게이트**(`discuss-phase`): 미결 구현 결정이 2개 이상인가? (Redis인가 인메모리인가? 라우트별인가 전역인가?) 이 게이트가 명확화하고 결과를 `findings.md`에 영속화합니다.
- **서브태스크 게이트**(`discuss-subtask`): 뚜렷이 다른 접근이 2개 이상인 서브태스크가 있는가? 핵심 알고리즘 설계는 짧은 brainstorming을 거칩니다.

**산출물**: `.planning/PHASE-N/`의 `findings.md`와 `knowledge.md`.

## 2단계 — Plan

```
/plan "레이트 리미터 기능"
```

`/plan`은 두 단계를 순서대로 실행합니다:

1. **아키텍처 리뷰**(조건부) —— 기능이 모듈 경계를 넘거나 새 인프라를 수반하면 gstack의 편집증적 스태프 엔지니어가 설계를 검토합니다
2. **페이즈 계획** —— GSD가 정확한 파일 경로, 인수 기준, 의존 순서를 담아 `task_plan.md`를 영속화합니다

**산출물**: `.planning/PHASE-N/PLAN.md`와 `task_plan.md`.

## 3단계 — Task

```
/task "레이트 리미터 미들웨어 구현"
```

`/task`는 서브태스크마다 네 개의 하위 단계를 직렬로 실행합니다:

1. **명확화** —— 코드를 쓰기 전에 스펙을 검증하고 모호한 지점을 드러냄
2. **구현** —— karpathy 원칙에 따름(가장 작은 실행 가능한 변경, 외과적 편집)
3. **테스트** —— 핵심 로직은 TDD: red → green → refactor
4. **전달** —— `ralph-loop` 래퍼가 문자 그대로의 `COMPLETE`가 나오기 전에는 다음으로 넘어가지 않게 함

## 4단계 — Verify

```
/verify "레이트 리미터 기능"
```

`/verify`는 변경 내용에 따라 최대 7가지 하위 검사를 배분합니다:

| 검사                 | 발동 조건                     |
| -------------------- | ----------------------------- |
| `verify-progress`    | 항상(UAT 인수 + 상태 동기화)  |
| `verify-code-review` | 항상(다중 agent 병렬 fan-out) |
| `verify-paranoid`    | 핵심 모듈이거나 PR 직전       |
| `verify-qa`          | UI 변경이 있음                |
| `verify-security`    | 인증이나 시크릿을 건드림      |
| `verify-design`      | 디자인 변경이 있음            |
| `verify-simplify`    | 항상 마지막(중복 로직 제거)   |

## `.planning/`에 영속화되는 산출물

```
.planning/
├── STATE.md          # 현재 페이즈 / 진행 상황의 SoT
├── ROADMAP.md        # 페이즈 경로도
└── PHASE-1/
    ├── PLAN.md       # 태스크 목록, 파일 경로, 인수 기준
    ├── findings.md   # discuss 단계 산출물
    ├── task_plan.md  # 서브태스크별 분해
    └── PROGRESS.md   # 실시간 진행 추적
```

## 다음 단계

Verify가 끝나면 `/retro`를 실행해 마일스톤을 닫고 교훈을 기록하세요. `/auto`를 썼다면 이 단계들이 자동으로 이어졌을 것입니다 —— 한 줄 명령 경로는 [빠른 시작](/ko/docs/getting-started/quickstart/)을 참고하세요.

각 단계 뒤의 아키텍처는 [5단계 리듬](/ko/docs/concepts/five-stage-cadence/)에서 읽어 보세요.
