---
title: harnessed’a hoş geldiniz
description: Yapay zekâ kodlama harness’ları için paket yöneticisi ve kompozisyon orkestratörü.
---

harnessed, yapay zekâ kodlama harness’ları için paket yöneticisi ve kompozisyon orkestratörüdür. Skills, MCP sunucuları ve harness paketlerini tipli bir manifest üzerinden birleştiren iş akışlarını kurar, birleştirir ve çalıştırır — upstream kodu vendoring yapmadan.

Claude Code ile geliştiriyorsanız, harnessed en iyi açık kaynak bileşenleri — ECC, Superpowers, GSD, gstack — tek bir komutla birbirine bağlayıp çalıştırılabilir tek bir iş akışına dönüştürür.

Çalışma döngüsü — beş aşama, her zaman açık bir Learn döngüsüyle kapanır:

```mermaid
flowchart LR
  R(["⓪ Research<br/>(optional)"]):::opt --> D
  D(["① Discuss<br/>3-layer clarify"]) --> P(["② Plan<br/>persist spec + tasks"])
  P --> T(["③ Task<br/>TDD build + checkpoint"])
  T --> V(["④ Verify<br/>independent review + evidence gate"])
  V --> S(["⑤ Ship<br/>release-preflight → tag-ready"])
  S -. "milestone summary" .-> RT(["Retro<br/>(optional)"]):::opt
  V -. "fail / gap" .-> T
  S == "Learn — captured → injected next cycle" ==> D
  classDef opt stroke-dasharray:5,opacity:0.8
```

## Nereden başlamalı

- **[Kurulum](/tr/docs/getting-started/installation/)** — harnessed’ı kurun ve setup’ı 30 saniyede çalıştırın
- **[Hızlı başlangıç](/tr/docs/getting-started/quickstart/)** — kurulumdan ilk iş akışına 60 saniyede
- **[Kompozisyon kavramı](/tr/docs/concepts/composition/)** — harnessed upstream araçları fork etmeden nasıl birleştirir
- **[İş akışı başvurusu](/tr/docs/reference/workflows/)** — mevcut sürümle gelen 28 birleştirilebilir iş akışının tamamı

## harnessed’ı farklı kılan ne

Her iş akışının altında üç ilke yatar:

**Vendoring yerine kompozisyon.** Her harness paketi bir manifest ile gelir. harnessed onu okur, uyumluluğu doğrular ve upstream araçları runtime’da birbirine diker. Çalıştırdığınız her zaman resmi upstream’dir — asla bayatlamış bir fork değil.

**Yerleşik 5 aşamalı ritim.** Discuss → Plan → Task → Verify → Ship; isteğe bağlı Research ve Retro ile birlikte, ayrıca otomatik bir öğrenme döngüsü. Ya da `/auto` çalıştırıp 6 aşamalı hattın tamamını (research → retro; Ship açıkça tetiklenir) tek komutta sürün.

**Dogfood öncelikli metodoloji.** Her iş akışı kendi tanımına karşı doğrulanır — harnessed’ın kendisini yayınlarken uyduğu disiplinin aynısı.

Bütünsel tanıtım için [README](https://github.com/easyinplay/harnessed#readme) dosyasını okuyun.
