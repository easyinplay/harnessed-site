import type { Dict } from "./en";

const tr: Dict = {
  promoBar: {
    items: [
      "v4.43.0 — bildirilen ama hiç değerlendirilmeyen schema alanları için gate · harici kod incelemesindeki 39 bulgu giderildi · Windows'ta güvenli spawn ve codex eklenti tespiti",
      "Otomatik yönlendirilen subagent → Agent Teams, alt görev başına karar",
      "ECC · Superpowers · GSD · gstack bir araya getirildi",
      "Apache-2.0 · Node 22+ · Çoklu platform",
      "GitHub’da yıldız verin →",
    ],
  },
  nav: {
    docs: "Dokümanlar",
    github: "GitHub",
    npm: "npm",
  },
  hero: {
    versionPill: "v4.43.0 · 100+ capability birleştirildi",
    h1: "Yapay zekâ kodlama harness’ları için paket yöneticisi",
    positioning:
      "Bir paket yöneticisinden fazlası — bir kompozisyon orkestratörü. Açık kaynak ekosistemin en iyisini tek bir çalıştırılabilir engine içinde birleştirir ve üç katmanlı BDD → SDD → TDD metodolojisiyle birbirine bağlar.",
    tagline:
      "harnessed bir orchestration brain + prompt kütüphanesidir; native subagent spawn’ı üç hızlı, saf fonksiyon CLI ile sürer — `harnessed gates` (hangi alt iş akışları tetiklenir), `harnessed prompt` (bir alt akış için spawn’a hazır prompt) ve `harnessed checkpoint` (ilerlemeyi kaydeder).",
    ctaStart: "Başla",
    ctaGitHub: "GitHub’da görüntüle",
    meta: "Apache-2.0 · Node 22+ · Çoklu platform",
  },
  whyCards: {
    heading: "Neden harnessed",
    subheading: "Her iş akışına gömülü üç ilke.",
    card1: {
      title: "Vendoring yerine kompozisyon",
      body: "Upstream’i asla fork etmeyin. Manifest içinde install ve check adımlarını tanımlayın; harnessed açık kaynak ekosistemin en iyisini (Superpowers, GSD, gstack, ECC …) çalıştırılabilir tek bir iş akışında birleştirsin — hep en güncel upstream üzerinde, zahmetsizce: güncellemeniz yeterli.",
    },
    card2: {
      title: "Yerleşik 5 aşamalı ritim",
      body: "Discuss → Plan → Task → Verify → Ship; isteğe bağlı Research ve Retro ile birlikte her loop’a yerleştirilmiş ve otomatik bir Learn döngüsüyle kapatılmış durumda. Ya da `/auto` çalıştırıp tüm hattı tek seferde sürün.",
    },
    card3: {
      title: "Dogfood öncelikli metodoloji",
      body: "Her iş akışı kendi tanımına karşı doğrulanır. harnessed’ın kendisini yayınlarken uyduğu disiplinin aynısı.",
    },
  },
  threeLayerStack: {
    heading: "Üç aşama değil, iç içe üç döngü",
    subheading:
      "harnessed’ın üç katmanlı yığını, yerleşik BDD → SDD → TDD iç içeliğinin yazılım mühendisliği uygulamasıdır. Üç loop, her biri farklı bir soruya yanıt verir. harnessed açık kaynak ekosistemi her loop’un içine yerleştirir — ve bileşenler kısmen örtüşür; bir kompozisyon orkestratörünün hakemlik etmesi gereken tam olarak budur.",
    colLayer: "Katman / Loop",
    colQuestion: "Yanıtladığı soru",
    colComposed: "Neyden birleştirildi (örtüşen)",
    layers: [
      {
        num: "①",
        name: "Behavior",
        loop: "BDD",
        question: "Ne inşa edilecek ve bittiğini nasıl anlarız.",
        composed:
          "gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria",
      },
      {
        num: "②",
        name: "Spec",
        loop: "SDD",
        question: "Nasıl yapılandırıldı.",
        composed:
          "GSD plan-phase → requirements / design / tasks · contracts (Spec Kit / ECC patterns)",
      },
      {
        num: "③",
        name: "Implementation",
        loop: "TDD",
        question: "Gerçekten çalışıyor mu.",
        composed:
          "superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion",
      },
    ],
    nested: {
      label: "İç içe mercekler",
      body: "Bu loop’lar aşama değil, iç içe merceklerdir. Cucumber’ın BDD-dış + TDD-iç çift döngüsü, GenAI çağında bir SDD spec halkasıyla genişletildi → triple-loop. harnessed bu triple-loop’un linear-cadence gerçeklemesidir; tam yönlendirilmiş graf ise evrim yoludur. Varsayılan gezinme dıştan içe doğrudur; bugün üç geri besleme kenarı yayında: Verify → Task (başarısız bir kontrol işi geri iter), gri bir alanda bir subagent’ın STATUS: NEEDS_CLARIFICATION yanıtı ve yayınlanan her döngünün çıkarımlarının bir sonraki Discuss’a beslenmesi. Daha ince taneli yapılandırılmış dönüşler — bir contract çelişkisinin Spec’e, bir gereksinim belirsizliğinin Behavior’a yönlenmesi — roadmap’te, henüz yayında değil.",
    },
    intersections: {
      label: "Bileşenler kesişir",
      body: "Örtüşme asıl meseledir — kompozisyon orkestratörünün hakemlik ettiği şey odur.",
      items: [
        {
          name: "GSD",
          body: "omurgadır; discuss, plan ve verify ile üç halkayı da baştan sona geçer.",
        },
        { name: "gstack", body: "Behavior + Review’ı kapsar." },
        {
          name: "superpowers",
          body: "Behavior (brainstorm) + Implementation (TDD) alanlarını kapsar.",
        },
      ],
    },
    crossCutting: {
      label: "Kesişen disiplinler",
      body: "İki disiplin her katmandan geçer.",
      items: [
        {
          name: "karpathy principles",
          body: "how to code — mümkün olan en küçük değişiklik, cerrahi düzenlemeler.",
        },
        { name: "mattpocock moves", body: "talep üzerine araçlar, duruma göre çağrılır." },
      ],
    },
    runtime: {
      label: "Runtime’a eşlendi",
      body: "Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship döngüyü kanıt kapılarıyla kapatır.",
    },
  },
  orchestration: {
    heading: "Paralellik, alt görev başına kararlaştırılır",
    subheading:
      "`harnessed setup` Agent Teams’i otomatik açar. Ardından bir yönlendirme kapısı her alt görev için doğru yürütme katmanını seçer — elle fan-out yok, tahmin yok.",
    tiers: [
      {
        tag: "düşürme",
        name: "Ana session",
        cond: "< 20 satır · tek sorgu",
        body: "Önemsiz işler satır içinde kalır. Spawn yok, token maliyeti yok.",
      },
      {
        tag: "varsayılan",
        name: "Subagent fan-out",
        cond: "≤ 3 paralel · iletişim yok",
        body: "Bağımsız research, verify ve review görevleri izole context’lerde açılır.",
      },
      {
        tag: "yükseltme",
        name: "Agent Teams",
        cond: "5 tetikleyici · SendMessage",
        body: "Bir contract üzerinde anlaşan, hipotez tartışan ya da task list paylaşan teammate’ler gerçek bir takıma yükselir.",
      },
    ],
    wrapper: {
      label: "dik wrapper",
      name: "ralph-loop",
      body: "Herhangi bir katmanı sarar ve onu birebir COMPLETE tamamlanma sözüne bağlı tutar.",
    },
    footnote:
      "12 yargı kapısı yapay zekâ iş birliği kurallarınızı — paralellik, TDD tetikleyicileri, üç katmanlı netleştirme — mekanikleştirir ve durağan alışkanlıkları bir yönlendirme motoruna dönüştürür.",
  },
  workflowSection: {
    heading: "Tek komut. Beş aşama. Sıfır boilerplate.",
    subheading:
      "Her aşama, yapay zekâ kodlama harness ekosisteminden kanıtlanmış araçları birleştirir.",
    stages: {
      research: { name: "research", role: "çok kaynaklı RAG" },
      discuss: { name: "discuss", role: "3 katmanlı kapılar" },
      plan: { name: "plan", role: "task_plan.md" },
      task: { name: "task", role: "netleştir·kodla·test et·teslim et" },
      verify: { name: "verify", role: "7 alt kontrol" },
      ship: { name: "ship", role: "release-preflight → tag-ready" },
      retro: { name: "retro", role: "dersler kaydedildi" },
    },
    optional: "ops",
  },
  workflowTable: {
    heading: "27 birleştirilebilir iş akışı, 100+ capability",
    subheading: "research’ten ship’e, her biri tipli bir manifest ile desteklenir.",
    colCommand: "Komut",
    colScope: "Kapsam",
    colCaps: "Capability",
    rows: [
      { cmd: "/auto", scope: "super-master", caps: "6 aşamalı hat" },
      { cmd: "/research", scope: "bağımsız", caps: "tavily·exa·ctx7" },
      { cmd: "/discuss", scope: "aşama kapısı", caps: "stratejik·faz·alt görev" },
      { cmd: "/plan", scope: "aşama kapısı", caps: "mimari·faz" },
      { cmd: "/task", scope: "alt görev başına", caps: "netleştir·kodla·test et·teslim et" },
      { cmd: "/verify", scope: "aşama kapısı", caps: "7 koşullu alt kontrol" },
      { cmd: "/ship", scope: "aşama kapısı", caps: "release-preflight·gstack-ship" },
      { cmd: "/retro", scope: "ship sonrası", caps: "gstack·kalıcılaştırma" },
      { cmd: "/tdd", scope: "disiplin", caps: "red-green-refactor" },
      { cmd: "/ralph-loop", scope: "wrapper", caps: "tamamlanma sözü" },
    ],
    githubLink: "Tüm iş akışlarını GitHub’da gör →",
  },
  quickstart: {
    heading: "60 saniyede başlayın",
    subheading: "Yapılandırma dosyası yok. Elle scaffolding yok. Sadece üç komut.",
    steps: [
      {
        num: "1",
        title: "Kur",
        cmd: "npm install -g harnessed",
        caption: "npm üzerinden en güncel kararlı sürümü çeker.",
      },
      {
        num: "2",
        title: "Ayarla",
        cmd: "harnessed setup",
        caption: "Agent Teams’i, kullanıcı yerel ayarını ve MCP keşfini otomatik açar.",
      },
      {
        num: "3",
        title: "Birleştir",
        cmd: "/auto research a new feature",
        caption: "Yapay zekâ kodlama agent’ınızın içinde çalıştırın. 6 aşamalı hat devralır.",
      },
    ],
  },
  communityStats: {
    heading: "harness ekosistemine katılın",
    npmDownloadsLabel: "Toplam npm indirmesi",
    stats: [
      { value: "100+", label: "Birleştirilen capability (ECC · Superpowers · GSD · gstack)" },
      { value: "29", label: "Yayınlanan iş akışı" },
      { value: "v4.43.0", label: "Son sürüm · Apache-2.0" },
    ],
    links: {
      discussions: "GitHub Discussions →",
      issues: "Issues →",
      releases: "Releases →",
    },
  },
  faq: {
    heading: "SSS",
    subheading: "Sık sorulan sorular, yalın yanıtlar.",
    items: [
      {
        q: "harnessed nedir?",
        a: "harnessed, yapay zekâ kodlama harness’ları için paket yöneticisi ve kompozisyon orkestratörüdür. Skills, MCP sunucuları ve diğer harness paketlerini tipli bir manifest üzerinden birleştiren iş akışlarını kurar, birleştirir ve çalıştırır — upstream kodu vendoring yapmadan.",
      },
      {
        q: "Hangi yapay zekâ kodlama agent’ında çalışır?",
        a: "harnessed bir yapay zekâ kodlama agent’ının içinde çalışır. Birincil hedef Claude Code’dur — `harnessed setup` sonrası `/auto` ve `/discuss` gibi eğik çizgi komutları kullanılabilir hale gelir (Claude Code’a yeniyseniz anthropic.com/claude/code adresine bakın). Codex ve diğer harness’lar cross-harness platform katmanıyla desteklenir.",
      },
      {
        q: "Vendoring olmadan kompozisyon nasıl çalışır?",
        a: "Her harness paketi; kurulum adımlarını, capability metaverisini ve entegrasyon noktalarını tanımlayan bir manifest ile gelir. harnessed bu manifestleri okur, uyumluluğu doğrular ve upstream araçları runtime’da birbirine diker — böylece her zaman resmi upstream’i çalıştırırsınız, bayatlamış bir fork’u değil.",
      },
      {
        q: "/auto ile tek tek aşama komutları arasındaki fark ne?",
        a: "`/auto` tek bir prompt ile 6 aşamalı hattı uçtan uca çalıştırır. Tek tek aşama komutları (`/discuss`, `/plan`, `/task`, `/verify` vb.) ritmin yalnızca bir kısmına ihtiyacınız olduğunda ince kontrol verir.",
      },
      {
        q: "Subagent’ları otomatik olarak spawn ediyor mu?",
        a: "`harnessed setup` Agent Teams’i otomatik açar ve bir paralellik kapısı alt görev başına katmana karar verir: önemsiz işler ana session’da kalır, bağımsız görevler subagent olarak açılır (≤ 3, izole context) ve iletişim gerektiren işler — contract hizalama, hipotez tartışması, paylaşılan task list’ler — gerçek bir Agent Team’e yükselir. ralph-loop herhangi bir katmanı sararak onu birebir COMPLETE’e bağlı tutabilir.",
      },
      {
        q: "Kendi harness paketimi yazabilir miyim?",
        a: "Evet. Manifest schema’sı depoda `schemas/manifest.v1.schema.json` yolunda yayımlanmıştır (YAML language server’ınızı oraya yöneltin). Kurulabilir herhangi bir upstream’i — npm paketi, git deposu, özel skill — işaret eden bir manifest yazın; harnessed onu birinci sınıf birleştirilebilir bir birim olarak ele alacaktır.",
      },
    ],
  },
  footer: {
    tagline: "Yapay zekâ kodlama harness paket yöneticisi + kompozisyon orkestratörü.",
    resources: "Kaynaklar",
    community: "Topluluk",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      docs: "Dokümanlar",
      discussions: "Discussions",
      issues: "Issues",
      twitter: "Twitter",
    },
    license: "Apache-2.0 Lisansı © 2026 easyinplay",
    madewith: "Disiplinle yapıldı",
  },
};

export default tr;
