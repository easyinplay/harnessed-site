import en from './en'
import zhHans from './zh-hans'
import zhHant from './zh-hant'
import ja from './ja'
import ko from './ko'
import ptBr from './pt-br'
import tr from './tr'
import ru from './ru'
import vi from './vi'
import th from './th'

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

const dictionaries = {
  en,
  'zh-hans': zhHans,
  'zh-hant': zhHant,
  ja,
  ko,
  'pt-br': ptBr,
  tr,
  ru,
  vi,
  th,
} as const

/**
 * Per-locale metadata. `label` is the endonym — users scanning the switcher
 * recognise their own language's name, not an English exonym. `htmlLang` feeds
 * <html lang> and hreflang. `match` lists the navigator.language prefixes that
 * should auto-redirect here.
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

/**
 * Per-locale <title> / <meta description>. Kept out of the Dict so adding a
 * locale means one entry here rather than a new key across ten dictionaries.
 */
export const seo: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'harnessed — AI coding harness package manager',
    description:
      'Compose Skills, MCP, and Workflows in one manifest. Install proven harness packs in a single command.',
  },
  'zh-hans': {
    title: 'harnessed — AI 编程脚手架包管理器',
    description: '在一份清单中编排 Skills、MCP、Workflows。一条命令安装经过验证的脚手架包。',
  },
  'zh-hant': {
    title: 'harnessed — AI 編程 harness 套件管理器',
    description: '在一份清單中編排 Skills、MCP、Workflows。一條命令安裝經過驗證的 harness 套件。',
  },
  ja: {
    title: 'harnessed — AI コーディング harness のパッケージマネージャー',
    description:
      'Skills・MCP・Workflows を 1 つのマニフェストで合成。実証済みの harness パックをコマンド 1 つで導入。',
  },
  ko: {
    title: 'harnessed — AI 코딩 harness 패키지 매니저',
    description:
      'Skills, MCP, Workflows를 하나의 매니페스트로 조합하세요. 검증된 harness 팩을 명령 한 줄로 설치합니다.',
  },
  'pt-br': {
    title: 'harnessed — gerenciador de pacotes para harnesses de programação com IA',
    description:
      'Componha Skills, MCP e Workflows em um único manifesto. Instale harness packs comprovados com um só comando.',
  },
  tr: {
    title: 'harnessed — yapay zekâ kodlama harness paket yöneticisi',
    description:
      'Skills, MCP ve Workflow’ları tek bir manifestte birleştirin. Kanıtlanmış harness paketlerini tek komutla kurun.',
  },
  ru: {
    title: 'harnessed — пакетный менеджер для AI-харнессов разработки',
    description:
      'Собирайте Skills, MCP и Workflows в одном манифесте. Устанавливайте проверенные harness-паки одной командой.',
  },
  vi: {
    title: 'harnessed — trình quản lý gói cho harness lập trình AI',
    description:
      'Kết hợp Skills, MCP và Workflows trong một manifest. Cài các harness pack đã kiểm chứng chỉ bằng một lệnh.',
  },
  th: {
    title: 'harnessed — ตัวจัดการแพ็กเกจสำหรับ harness เขียนโค้ดด้วย AI',
    description:
      'ประกอบ Skills, MCP และ Workflows ไว้ใน manifest เดียว ติดตั้ง harness pack ที่พิสูจน์แล้วด้วยคำสั่งเดียว',
  },
}

export function t(locale: Locale) {
  return dictionaries[locale]
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
 * Docs URL for a locale. Starlight only ships en + zh-Hans docs, so every other
 * locale points at the English docs instead of 404ing on a path that has no
 * content behind it.
 */
export function docsFor(locale: Locale): string {
  return locale === 'zh-hans' ? '/zh-hans/docs/' : '/docs/'
}

/**
 * navigator.language prefix → locale, longest match first so `zh-tw` wins over
 * `zh`. Serialised into the inline redirect script; kept here so the mapping
 * has exactly one home.
 */
export const localeMatchTable: Array<[string, Locale]> = (
  Object.entries(localeMeta) as Array<[Locale, (typeof localeMeta)[Locale]]>
)
  .flatMap(([locale, meta]) => meta.match.map((m) => [m, locale] as [string, Locale]))
  .sort((a, b) => b[0].length - a[0].length)
