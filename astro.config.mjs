import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import mermaid from 'astro-mermaid'

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
          // Client-side locale auto-detect for docs pages (a static site can't read
          // Accept-Language server-side). Zh-preferring browsers land on /zh-hans/*.
          // Respects the manual choice (harnessed_lang cookie set by the Nav switcher)
          // and never loops (already-zh paths return early). Runs before paint.
          tag: 'script',
          content:
            "(function(){try{if(document.cookie.indexOf('harnessed_lang=')>-1)return;var p=location.pathname;if(p.indexOf('/zh-hans')===0)return;if((navigator.language||'').toLowerCase().indexOf('zh')===0){location.replace('/zh-hans'+p+location.search+location.hash)}}catch(e){}})();",
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
      locales: {
        root: { label: 'English', lang: 'en' },
        'zh-hans': { label: '简体中文', lang: 'zh-Hans' },
      },
      sidebar: [
        {
          label: 'Getting started',
          translations: { 'zh-Hans': '入门' },
          items: [
            { label: 'Installation', slug: 'docs/getting-started/installation', translations: { 'zh-Hans': '安装' } },
            { label: 'Quickstart', slug: 'docs/getting-started/quickstart', translations: { 'zh-Hans': '快速上手' } },
            { label: 'Your first workflow', slug: 'docs/getting-started/first-workflow', translations: { 'zh-Hans': '第一个工作流' } },
          ],
        },
        {
          label: 'Concepts',
          translations: { 'zh-Hans': '核心概念' },
          items: [
            { label: 'Composition over vendoring', slug: 'docs/concepts/composition', translations: { 'zh-Hans': '装配主义' } },
            { label: 'The three-layer stack', slug: 'docs/concepts/three-layer-stack', translations: { 'zh-Hans': '三层栈' } },
            { label: 'The 5-stage cadence', slug: 'docs/concepts/five-stage-cadence', translations: { 'zh-Hans': '五阶段节奏' } },
            { label: 'Dogfood-first methodology', slug: 'docs/concepts/dogfood-first', translations: { 'zh-Hans': 'Dogfood 优先方法论' } },
          ],
        },
        {
          label: 'Reference',
          translations: { 'zh-Hans': '参考' },
          items: [
            { label: 'Workflow reference', slug: 'docs/reference/workflows', translations: { 'zh-Hans': '工作流参考' } },
            { label: 'Manifest schema', slug: 'docs/reference/manifest-schema', translations: { 'zh-Hans': 'Manifest Schema' } },
            { label: 'CLI commands', slug: 'docs/reference/cli', translations: { 'zh-Hans': 'CLI 命令' } },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
})
