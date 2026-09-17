---
title: 最初のワークフロー
description: 実際の /discuss → /plan → /task → /verify サイクルを一通り体験する。
---

このチュートリアルでは、現実的な例を使って 5 段階のリズムを手動でたどります：**「Express API にレート制限を追加 —— IP ごとに 100 req/min、Redis バックエンド。」**

最初の `/auto` 実行は、5 つの段階を端から端まで通します：

```mermaid
flowchart LR
  D["① Discuss"] --> P["② Plan"] --> T["③ Task"] --> V["④ Verify"] --> S["⑤ Ship"]
  V -. "fail / gap" .-> T
```

## 段階 1 — Discuss

```
/discuss "Express API にレート制限を追加 —— IP ごとに 100 req/min、Redis バックエンド"
```

`/discuss` は 3 つの明確化ゲートを並列で評価し、発火したものだけを実行します：

- **戦略ゲート**（`discuss-strategic`）：これは新機能か、既存インフラへの変更か。プロダクトのポジショニングに影響するか。レート制限の場合、このゲートは通常ガバナンスの簡易チェックを発火させます。
- **フェーズゲート**（`discuss-phase`）：未決の実装判断が 2 つ以上あるか。（Redis かインメモリか。ルートごとかグローバルか。）このゲートが明確化し、結果を `findings.md` に永続化します。
- **サブタスクゲート**（`discuss-subtask`）：明確に異なる方針が 2 つ以上あるサブタスクはあるか。コアアルゴリズムの設計は短い brainstorming にかけられます。

**出力**：`.planning/PHASE-N/` の `findings.md` と `knowledge.md`。

## 段階 2 — Plan

```
/plan "レート制限機能"
```

`/plan` は 2 つのステップを順に実行します：

1. **アーキテクチャレビュー**（条件付き）—— 機能がモジュール境界をまたぐ、または新しいインフラを伴う場合、gstack のパラノイドなスタッフエンジニアが設計をレビューします
2. **フェーズ計画** —— GSD が `task_plan.md` を永続化します。正確なファイルパス、受け入れ基準、依存順序を含みます

**出力**：`.planning/PHASE-N/PLAN.md` と `task_plan.md`。

## 段階 3 — Task

```
/task "レート制限ミドルウェアを実装"
```

`/task` はサブタスクごとに 4 つのサブステップを直列で実行します：

1. **明確化** —— コードを書く前に仕様を検証し、曖昧さを洗い出す
2. **実装** —— karpathy 原則に従う（最小限の実行可能な変更、外科手術的な編集）
3. **テスト** —— コアロジックは TDD：red → green → refactor
4. **納品** —— `harnessed checkpoint complete` ゲートが、逐語の `COMPLETE` が出るまで次に進ませない

## 段階 4 — Verify

```
/verify "レート制限機能"
```

`/verify` は変更内容に応じて最大 7 つのサブチェックを振り分けます：

| チェック             | 発火条件                          |
| -------------------- | --------------------------------- |
| `verify-progress`    | 常時（UAT 受け入れ + 状態同期）   |
| `verify-code-review` | 常時（マルチ agent 並列 fan-out） |
| `verify-paranoid`    | 重要モジュール、または PR 前      |
| `verify-qa`          | UI 変更がある                     |
| `verify-security`    | 認証やシークレットに触れた        |
| `verify-design`      | デザイン変更がある                |
| `verify-simplify`    | 常に最後（冗長なロジックを除去）  |

## `.planning/` に永続化される成果物

```
.planning/
├── STATE.md          # 現在のフェーズ / 進捗の SoT
├── ROADMAP.md        # フェーズのルートマップ
└── PHASE-1/
    ├── PLAN.md       # タスク一覧、ファイルパス、受け入れ基準
    ├── findings.md   # discuss 段階の出力
    ├── task_plan.md  # サブタスクごとの分解
    └── PROGRESS.md   # 進捗のライブ追跡
```

## 次のステップ

Verify が完了したら `/retro` を実行してマイルストーンを締め、学びを記録します。`/auto` を使っていればこれらの段階は自動で連鎖します —— 1 コマンドの経路は[クイックスタート](/ja/docs/getting-started/quickstart/)を参照してください。

各段階の背後にあるアーキテクチャについては [5 段階のリズム](/ja/docs/concepts/five-stage-cadence/) をお読みください。
