/**
 * Locale registry — dictionary-free on purpose so `astro.config.mjs` can import
 * it without pulling in every translation file. `src/i18n/index.ts` re-exports
 * everything here, so app code keeps importing from `../i18n`.
 */

export const locales = [
  'en',
  'zh-hans',
  'zh-hant',
  'ja',
  'ko',
  'pt-br',
  'tr',
  'ru',
  'vi',
  'th',
] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

/**
 * Per-locale metadata. `label` is the endonym — users scanning the switcher
 * recognise their own language's name, not an English exonym. `htmlLang` feeds
 * <html lang>, hreflang, and Starlight's locale config. `match` lists the
 * navigator.language prefixes that should auto-redirect here.
 */
export const localeMeta: Record<
  Locale,
  { label: string; short: string; htmlLang: string; match: string[] }
> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', match: [] },
  'zh-hans': {
    label: '简体中文',
    short: '简',
    htmlLang: 'zh-Hans',
    match: ['zh-cn', 'zh-sg', 'zh-hans', 'zh'],
  },
  'zh-hant': {
    label: '繁體中文',
    short: '繁',
    htmlLang: 'zh-Hant',
    match: ['zh-tw', 'zh-hk', 'zh-mo', 'zh-hant'],
  },
  ja: { label: '日本語', short: 'JA', htmlLang: 'ja', match: ['ja'] },
  ko: { label: '한국어', short: 'KO', htmlLang: 'ko', match: ['ko'] },
  'pt-br': {
    label: 'Português (Brasil)',
    short: 'PT',
    htmlLang: 'pt-BR',
    match: ['pt-br', 'pt'],
  },
  tr: { label: 'Türkçe', short: 'TR', htmlLang: 'tr', match: ['tr'] },
  ru: { label: 'Русский', short: 'RU', htmlLang: 'ru', match: ['ru'] },
  vi: { label: 'Tiếng Việt', short: 'VI', htmlLang: 'vi', match: ['vi'] },
  th: { label: 'ไทย', short: 'TH', htmlLang: 'th', match: ['th'] },
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0]
  return (locales as readonly string[]).includes(seg as Locale)
    ? (seg as Locale)
    : defaultLocale
}

export function pathFor(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return `/${locale}${path}`
}

/** Home URL for a locale, always trailing-slashed. */
export function homeFor(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`
}

/**
 * Docs URL for a locale. Starlight builds a page for every configured locale,
 * falling back to the English source where a translation is still missing.
 */
export function docsFor(locale: Locale): string {
  return locale === defaultLocale ? '/docs/' : `/${locale}/docs/`
}

/**
 * navigator.language prefix → locale, longest match first so `zh-tw` wins over
 * `zh`. Serialised into the inline redirect scripts on both the landing pages
 * and the docs, so the mapping has exactly one home.
 */
export const localeMatchTable: Array<[string, Locale]> = (
  Object.entries(localeMeta) as Array<[Locale, (typeof localeMeta)[Locale]]>
)
  .flatMap(([locale, meta]) => meta.match.map((m) => [m, locale] as [string, Locale]))
  .sort((a, b) => b[0].length - a[0].length)
