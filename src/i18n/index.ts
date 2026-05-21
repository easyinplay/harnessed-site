import en from './en'
import zh from './zh-Hans'

export const locales = ['en', 'zh-Hans'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

const dictionaries = { en, 'zh-Hans': zh } as const

export function t(locale: Locale) {
  return dictionaries[locale]
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0]
  if (seg === 'zh-Hans') return 'zh-Hans'
  return 'en'
}

export function pathFor(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return `/${locale}${path}`
}
