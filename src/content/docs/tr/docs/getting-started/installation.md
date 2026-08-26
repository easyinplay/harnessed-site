---
title: Kurulum
description: harnessed’ı kurun ve setup’ı 30 saniyede çalıştırın.
---

## Ön koşullar

- **Node.js 22+** — harnessed ESM kullanır ve Node 22 ya da daha yenisini gerektirir
- **Bir yapay zekâ kodlama agent’ı** — harnessed onun içinde çalışır. Birincil hedef Claude Code’dur ([anthropic.com/claude/code](https://anthropic.com/claude/code) üzerinden kurun); Codex ve diğer harness’lar cross-harness platform katmanıyla desteklenir

## Kurulum

```bash
npm install -g harnessed
```

Kurulumu doğrulayın:

```bash
harnessed --version
# → 4.32.20
```

## Bağımsız binary (Node.js gerekmez)

Node.js yok mu? Kendi kendine yeten tek dosya binary’sini kurabilirsiniz — platform başına dağıtılır ve `harnessed update` ile kendini günceller:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

`~/.local/bin/harnessed` konumuna kurar. unix üzerinde PATH asla otomatik düzenlenmez — `~/.local/bin` PATH’inizde değilse, kurulum betiği kabuğunuza özgü tam ekleme parçasını yazdırır.

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

`%LOCALAPPDATA%\harnessed\bin\harnessed.exe` konumuna kurar. Etkileşimli oturumlarda, kullanıcı kapsamındaki idempotent PATH eklemesinden önce onay istenir; etkileşimsiz çalıştırmalarda (CI / pipeline) bunun yerine elle yapılacak yönerge yazdırılır.

Her iki kurulum betiği de platform varlığını GitHub releases’tan indirir ve `.sha256` sağlamasını doğrular. Binary ve npm kanalları aynı CLI’yı çalıştırır — aşağıdaki her şey olduğu gibi geçerlidir. Binary’nin kendini nasıl güncellediğini (ed25519 imzalı) ve geri aldığını görmek için [`harnessed update`](/tr/docs/reference/cli/#harnessed-update) bölümüne bakın.

## setup’ı çalıştırın

```bash
harnessed setup
```

Setup dört adımı otomatik olarak gerçekleştirir:

1. **Agent Teams’i etkinleştirir** — `~/.claude/settings.json` dosyasına `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` yazar; böylece çok agent’lı desenler (Pattern A tam yığın, Pattern C uzman incelemesi) kutudan çıktığı gibi çalışır
2. **Kullanıcı yerel ayarını belirler** — işletim sistemi yerel ayarını algılar ve `env.HARNESSED_USER_LANG` değerine yazar (zh-* → `zh-Hans`, diğer hepsi → `en`); `--user-lang` ile geçersiz kılın
3. **İş akışı skills’lerini kurar** — her `workflows/<name>/SKILL.md` dosyasını `~/.claude/skills/<name>/` altına kopyalar; böylece eğik çizgi komutları Claude Code’da kullanılabilir olur
4. **Temel manifestleri işler** — upstream araç bağımlılıklarını kaydetmek için `manifests/tools/*.yaml` ve `manifests/skill-packs/*.yaml` dosyalarını sırayla işler

Setup’tan sonra `/auto`, `/discuss`, `/plan`, `/task` ve `/verify` gibi eğik çizgi komutları herhangi bir Claude Code oturumunda kullanılabilir.

## İsteğe bağlı bayraklar

```bash
harnessed setup --user-lang zh-Hans   # işletim sistemi yerel ayarından bağımsız olarak Çinceyi zorla
harnessed setup --user-lang en        # İngilizceyi zorla
harnessed setup --dry-run             # yalnızca önizleme — yazılacakları göster, diski değiştirme
```

Bayrakların tam listesi için [CLI komutları](/tr/docs/reference/cli/) bölümüne bakın.

## Windows notu

PowerShell 5.x `&&` ile zincirlemeyi desteklemez. `;` kullanın ya da iki ayrı satır yazın:

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+, bash, zsh ve cmd.exe tek satırlık biçimi destekler.
