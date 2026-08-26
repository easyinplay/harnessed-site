import { defineCollection } from 'astro:content'
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders'
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema'

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // Starlight keys its bundled UI strings by BCP-47 tag and ships zh-CN / zh-TW,
  // not the script tags this site uses (zh-Hans / zh-Hant), so those two locales
  // would fall back to English chrome. src/content/i18n/*.json supplies them.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
}
