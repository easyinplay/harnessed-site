---
title: 빠른 시작
description: 설치부터 첫 워크플로까지 60초.
---

## 1단계 — 설치와 setup

```bash
npm install -g harnessed && harnessed setup
```

harnessed를 전역으로 설치하고 한 번에 온보딩을 실행합니다: Agent Teams 활성화, 워크플로 skills 설치, base 매니페스트 처리. 각 단계가 무엇을 하는지는 [설치](/ko/docs/getting-started/installation/)를 참고하세요.

## 2단계 — Claude Code 열기

아무 프로젝트 디렉터리에서나 Claude Code를 엽니다. 슬래시 명령은 이제 전역으로 쓸 수 있으므로 특정 프로젝트 안에 있을 필요가 없습니다.

## 3단계 — 첫 명령 실행

Claude Code에 다음을 입력합니다:

```
/auto research how to add OAuth to my Express app
```

또는 구체적인 요구사항으로 시작합니다:

```
/auto "Express API에 레이트 리미터 추가 —— IP당 분당 100 요청, Redis 백엔드"
```

## 다음에 일어나는 일

`/auto`는 harnessed의 super-master 명령으로, 6단계 파이프라인 전체를 실행합니다:

| 단계 | 하는 일 |
|------|--------|
| **① Research**(조건부) | Tavily, Exa, ctx7을 통한 다중 소스 조사 —— 이해 확인에 "아니오"라고 답하면 발동 |
| **② Discuss** | 3계층 명확화 게이트: 전략 범위, 페이즈 결정, 서브태스크 모호성 |
| **③ Plan** | 아키텍처 리뷰(조건부) + `.planning/`에 `task_plan.md`와 `progress.md` 영속화 |
| **④ Task** | 서브태스크별 직렬 루프: 명확화 → 구현 → 테스트 → 전달, 핵심 로직은 TDD |
| **⑤ Verify** | 7가지 조건부 하위 검사: 진행 상황, 코드 리뷰, 편집증 리뷰, QA, 보안, 디자인, 단순화 |
| **⑥ Retro** | 필수 마일스톤 요약 —— 교훈 기록, 결정 보존 |

`/auto`는 모든 단계를 연속으로 실행합니다. 어떤 단계가 실패하면 harnessed는 멈추고, `harnessed resume`으로 이어서 진행할 수 있습니다.

세밀하게 제어하려면 각 단계를 개별 호출하세요: `/discuss`, `/plan`, `/task`, `/verify`. 직접 따라 해 보는 흐름은 [첫 워크플로](/ko/docs/getting-started/first-workflow/)를 참고하세요.
