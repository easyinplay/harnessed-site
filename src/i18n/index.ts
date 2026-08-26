import en from "./en";
import zhHans from "./zh-hans";
import zhHant from "./zh-hant";
import ja from "./ja";
import ko from "./ko";
import ptBr from "./pt-br";
import tr from "./tr";
import ru from "./ru";
import vi from "./vi";
import th from "./th";
import type { Locale } from "./locales";

export {
  locales,
  defaultLocale,
  localeMeta,
  localeMatchTable,
  getLocaleFromUrl,
  pathFor,
  homeFor,
  docsFor,
} from "./locales";
export type { Locale } from "./locales";

const dictionaries = {
  en,
  "zh-hans": zhHans,
  "zh-hant": zhHant,
  ja,
  ko,
  "pt-br": ptBr,
  tr,
  ru,
  vi,
  th,
} as const;

/**
 * Per-locale <title> / <meta description>. Kept out of the Dict so adding a
 * locale means one entry here rather than a new key across ten dictionaries.
 */
export const seo: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "harnessed — AI coding harness package manager",
    description:
      "Compose Skills, MCP, and Workflows in one manifest. Install proven harness packs in a single command.",
  },
  "zh-hans": {
    title: "harnessed — AI 编程脚手架包管理器",
    description: "在一份清单中编排 Skills、MCP、Workflows。一条命令安装经过验证的脚手架包。",
  },
  "zh-hant": {
    title: "harnessed — AI 編程 harness 套件管理器",
    description: "在一份清單中編排 Skills、MCP、Workflows。一條命令安裝經過驗證的 harness 套件。",
  },
  ja: {
    title: "harnessed — AI コーディング harness のパッケージマネージャー",
    description:
      "Skills・MCP・Workflows を 1 つのマニフェストで合成。実証済みの harness パックをコマンド 1 つで導入。",
  },
  ko: {
    title: "harnessed — AI 코딩 harness 패키지 매니저",
    description:
      "Skills, MCP, Workflows를 하나의 매니페스트로 조합하세요. 검증된 harness 팩을 명령 한 줄로 설치합니다.",
  },
  "pt-br": {
    title: "harnessed — gerenciador de pacotes para harnesses de programação com IA",
    description:
      "Componha Skills, MCP e Workflows em um único manifesto. Instale harness packs comprovados com um só comando.",
  },
  tr: {
    title: "harnessed — yapay zekâ kodlama harness paket yöneticisi",
    description:
      "Skills, MCP ve Workflow’ları tek bir manifestte birleştirin. Kanıtlanmış harness paketlerini tek komutla kurun.",
  },
  ru: {
    title: "harnessed — пакетный менеджер для AI-харнессов разработки",
    description:
      "Собирайте Skills, MCP и Workflows в одном манифесте. Устанавливайте проверенные harness-паки одной командой.",
  },
  vi: {
    title: "harnessed — trình quản lý gói cho harness lập trình AI",
    description:
      "Kết hợp Skills, MCP và Workflows trong một manifest. Cài các harness pack đã kiểm chứng chỉ bằng một lệnh.",
  },
  th: {
    title: "harnessed — ตัวจัดการแพ็กเกจสำหรับ harness เขียนโค้ดด้วย AI",
    description:
      "ประกอบ Skills, MCP และ Workflows ไว้ใน manifest เดียว ติดตั้ง harness pack ที่พิสูจน์แล้วด้วยคำสั่งเดียว",
  },
};

export function t(locale: Locale) {
  return dictionaries[locale];
}
