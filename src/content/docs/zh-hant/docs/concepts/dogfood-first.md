---
title: Dogfood 優先方法論
description: 每個工作流都用自身定義來驗證。
---

## 核心原則

harnessed 的需求 R8.1 規定：專案自身的開發週期必須使用它自己的工作流。harnessed 中發佈的每個功能，都是用它對使用者暴露的同一套 `/discuss`、`/plan`、`/task`、`/verify` 節奏建起來的。

這不是願景宣言，而是硬性關卡。一個 harnessed 自己無法拿來交付的工作流，就是一個不能正常運作的工作流。

## 實務中的收益

在 Phase 3.5 W2.1 Cycle 4 期間，團隊正用 `/auto` 對 harnessed 儲存庫本身實作一個新的編排功能。`masterOrchestrator` 的 spawn-order 邏輯出現一個 bug：子工作流的初始化順序錯了，導致 task 階段在 plan 階段寫出 `task_plan.md` 之前就啟動。

這個 bug 是以 dogfood 回歸的形式被抓到的 —— 它沒有出現在單元測試裡，因為那條整合路徑只有在真實的 `/auto` 執行產生 agent 時才會走到。正因為 harnessed 在使用自己，失敗立即且明確。

這個修補被提升為 P0，因為它違反了信任契約：如果 harnessed 無法編排自己的開發，使用者也無法信任它來編排他們的開發。

## 實務含意

**Schema 變更自我驗證。** 當 harnessed 為清單 schema 加上新欄位時，下一個開發週期就會用它驗證 harnessed 自己的清單 —— `harnessed install` 時自動驗證，CI 中由 `scripts/check-workflow-schema.mjs` 驗證。任何 schema 回歸都會在 dogfood 執行中浮現，而不是等抵達使用者才爆。

**新工作流先受壓力測試。** 任何工作流發佈之前，都會先在 harnessed 儲存庫本身上執行。定義該工作流的同一套程式碼庫，同時也是測試平台。

**Dogfood bug 一律 P0。** 如果在 harnessed 上執行 harnessed 會出錯，那是 P0 事件，而不是一條記錄在案的已知限制。這強烈驅使工具端到端保持可用，而不只是通過單元測試。

## 對使用者的意義

當你在專案中執行 `/auto` 時，你跑的是 harnessed 自己用來交付自身的同一條管線。dogfood 的持續壓力意味著：

- 回歸在開發過程中浮現，而不是出現在使用者回報裡
- 多 agent 協調中的邊界情況，在每次 harnessed 發佈時都會被實際走過
- 五階段節奏經過真實且活躍維護的程式碼庫實戰檢驗

該方法論詳見 harnessed 儲存庫中的 [docs/WORKFLOW.md](https://github.com/easyinplay/harnessed/blob/main/docs/WORKFLOW.md)。
