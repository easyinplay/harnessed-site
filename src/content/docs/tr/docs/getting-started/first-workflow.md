---
title: İlk iş akışınız
description: Gerçek bir /discuss → /plan → /task → /verify döngüsünü baştan sona izleyin.
---

Bu eğitim, 5 aşamalı ritmi gerçekçi bir örnekle elle adım adım gezer: **"Express API’mize hız sınırlayıcı ekle — IP başına dakikada 100 istek, Redis destekli."**

İlk `/auto` çalıştırmanız beş aşamayı uçtan uca yürür:

```mermaid
flowchart LR
  D["① Discuss"] --> P["② Plan"] --> T["③ Task"] --> V["④ Verify"] --> S["⑤ Ship"]
  V -. "fail / gap" .-> T
```

## Aşama 1 — Discuss

```
/discuss "Express API’mize hız sınırlayıcı ekle — IP başına dakikada 100 istek, Redis destekli"
```

`/discuss` üç netleştirme kapısını paralel değerlendirir ve yalnızca tetiklenenleri çalıştırır:

- **Stratejik kapı** (`discuss-strategic`): Bu yeni bir özellik mi, yoksa mevcut altyapıda bir değişiklik mi? Ürün konumlandırmasını etkiliyor mu? Bir hız sınırlayıcı için bu kapı genelde hızlı bir yönetişim kontrolü tetikler.
- **Faz kapısı** (`discuss-phase`): Açık kalmış ≥2 uygulama kararı var mı? (Redis mi, bellek içi mi? Rota bazlı mı, global mi?) Bu kapı netleştirir ve bulguları `findings.md` dosyasına kalıcılaştırır.
- **Alt görev kapısı** (`discuss-subtask`): ≥2 farklı yaklaşımı olan alt görev var mı? Çekirdek algoritma tasarımı kısa bir brainstorming’den geçer.

**Çıktı**: `.planning/PHASE-N/` altında `findings.md` ve `knowledge.md`.

## Aşama 2 — Plan

```
/plan "hız sınırlayıcı özelliği"
```

`/plan` iki adımı sırayla çalıştırır:

1. **Mimari inceleme** (koşullu) — özellik modül sınırlarını aşıyorsa ya da yeni altyapı içeriyorsa, gstack’in paranoyak staff engineer’ı tasarımı inceler
2. **Faz planı** — GSD, `task_plan.md` dosyasını tam dosya yolları, kabul ölçütleri ve bağımlılık sırasıyla kalıcılaştırır

**Çıktı**: `.planning/PHASE-N/PLAN.md` ve `task_plan.md`.

## Aşama 3 — Task

```
/task "hız sınırlayıcı ara katmanını uygula"
```

`/task` her alt görev için 4 alt adımı seri olarak çalıştırır:

1. **Netleştir** — kod yazmadan önce spec’i doğrular, belirsizlikleri açığa çıkarır
2. **Kodla** — karpathy ilkeleriyle uygular (mümkün olan en küçük değişiklik, cerrahi düzenlemeler)
3. **Test et** — çekirdek mantıkta TDD: red → green → refactor
4. **Teslim et** — `ralph-loop` sarmalayıcısı, devam etmeden önce birebir `COMPLETE` çıktısını garanti eder

## Aşama 4 — Verify

```
/verify "hız sınırlayıcı özelliği"
```

`/verify` neyin değiştiğine göre en fazla 7 alt kontrol dağıtır:

| Kontrol | Ne zaman tetiklenir |
|---------|---------------------|
| `verify-progress` | her zaman (UAT kabulü + durum eşitleme) |
| `verify-code-review` | her zaman (çok agent’lı paralel fan-out) |
| `verify-paranoid` | kritik modül ya da PR öncesi |
| `verify-qa` | UI değişikliği var |
| `verify-security` | auth ya da gizli anahtarlara dokunuldu |
| `verify-design` | tasarım değişikliği var |
| `verify-simplify` | her zaman en son (gereksiz mantığı kaldırır) |

## `.planning/` altında kalıcılaşan üretimler

```
.planning/
├── STATE.md          # güncel faz / ilerleme için tek doğruluk kaynağı
├── ROADMAP.md        # faz rota haritası
└── PHASE-1/
    ├── PLAN.md       # görev listesi, dosya yolları, kabul ölçütleri
    ├── findings.md   # discuss aşaması çıktıları
    ├── task_plan.md  # alt görev bazında ayrıştırma
    └── PROGRESS.md   # canlı ilerleme takibi
```

## Sonraki adımlar

Verify tamamlandıktan sonra kilometre taşını kapatmak ve dersleri kaydetmek için `/retro` çalıştırın. `/auto` kullansaydınız bu aşamalar otomatik zincirlenirdi — tek komutluk yol için [Hızlı başlangıç](/tr/docs/getting-started/quickstart/) bölümüne bakın.

Her aşamanın arkasındaki mimari için [5 aşamalı ritim](/tr/docs/concepts/five-stage-cadence/) yazısını okuyun.
