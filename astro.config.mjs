import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://harnessed.cc',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
})
