import { readFileSync } from "node:fs";
import { describe, expect, it } from "vite-plus/test";
import { onboarding } from "../i18n/onboarding";
import type { Locale } from "../i18n/locales";

const source = readFileSync(new URL("./Installation.astro", import.meta.url), "utf8");

describe("focused installation title and tab contracts", () => {
  it.each<[Locale, string]>([
    ["en", "Install harnessed"],
    ["zh-hans", "安装 harnessed"],
    ["zh-hant", "安裝 harnessed"],
    ["ja", "harnessed をインストール"],
    ["ko", "harnessed 설치"],
    ["pt-br", "Instalar harnessed"],
    ["tr", "harnessed kurulumu"],
    ["ru", "Установка harnessed"],
    ["vi", "Cài đặt harnessed"],
    ["th", "ติดตั้ง harnessed"],
  ])("names the product in the concise %s installation heading", (locale, heading) => {
    expect(onboarding[locale].install).toBe(heading);
  });

  it("uses literal localized parentheses directly after the platform instead of a second tier", () => {
    expect(source).toContain("const cjk = ['zh-hans', 'zh-hant', 'ja'].includes(lang)");
    expect(source).toContain("const open = cjk ? '（' : ' ('");
    expect(source).toContain("const close = cjk ? '）' : ')'");
    expect(source).toMatch(/\{labels\[method\]\}<span class="tab-note">\{open\}/);
    expect(source).toMatch(/copy\.compatibility\}\{close\}<\/span>/);
    expect(source).not.toMatch(/\.tab-note\s*\{[^}]*(display:\s*block|margin-top:)/);
    expect(source).toMatch(/\[role='tab'\]\s*\{[^}]*white-space:\s*nowrap/);
  });

  it("retains tab/panel relationships and keyboard focus hooks", () => {
    expect(source).toContain('role="tablist"');
    expect(source).toContain('role="tab"');
    expect(source).toContain('role="tabpanel"');
    expect(source).toContain("aria-controls={`install-panel-${method}`}");
    expect(source).toContain("aria-labelledby={`install-tab-${method}`}");
    expect(source).toContain("tabindex={index === 0 ? 0 : -1}");
    expect(source).toContain("data-install-tab={method}");
    expect(source).toContain("cmd={installCommand(method)}");
  });

  it("wraps whole intrinsic-width tabs without locale-specific column breakpoints", () => {
    expect(source).toMatch(/\.install-tabs\s*\{[^}]*display:\s*flex;[^}]*flex-wrap:\s*wrap/);
    expect(source).toMatch(/\[role='tab'\]\s*\{[^}]*flex:\s*1 0 auto/);
    expect(source).not.toContain("grid-template-columns");
    expect(source).not.toMatch(/\[role='tab'\]\s*\{[^}]*overflow-wrap:/);
  });
});
