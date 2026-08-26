---
title: Dogfood 우선 방법론
description: 모든 워크플로는 자기 자신의 정의로 검증된다.
---

## 원칙

harnessed의 요구사항 R8.1은 이렇게 규정합니다: 프로젝트 자신의 개발 사이클은 자기 워크플로를 사용해야 한다. harnessed에서 출시되는 모든 기능은 harnessed가 사용자에게 노출하는 것과 똑같은 `/discuss`, `/plan`, `/task`, `/verify` 리듬으로 만들어집니다.

이것은 지향점이 아니라 단단한 게이트입니다. harnessed가 자기 자신을 출시하는 데 쓸 수 없는 워크플로는 작동하지 않는 워크플로입니다.

## 실제로 무엇을 잡아냈나

Phase 3.5 W2.1 Cycle 4 기간에, 팀은 새 오케스트레이션 기능을 구현하려고 harnessed 저장소 자체에 `/auto`를 돌리고 있었습니다. 거기서 `masterOrchestrator`의 spawn 순서 로직에 버그가 드러났습니다. 서브워크플로 초기화 순서가 어긋나, plan 단계가 `task_plan.md`를 쓰기도 전에 task 단계가 시작된 것입니다.

이 버그는 dogfood 회귀로 잡혔습니다 —— 단위 테스트에서는 드러나지 않았습니다. 그 통합 경로는 실제 `/auto` 실행이 agent를 spawn할 때만 지나가기 때문입니다. harnessed가 자기 자신을 쓰고 있었기 때문에 실패는 즉각적이고 명확했습니다.

이 수정은 P0으로 격상됐습니다. 신뢰 계약을 위반했기 때문입니다: harnessed가 자기 개발을 오케스트레이션하지 못한다면, 사용자가 자기 개발을 맡길 수 없습니다.

## 실무적 함의

**Schema 변경은 스스로 검증된다.** harnessed가 매니페스트 schema에 새 필드를 추가하면, 다음 개발 사이클이 harnessed 자신의 매니페스트를 그 schema로 검증합니다 —— `harnessed install` 시 자동으로, 그리고 CI에서는 `scripts/check-workflow-schema.mjs`로. schema 회귀는 사용자에게 닿기 전에 dogfood 실행에서 드러납니다.

**새 워크플로는 먼저 스트레스 테스트를 거친다.** 어떤 워크플로든 출시 전에 harnessed 저장소 자체에서 실행됩니다. 그 워크플로를 정의하는 코드베이스가 곧 테스트 하네스입니다.

**Dogfood 버그는 P0이다.** harnessed 위에서 harnessed를 돌렸는데 깨진다면, 그것은 문서화할 알려진 한계가 아니라 P0 사고입니다. 이는 도구를 단위 테스트 통과 수준이 아니라 끝에서 끝까지 동작하는 상태로 유지하게 만드는 강한 동기가 됩니다.

## 사용자에게 주는 의미

여러분이 자기 프로젝트에서 `/auto`를 실행할 때, 그것은 harnessed 자신을 출시하는 것과 똑같은 파이프라인입니다. dogfooding의 지속적인 압력은 다음을 뜻합니다:

- 회귀는 사용자 제보가 아니라 개발 중에 드러난다
- 다중 agent 조율의 엣지 케이스가 harnessed 릴리스마다 실제로 밟힌다
- 5단계 리듬이 현실에서 활발히 유지보수되는 코드베이스로 실전 검증된다

이 방법론은 harnessed 저장소의 [docs/WORKFLOW.md](https://github.com/easyinplay/harnessed/blob/main/docs/WORKFLOW.md)에 기술되어 있습니다.
