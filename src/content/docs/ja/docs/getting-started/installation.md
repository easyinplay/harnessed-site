---
title: インストール
description: 30 秒で harnessed をインストールしてセットアップする。
---

## 前提条件

- **Node.js 22+** — harnessed は ESM を使うため Node 22 以降が必要です
- **AI コーディング agent** — harnessed はその中で動きます。主なターゲットは Claude Code（[anthropic.com/claude/code](https://anthropic.com/claude/code) からインストール）。Codex やその他の harness はクロス harness プラットフォーム層でサポートされます

## インストール

```bash
npm install -g harnessed
```

インストールを確認します：

```bash
harnessed --version
# → 4.32.20
```

## 単一ファイルバイナリ（Node.js 不要）

Node.js がない場合は、自己完結型の単一ファイルバイナリを代わりに導入できます —— プラットフォーム別に配布され、`harnessed update` で自己更新します：

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

`~/.local/bin/harnessed` にインストールされます。unix では PATH を自動編集することは決してありません —— `~/.local/bin` が PATH にない場合、インストーラーがシェルごとの正確な追加スニペットを表示します。

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

`%LOCALAPPDATA%\harnessed\bin\harnessed.exe` にインストールされます。対話セッションでは、冪等なユーザースコープの PATH 追加の前に同意プロンプトが出ます。非対話実行（CI／パイプライン）では手動手順が表示されます。

どちらのインストーラーも GitHub releases からプラットフォーム資産をダウンロードし、その `.sha256` チェックサムを検証します。バイナリ版と npm 版は同じ CLI を実行するので、以下の内容はそのまま当てはまります。バイナリの自己更新（ed25519 署名）とロールバックについては [`harnessed update`](/ja/docs/reference/cli/#harnessed-update) を参照してください。

## セットアップを実行

```bash
harnessed setup
```

Setup は 4 つのステップを自動で実行します：

1. **Agent Teams を有効化** — `~/.claude/settings.json` に `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` を書き込み、マルチ agent パターン（Pattern A フルスタック、Pattern C 専門家レビュー）をすぐ使える状態にします
2. **ユーザーロケールを設定** — OS のロケールを検出して `env.HARNESSED_USER_LANG` に書き込みます（zh-* → `zh-Hans`、それ以外 → `en`）。`--user-lang` で上書き可能
3. **ワークフロー skills をインストール** — 各 `workflows/<name>/SKILL.md` を `~/.claude/skills/<name>/` にコピーし、Claude Code でスラッシュコマンドを使えるようにします
4. **base マニフェストを処理** — `manifests/tools/*.yaml` と `manifests/skill-packs/*.yaml` を順に処理し、upstream ツールの依存を登録します

setup 後は、`/auto`、`/discuss`、`/plan`、`/task`、`/verify` などのスラッシュコマンドが任意の Claude Code セッションで使えます。

## 任意のフラグ

```bash
harnessed setup --user-lang zh-Hans   # OS ロケールに関わらず中国語を強制
harnessed setup --user-lang en        # 英語を強制
harnessed setup --dry-run             # 書き込む内容のプレビューのみ — ディスクは変更しない
```

フラグの全リストは [CLI コマンド](/ja/docs/reference/cli/) を参照してください。

## Windows での注意

PowerShell 5.x は `&&` によるチェーンをサポートしません。`;` を使うか、2 行に分けてください：

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+、bash、zsh、cmd.exe はいずれも 1 行形式をサポートします。
