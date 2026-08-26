import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import mermaid from 'astro-mermaid'
import { locales, localeMeta, localeMatchTable } from './src/i18n/locales'

// Starlight keys locales by directory name; `root` is the untranslated English
// tree. Everything else mirrors the landing-page locale registry so the docs
// and the marketing site never drift apart.
const starlightLocales = Object.fromEntries(
  locales.map((locale) =>
    locale === 'en'
      ? ['root', { label: localeMeta.en.label, lang: localeMeta.en.htmlLang }]
      : [locale, { label: localeMeta[locale].label, lang: localeMeta[locale].htmlLang }],
  ),
)

/** Sidebar label translations, keyed by Starlight `lang` tag. */
const nav = {
  gettingStarted: {
    'zh-Hans': '入门',
    'zh-Hant': '入門',
    ja: 'はじめに',
    ko: '시작하기',
    'pt-BR': 'Primeiros passos',
    tr: 'Başlangıç',
    ru: 'Начало работы',
    vi: 'Bắt đầu',
    th: 'เริ่มต้นใช้งาน',
  },
  installation: {
    'zh-Hans': '安装',
    'zh-Hant': '安裝',
    ja: 'インストール',
    ko: '설치',
    'pt-BR': 'Instalação',
    tr: 'Kurulum',
    ru: 'Установка',
    vi: 'Cài đặt',
    th: 'การติดตั้ง',
  },
  quickstart: {
    'zh-Hans': '快速上手',
    'zh-Hant': '快速上手',
    ja: 'クイックスタート',
    ko: '빠른 시작',
    'pt-BR': 'Início rápido',
    tr: 'Hızlı başlangıç',
    ru: 'Быстрый старт',
    vi: 'Khởi động nhanh',
    th: 'เริ่มใช้อย่างรวดเร็ว',
  },
  firstWorkflow: {
    'zh-Hans': '第一个工作流',
    'zh-Hant': '第一個工作流',
    ja: '最初のワークフロー',
    ko: '첫 워크플로',
    'pt-BR': 'Seu primeiro workflow',
    tr: 'İlk iş akışınız',
    ru: 'Первый workflow',
    vi: 'Workflow đầu tiên',
    th: 'workflow แรกของคุณ',
  },
  concepts: {
    'zh-Hans': '核心概念',
    'zh-Hant': '核心概念',
    ja: 'コンセプト',
    ko: '핵심 개념',
    'pt-BR': 'Conceitos',
    tr: 'Kavramlar',
    ru: 'Концепции',
    vi: 'Khái niệm',
    th: 'แนวคิดหลัก',
  },
  composition: {
    'zh-Hans': '装配主义',
    'zh-Hant': '裝配主義',
    ja: 'vendoring より合成',
    ko: 'vendoring 대신 조합',
    'pt-BR': 'Composição vs. vendoring',
    tr: 'Vendoring yerine kompozisyon',
    ru: 'Композиция вместо vendoring',
    vi: 'Kết hợp thay vì vendoring',
    th: 'ประกอบแทน vendoring',
  },
  threeLayer: {
    'zh-Hans': '三层栈',
    'zh-Hant': '三層堆疊',
    ja: '三層スタック',
    ko: '3계층 스택',
    'pt-BR': 'A pilha de três camadas',
    tr: 'Üç katmanlı yığın',
    ru: 'Трёхслойный стек',
    vi: 'Ngăn xếp ba tầng',
    th: 'สแตกสามชั้น',
  },
  cadence: {
    'zh-Hans': '五阶段节奏',
    'zh-Hant': '五階段節奏',
    ja: '5 段階のリズム',
    ko: '5단계 리듬',
    'pt-BR': 'A cadência de 5 estágios',
    tr: '5 aşamalı ritim',
    ru: 'Ритм из 5 стадий',
    vi: 'Nhịp 5 giai đoạn',
    th: 'จังหวะ 5 ขั้น',
  },
  dogfood: {
    'zh-Hans': 'Dogfood 优先方法论',
    'zh-Hant': 'Dogfood 優先方法論',
    ja: 'Dogfood 優先のメソドロジー',
    ko: 'Dogfood 우선 방법론',
    'pt-BR': 'Metodologia dogfood-first',
    tr: 'Dogfood öncelikli metodoloji',
    ru: 'Методология dogfood-first',
    vi: 'Phương pháp dogfood-first',
    th: 'ระเบียบวิธี dogfood-first',
  },
  reference: {
    'zh-Hans': '参考',
    'zh-Hant': '參考',
    ja: 'リファレンス',
    ko: '레퍼런스',
    'pt-BR': 'Referência',
    tr: 'Başvuru',
    ru: 'Справочник',
    vi: 'Tham khảo',
    th: 'อ้างอิง',
  },
  workflows: {
    'zh-Hans': '工作流参考',
    'zh-Hant': '工作流參考',
    ja: 'ワークフロー一覧',
    ko: '워크플로 레퍼런스',
    'pt-BR': 'Referência de workflows',
    tr: 'İş akışı başvurusu',
    ru: 'Справочник workflow',
    vi: 'Tham khảo workflow',
    th: 'อ้างอิง workflow',
  },
  manifest: {
    'zh-Hans': 'Manifest Schema',
    'zh-Hant': 'Manifest Schema',
    ja: 'Manifest スキーマ',
    ko: 'Manifest 스키마',
    'pt-BR': 'Schema do manifesto',
    tr: 'Manifest şeması',
    ru: 'Схема манифеста',
    vi: 'Schema của manifest',
    th: 'Schema ของ manifest',
  },
  cli: {
    'zh-Hans': 'CLI 命令',
    'zh-Hant': 'CLI 命令',
    ja: 'CLI コマンド',
    ko: 'CLI 명령',
    'pt-BR': 'Comandos da CLI',
    tr: 'CLI komutları',
    ru: 'Команды CLI',
    vi: 'Lệnh CLI',
    th: 'คำสั่ง CLI',
  },
}

// Serialised once so the docs redirect script below stays in sync with the
// landing-page one without a second copy of the table.
const matchTableJson = JSON.stringify(localeMatchTable)
const localeSegments = JSON.stringify(locales.filter((l) => l !== 'en'))

export default defineConfig({
  site: 'https://harnessed.cc',
  integrations: [
    // astro-mermaid must precede starlight so it transforms ```mermaid fences
    // into client-rendered diagrams before expressive-code claims them.
    mermaid({ theme: 'default', autoTheme: true }),
    starlight({
      title: 'harnessed docs',
      logo: { src: './public/favicon.svg' },
      social: {
        github: 'https://github.com/easyinplay/harnessed',
      },
      components: {
        SiteTitle: './src/components/starlight/SiteTitle.astro',
        // Sun/moon single-button toggle (qoder style) instead of the default select.
        ThemeSelect: './src/components/starlight/ThemeSelect.astro',
      },
      customCss: ['./src/styles/starlight-theme.css'],
      head: [
        {
          // Client-side locale auto-detect for docs pages (a static site can't
          // read Accept-Language server-side). Respects the manual choice
          // (harnessed_lang cookie set by the Nav switcher) and never loops
          // (already-localised paths return early). Runs before paint.
          tag: 'script',
          content: `(function(){try{if(document.cookie.indexOf('harnessed_lang=')>-1)return;var p=location.pathname;var segs=${localeSegments};for(var i=0;i<segs.length;i++){if(p.indexOf('/'+segs[i]+'/')===0||p==='/'+segs[i])return}var l=(navigator.language||'').toLowerCase();if(!l)return;var t=${matchTableJson};for(var j=0;j<t.length;j++){if(l===t[j][0]||l.indexOf(t[j][0]+'-')===0){location.replace('/'+t[j][1]+p+location.search+location.hash);return}}}catch(e){}})();`,
        },
        {
          // Default to dark (qoder-docs style): first visit lands dark instead of
          // following the system, but the ThemeSelect toggle still lets users pick
          // light/auto — their stored choice is respected on return visits.
          // Writing localStorage covers Starlight's ThemeProvider running after us;
          // setting dataset.theme covers it having already run. Either order → dark.
          tag: 'script',
          content:
            "try{if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','dark');document.documentElement.dataset.theme='dark'}}catch(e){}",
        },
        {
          tag: 'script',
          attrs: {
            defer: true,
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': '{"token": "6ad50287ac284d61a6120de2b115be42"}',
          },
        },
      ],
      defaultLocale: 'root',
      locales: starlightLocales,
      sidebar: [
        {
          label: 'Getting started',
          translations: nav.gettingStarted,
          items: [
            { label: 'Installation', slug: 'docs/getting-started/installation', translations: nav.installation },
            { label: 'Quickstart', slug: 'docs/getting-started/quickstart', translations: nav.quickstart },
            { label: 'Your first workflow', slug: 'docs/getting-started/first-workflow', translations: nav.firstWorkflow },
          ],
        },
        {
          label: 'Concepts',
          translations: nav.concepts,
          items: [
            { label: 'Composition over vendoring', slug: 'docs/concepts/composition', translations: nav.composition },
            { label: 'The three-layer stack', slug: 'docs/concepts/three-layer-stack', translations: nav.threeLayer },
            { label: 'The 5-stage cadence', slug: 'docs/concepts/five-stage-cadence', translations: nav.cadence },
            { label: 'Dogfood-first methodology', slug: 'docs/concepts/dogfood-first', translations: nav.dogfood },
          ],
        },
        {
          label: 'Reference',
          translations: nav.reference,
          items: [
            { label: 'Workflow reference', slug: 'docs/reference/workflows', translations: nav.workflows },
            { label: 'Manifest schema', slug: 'docs/reference/manifest-schema', translations: nav.manifest },
            { label: 'CLI commands', slug: 'docs/reference/cli', translations: nav.cli },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
})
