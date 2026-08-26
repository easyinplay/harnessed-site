---
title: Hızlı başlangıç
description: Kurulumdan ilk iş akışına 60 saniyede.
---

## Adım 1 — Kur ve ayarla

```bash
npm install -g harnessed && harnessed setup
```

Bu, harnessed’ı global olarak kurar ve tek seferlik başlangıcı çalıştırır: Agent Teams etkin, iş akışı skills’leri kurulu, temel manifestler işlenmiş. Her adımın ne yaptığı için [Kurulum](/tr/docs/getting-started/installation/) bölümüne bakın.

## Adım 2 — Claude Code’u açın

Herhangi bir proje dizininde Claude Code’u açın. Eğik çizgi komutları artık global olarak kullanılabilir — belirli bir projede olmanız gerekmez.

## Adım 3 — İlk komutunuzu çalıştırın

Claude Code’a şunu yazın:

```
/auto research how to add OAuth to my Express app
```

Ya da somut bir gereksinimle başlayın:

```
/auto "Express API’mize hız sınırlayıcı ekle — IP başına dakikada 100 istek, Redis destekli"
```

## Sonra ne olur

`/auto`, harnessed’ın super-master komutudur. 6 aşamalı hattın tamamını çalıştırır:

| Aşama | Ne yapar |
|-------|----------|
| **① Research** (koşullu) | Tavily, Exa, ctx7 üzerinden çok kaynaklı araştırma — anlama kontrolüne "hayır" yanıtı verirseniz tetiklenir |
| **② Discuss** | 3 katmanlı netleştirme kapıları: stratejik kapsam, faz kararları, alt görev belirsizliği |
| **③ Plan** | Mimari inceleme (koşullu) + `.planning/` altına `task_plan.md` ve `progress.md` kalıcılaştırma |
| **④ Task** | Alt görev başına sıralı döngü: netleştir → kodla → test et → teslim et, çekirdek mantıkta TDD ile |
| **⑤ Verify** | 7 koşullu alt kontrol: ilerleme, kod incelemesi, paranoyak inceleme, QA, güvenlik, tasarım, sadeleştirme |
| **⑥ Retro** | Zorunlu kilometre taşı özeti — dersler kaydedilir, kararlar belgelenir |

`/auto` tüm aşamaları kesintisiz çalıştırır. Bir aşama başarısız olursa harnessed durur ve `harnessed resume` ile devam edebilirsiniz.

İnce ayarlı kontrol için aşamaları tek tek çağırın: `/discuss`, `/plan`, `/task`, `/verify`. Uygulamalı bir gezinti için [İlk iş akışınız](/tr/docs/getting-started/first-workflow/) bölümüne bakın.
