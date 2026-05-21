import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://harnessed.cc',
  integrations: [tailwind({ applyBaseStyles: false })],
})
