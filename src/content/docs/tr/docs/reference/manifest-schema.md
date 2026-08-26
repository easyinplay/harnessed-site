---
title: Manifest şeması
description: harness paketlerinin uyduğu tipli sözleşme.
---

Her harness paketi bir manifest ile gelir — `harnessed.workflow.v3` şemasıyla doğrulanan bir YAML dosyası. Manifest, harnessed’a paketin nasıl kurulacağını, hangi capability’leri açtığını ve alt iş akışlarına nasıl devrettiğini anlatır.

## Şema sürümü

```yaml
schema_version: harnessed.workflow.v3
```

## Üst düzey alanlar

```typescript
interface Manifest {
  schema_version: "harnessed.workflow.v3";
  name: string; // benzersiz paket tanımlayıcısı
  version: string; // semver (örn. "4.3.0")
  description: string; // tek paragraflık açıklama
  install?: InstallStep[]; // upstream bağımlılıkları kurma adımları
  capability?: Capability; // bu paketin sağladığı capability’ler
  delegates_to?: SubWorkflowRef[]; // orkestratör iş akışları için
  disciplines_applied?: string[]; // kesişen kurallar (örn. "karpathy")
  tools_available?: string[]; // bu iş akışının çağırabileceği araçlar
}
```

## Kurulum adımları

```typescript
type InstallStep =
  | { npm: string } // npm install -g <package>
  | { git: string } // git clone <url>
  | { script: string }; // rastgele bir shell komutu çalıştır
```

Örnek:

```yaml
install:
  - npm: superpowers
  - npm: "@oh-my-claude/gsd"
  - git: https://github.com/example/skill-pack-extra
  - script: harnessed setup --user-lang zh-Hans
```

## Capability

```typescript
interface Capability {
  skills?: string[]; // sağlanan eğik çizgi komut skills’leri
  workflows?: string[]; // sağlanan iş akışı adları
  mcp?: string[]; // kaydedilen MCP sunucu adları
}
```

Örnek:

```yaml
capability:
  skills:
    - brainstorming
    - tdd
  workflows:
    - discuss
    - plan
    - task
    - verify
  mcp:
    - tavily
    - exa
```

## Alt iş akışlarına devretme (orkestratör iş akışları)

Alt iş akışlarını spawn eden master ve super-master iş akışları için:

```typescript
interface SubWorkflowRef {
  name: string; // alt iş akışı adı
  order: number; // yürütme sırası (0’dan başlar)
  mode: "serial" | "parallel";
  gate?: string; // bu alt iş akışının tetiklenmesi için true olması gereken yargı anahtarı
}
```

Örnek (`workflows/auto/workflow.yaml` içinden):

```yaml
delegates_to:
  - name: research
    order: 0
    mode: serial
    gate: judgments.stage-routing.auto-research-unclear.fires
  - name: discuss
    order: 1
    mode: serial
  - name: plan
    order: 2
    mode: serial
  - name: task
    order: 3
    mode: serial
  - name: verify
    order: 4
    mode: serial
  - name: retro
    order: 5
    mode: serial
```

## Doğrulama

Manifestler `harnessed install` sırasında AJV + ajv-errors + ajv-formats ile otomatik doğrulanır (CI’da `scripts/check-workflow-schema.mjs` üzerinden). Geçersiz bir manifest, hiçbir şey yazılmadan önce reddedilir ve satır numaralı hata mesajları verilir.

## Şema dosyası

JSON Schema, depoda [`schemas/manifest.v1.schema.json`](https://github.com/easyinplay/harnessed/blob/main/schemas/manifest.v1.schema.json) yolunda yayımlanır ve npm paketiyle birlikte `node_modules/harnessed/dist/schemas/` altında gelir. Satır içi doğrulama için editörünüzün YAML language server’ını oraya yöneltin:

```yaml
# yaml-language-server: $schema=../../schemas/manifest.v1.schema.json
```

## Asgari manifest örneği

```yaml
schema_version: harnessed.workflow.v3
name: my-oauth-pack
version: 1.0.0
description: Express uygulamalarına OAuth2 discuss ve task iş akışları ekler.
install:
  - npm: superpowers
  - git: https://github.com/example/oauth-skill-pack
capability:
  skills:
    - brainstorming
  workflows:
    - discuss
    - task
disciplines_applied:
  - karpathy
  - output-style
```
