---
title: 快速上手
description: 60 秒內從安裝到第一個工作流。
---

## 第一步 — 安裝與初始化

```bash
npm install -g harnessed && harnessed setup
```

全域安裝 harnessed 並完成一鍵入門初始化：啟用 Agent Teams、安裝工作流 skills、處理基礎清單。各步驟細節請參閱[安裝](/zh-hant/docs/getting-started/installation/)。

## 第二步 — 開啟 Claude Code

在任一專案目錄下開啟 Claude Code。斜線命令現在全域可用，不必侷限於特定專案。

## 第三步 — 執行第一條命令

在 Claude Code 中輸入：

```
/auto research how to add OAuth to my Express app
```

或者直接給出具體需求：

```
/auto "為我們的 Express API 加上限速中介層 —— 每 IP 每分鐘 100 次請求，Redis 後端"
```

## 接下來會發生什麼

`/auto` 是 harnessed 的超級主控命令，會執行完整的六階段管線：

| 階段                       | 說明                                                                           |
| -------------------------- | ------------------------------------------------------------------------------ |
| **① Research**（條件觸發） | 透過 Tavily、Exa、ctx7 進行多來源調研。當你回答「否」（需求還不清楚）時觸發    |
| **② Discuss**              | 三層釐清關卡：策略範圍、階段決策、子任務歧義                                   |
| **③ Plan**                 | 架構審查（條件觸發）+ 將 `task_plan.md` 與 `progress.md` 持久化到 `.planning/` |
| **④ Task**                 | 每個子任務的序列迴圈：釐清 → 編碼 → 測試 → 交付，核心邏輯強制 TDD              |
| **⑤ Verify**               | 最多 7 項條件子檢查：進度、程式碼審查、偏執審查、QA、安全、設計、簡化          |
| **⑥ Retro**                | 強制里程碑總結 —— 沉澱經驗教訓，記錄決策                                       |

`/auto` 會連續執行所有階段。若某個階段失敗，harnessed 會停下來，你可以用 `harnessed resume` 續跑。

如需細緻控制，可單獨呼叫各階段：`/discuss`、`/plan`、`/task`、`/verify`。動手實作請參閱[第一個工作流](/zh-hant/docs/getting-started/first-workflow/)。
