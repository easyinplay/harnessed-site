---
title: クイックスタート
description: インストールから最初のワークフローまで 60 秒。
---

## ステップ 1 — インストールとセットアップ

```bash
npm install -g harnessed && harnessed setup
```

harnessed をグローバルにインストールし、一括オンボーディングを実行します：Agent Teams 有効化、ワークフロー skills のインストール、base マニフェストの処理。各ステップの内容は[インストール](/ja/docs/getting-started/installation/)を参照してください。

## ステップ 2 — Claude Code を開く

任意のプロジェクトディレクトリで Claude Code を開きます。スラッシュコマンドはグローバルに使えるようになっているので、特定のプロジェクトにいる必要はありません。

## ステップ 3 — 最初のコマンドを実行

Claude Code に次のように入力します：

```
/auto research how to add OAuth to my Express app
```

あるいは具体的な要求から始めます：

```
/auto "Express API にレート制限を追加 —— IP ごとに 100 req/min、Redis バックエンド"
```

## 次に何が起きるか

`/auto` は harnessed の super-master コマンドです。6 段階パイプライン全体を実行します：

| 段階 | 内容 |
|------|------|
| **① Research**（条件付き） | Tavily、Exa、ctx7 によるマルチソース調査 —— 理解確認に「いいえ」と答えた場合に発火 |
| **② Discuss** | 3 層の明確化ゲート：戦略スコープ、フェーズ判断、サブタスクの曖昧さ |
| **③ Plan** | アーキテクチャレビュー（条件付き）+ `.planning/` に `task_plan.md` と `progress.md` を永続化 |
| **④ Task** | サブタスクごとの直列ループ：明確化 → 実装 → テスト → 納品。コアロジックには TDD |
| **⑤ Verify** | 7 つの条件付きサブチェック：進捗、コードレビュー、パラノイドレビュー、QA、セキュリティ、デザイン、簡素化 |
| **⑥ Retro** | 必須のマイルストーン要約 —— 学びを記録し、判断を残す |

`/auto` はすべての段階を続けて実行します。ある段階が失敗すると harnessed は停止し、`harnessed resume` で再開できます。

細かく制御したい場合は各段階を個別に呼び出せます：`/discuss`、`/plan`、`/task`、`/verify`。実際に手を動かす流れは[最初のワークフロー](/ja/docs/getting-started/first-workflow/)を参照してください。
