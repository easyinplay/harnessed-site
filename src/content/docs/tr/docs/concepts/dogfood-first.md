---
title: Dogfood öncelikli metodoloji
description: Her iş akışı kendi tanımına karşı doğrulanır.
---

## İlke

harnessed’ın R8.1 gereksinimi şunu söyler: projenin kendi geliştirme döngüsü, kendi iş akışlarını kullanmak zorundadır. harnessed’da yayımlanan her özellik, harnessed’ın kullanıcılara sunduğu aynı `/discuss`, `/plan`, `/task`, `/verify` ritmiyle inşa edilir.

Bu bir temenni değil, katı bir kapıdır. harnessed’ın kendisini yayımlamak için kullanamadığı bir iş akışı, çalışmayan bir iş akışıdır.

## Pratikte neyi yakalar

Phase 3.5 W2.1 Cycle 4 sırasında ekip, yeni bir orkestrasyon özelliğini uygulamak için harnessed deposunun kendisinde `/auto` çalıştırıyordu. `masterOrchestrator`’ın spawn sırası mantığında bir hata ortaya çıktı: alt iş akışları sırasız başlatılıyordu ve plan aşaması `task_plan.md` dosyasını yazmadan task aşaması başlıyordu.

Bu hata bir dogfood regresyonu olarak yakalandı — birim testlerde görünmedi, çünkü o entegrasyon yolu ancak gerçek bir `/auto` çalıştırması agent spawn ettiğinde yürütülüyor. harnessed kendini kullandığı için hata anında ve tartışmasız biçimde ortaya çıktı.

Düzeltme P0’a yükseltildi, çünkü güven sözleşmesini ihlal ediyordu: harnessed kendi geliştirmesini orkestre edemiyorsa, kullanıcılar da kendi geliştirmeleri için ona güvenemez.

## Pratik sonuçları

**Schema değişiklikleri kendini doğrular.** harnessed manifest schema’sına yeni bir alan eklediğinde, bir sonraki geliştirme döngüsü harnessed’ın kendi manifestlerini bu schema ile doğrular — `harnessed install` sırasında otomatik olarak ve CI’da `scripts/check-workflow-schema.mjs` üzerinden. Herhangi bir schema regresyonu kullanıcılara ulaşmadan önce dogfood çalıştırmasında görünür.

**Yeni iş akışları önce strese sokulur.** Herhangi bir iş akışı yayımlanmadan önce harnessed deposunun kendisinde çalıştırılır. İş akışını tanımlayan kod tabanı, aynı zamanda test düzeneği olarak hizmet eder.

**Dogfood hataları P0’dır.** harnessed üzerinde harnessed çalıştırmak bozuluyorsa, bu belgelenecek bilinen bir kısıt değil, bir P0 olayıdır. Bu, aracı yalnızca birim testleri geçen değil, uçtan uca çalışan bir durumda tutmak için güçlü bir teşvik yaratır.

## Bunun kullanıcılar için anlamı

Kendi projenizde `/auto` çalıştırdığınızda, harnessed’ın kendisini yayımlayan hattın aynısını çalıştırıyorsunuz. Dogfooding’in sürekli baskısı şu anlama gelir:

- Regresyonlar kullanıcı bildirimlerinde değil, geliştirme sırasında yüzeye çıkar
- Çok agent’lı koordinasyondaki uç durumlar her harnessed sürümünde fiilen çalıştırılır
- 5 aşamalı ritim, gerçek ve aktif olarak bakımı yapılan bir kod tabanında sınanmıştır

Metodoloji, harnessed deposundaki [docs/WORKFLOW.md](https://github.com/easyinplay/harnessed/blob/main/docs/WORKFLOW.md) dosyasında anlatılmıştır.
