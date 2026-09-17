---
title: ワークフロー一覧
description: 現行リリースの harnessed に同梱される 29 個の合成可能なワークフロー。
---

harnessed は名前空間で階層化された 29 個のワークフローを提供します：super-master が 1 つ、段階 master が 5 つ（Discuss · Plan · Task · Verify · Ship）、サブワークフローが 20 個、独立ワークフローが 2 つ。

29 個のワークフロー —— 1 つの super-master が 5 つの stage master とそのサブに扇形に広がり、加えて独立ワークフローが 2 つ：

```mermaid
flowchart TD
  AUTO["/auto — super-master<br/>one-shot across all stages"]
  AUTO --> DIS["① /discuss · 3 subs"]
  AUTO --> PLA["② /plan · 2 subs"]
  AUTO --> TAS["③ /task · 4 subs"]
  AUTO --> VER["④ /verify · 11 subs"]
  AUTO --> SHI["⑤ /ship · 1 sub"]
  STA["standalones · /research · /retro"]
  DIS -.- STA
  SHI -.- STA
```

## Super-master

| コマンド | スコープ     | capability                                                                                                                                                                                                                           |
| -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/auto`  | super-master | 6 段階パイプライン全体：research（条件付き）→ discuss → plan → task → verify → retro（必須）。AI によるワンショットの複雑度評価 + 理解確認。`--staged` フラグで段階ゲート UX を有効化。失敗時は即停止し、`harnessed resume` で再開。 |

## 独立ワークフロー

| コマンド    | スコープ | capability                                                                                                                   |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `/research` | 独立     | Tavily、Exa MCP、ctx7 によるマルチソース調査。`/auto` では段階 0 として発火するか、discuss の前に直接呼び出す。              |
| `/retro`    | 独立     | gstack `/retro` によるマイルストーンの締め要約。学び、判断記録、想定外の発見を `RETROSPECTIVE.md` に残す。`/auto` では必須。 |

## Discuss 段階

| コマンド             | スコープ         | capability                                                                                                                             |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `/discuss`           | 段階 master      | 3 つの議論ゲートを並列に評価し、発火したものだけを実行。                                                                               |
| `/discuss-strategic` | サブワークフロー | 戦略層 —— 新機能／milestone／プロダクト方針。gstack `/office-hours` + `/plan-ceo-review`。`findings.md` を永続化。                     |
| `/discuss-phase`     | サブワークフロー | フェーズ層 —— 未決の判断が 2 つ以上、グレーゾーンの明確化。GSD `gsd-discuss-phase`。`findings.md` + `knowledge.md` を永続化。          |
| `/discuss-subtask`   | サブワークフロー | サブタスク層 —— 2 つ以上の方針／コアアルゴリズム／API contract。Superpowers brainstorming + `/grill-with-docs`。一時的で永続化しない。 |

## Plan 段階

| コマンド             | スコープ         | capability                                                                                                    |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `/plan`              | 段階 master      | 直列：アーキテクチャレビュー（条件付き）→ フェーズ計画（常時）。                                              |
| `/plan-architecture` | サブワークフロー | アーキテクチャ層 —— 複雑なアーキテクチャのガバナンスゲート。gstack `/plan-eng-review`。計画の前に設計を確定。 |
| `/plan-phase`        | サブワークフロー | フェーズ計画 —— GSD `gsd-plan-phase` + planning-with-files。`task_plan.md` + `progress.md` を永続化。         |

## Task 段階

| コマンド        | スコープ         | capability                                                                                                                                         |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/task`         | 段階 master      | サブタスクごとの直列ループ：明確化 → 実装 → テスト → 納品。                                                                                        |
| `/task-clarify` | サブワークフロー | 起動時の明確化ゲート。Superpowers brainstorming + `/grill-with-docs` を条件付きで発火。                                                            |
| `/task-code`    | サブワークフロー | karpathy の 4 原則に従って実装。`/zoom-out`／`/improve-codebase-architecture`／`/diagnose` を条件付きで発火。session をまたぐ `progress.md` 同期。 |
| `/task-test`    | サブワークフロー | TDD red → green → refactor。Superpowers TDD + `/diagnose` を条件付きで発火。コアロジックでは必須。                                                 |
| `/task-deliver` | サブワークフロー | harnessed 自身の完了ゲート（`harnessed checkpoint complete`）。逐語の `COMPLETE` が出るまで実行。フルスタック協調時は Agent Teams を条件付きで発火。                                   |

## Verify 段階

| コマンド                 | スコープ         | capability                                                                                                                                       |
| ------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/verify`                | 段階 master      | シナリオフラグに応じて最大 11 つのサブチェックを振り分け。                                                                                        |
| `/verify-progress`       | サブワークフロー | 常に最初に実行。UAT 受け入れ基準チェック + GSD 状態同期。                                                                                        |
| `/verify-code-review`    | サブワークフロー | 複数 subagent の並列 fan-out。高確度の指摘。                                                                                                     |
| `/verify-paranoid`       | サブワークフロー | gstack `/review` によるパラノイドエンジニアレビュー。重要モジュールの PR 前は必須。                                                              |
| `/verify-qa`             | サブワークフロー | gstack `/qa` + playwright-cli／`@playwright/test` によるエンドツーエンド QA。UI 変更時に発火。                                                   |
| `/verify-security`       | サブワークフロー | gstack `/cso` による OWASP／認証／シークレットのチェック。認証やシークレットに触れたときに発火。                                                 |
| `/verify-design`         | サブワークフロー | gstack `/design-review` + ui-ux-pro-max + design-taste-frontend によるデザインシステム整合チェック。デザイン変更時に発火。                       |
| `/verify-eval-review`    | サブワークフロー | GSD `/gsd-eval-review` による AI フェーズの eval カバレッジ監査。AI／LLM 段階を含むときに発火（plan 側の gsd-ai-integration-phase と対になる）。 |
| `/verify-validate-phase` | サブワークフロー | GSD `/gsd-validate-phase` による Nyquist の要件→テストカバレッジ埋め戻し。カバレッジ監査が必要なときに発火。                                     |
| `/verify-second-opinion`  | サブワークフロー | 直近の release tag 以降の diff に対するクロスモデルのセカンドオピニオン。エンジンが実際に読む面に変更が触れたときに発火。                        |
| `/verify-simplify`       | サブワークフロー | `code-simplifier` による最終簡素化。常に最後に実行。                                                                                             |
| `/verify-multispec`      | サブワークフロー | 4 専門家の Agent Team Pattern C —— SendMessage で相互にクロスレビュー。重要リリースや大規模リファクタ PR の昇格経路。                            |

## ディシプリンラッパー

| コマンド | スコープ   | ケイパビリティ                                                                        |
| -------- | ---------- | ------------------------------------------------------------------------------------- |
| `/tdd`   | ディシプリン | Red → green → refactor。上流の `superpowers:test-driven-development` を合成（mattpocock `/tdd` は代替）。 |

完了保証はもう上流のラッパーではありません。4.36.0 以降は harnessed 自身のゲート `harnessed checkpoint complete <sub>` が担っており（ADR 0039）、そのため `/ralph-loop` と旧 `/execute-task` エントリポイントは廃止されました。

すべてのワークフロー定義は [harnessed リポジトリ](https://github.com/easyinplay/harnessed) の `workflows/<name>/workflow.yaml` にあります。
