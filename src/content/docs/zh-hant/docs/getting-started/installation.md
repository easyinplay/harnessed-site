---
title: 安裝
description: 30 秒內安裝 harnessed 並完成初始化。
---

## 前置條件

- **Node.js 22+** — harnessed 使用 ESM，需要 Node 22 或更高版本
- **一個 AI 編程 agent** — harnessed 在其內執行。Claude Code 是主要目標（先從 [anthropic.com/claude/code](https://anthropic.com/claude/code) 安裝）；Codex 等其他 harness 透過跨 harness 平台層支援

## 安裝

```bash
npm install -g harnessed
```

驗證安裝結果：

```bash
harnessed --version
# → 4.43.0
```

## 單檔二進位（不需要 Node.js）

沒有 Node.js？可改裝自帶執行環境的單檔二進位 —— 依平台分發，透過 `harnessed update` 自動更新：

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

安裝到 `~/.local/bin/harnessed`。unix 上絕不自動改 PATH —— 若 `~/.local/bin` 不在 PATH 中，安裝器會印出對應 shell 的精確追加片段。

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

安裝到 `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`。互動式工作階段在冪等的使用者層級 PATH 追加前會先徵得同意；非互動（CI／管線）則印出手動操作說明。

兩個安裝器都會從 GitHub releases 下載平台資產並校驗其 `.sha256`。二進位與 npm 通道執行同一套 CLI —— 底下全部內容同樣適用。二進位如何自動更新（ed25519 簽章）與回滾，見 [`harnessed update`](/zh-hant/docs/reference/cli/#harnessed-update)。

## 執行初始化

```bash
harnessed setup
```

Setup 自動完成四個步驟：

1. **啟用 Agent Teams** — 將 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 寫入 `~/.claude/settings.json`，讓多 agent 模式（Pattern A 全端三路、Pattern C 專家審查）開箱即用
2. **設定使用者語言** — 偵測作業系統語言並寫入 `env.HARNESSED_USER_LANG`（zh-* → `zh-Hans`，其他 → `en`）；可透過 `--user-lang` 覆寫
3. **安裝工作流 skills** — 將每個 `workflows/<name>/SKILL.md` 複製到 `~/.claude/skills/<name>/`，讓斜線命令在 Claude Code 中可用
4. **處理基礎清單** — 依序處理 `manifests/tools/*.yaml` 與 `manifests/skill-packs/*.yaml`，註冊上游工具相依

Setup 完成後，`/auto`、`/discuss`、`/plan`、`/task`、`/verify` 等斜線命令在任何 Claude Code 工作階段中都可使用。

## 選用參數

```bash
harnessed setup --user-lang zh-Hans   # 不論作業系統語言為何，強制使用中文
harnessed setup --user-lang en        # 強制使用英文
harnessed setup --dry-run             # 預覽將寫入的內容，不改動磁碟
```

完整參數列表請參閱 [CLI 命令](/zh-hant/docs/reference/cli/)。

## Windows 注意事項

PowerShell 5.x 不支援 `&&` 串接，請改用 `;` 或分兩行執行：

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+、bash、zsh 與 cmd.exe 都支援單行寫法。
