import { readFileSync } from "node:fs";
import { describe, expect, it } from "vite-plus/test";

const source = (name: string) => readFileSync(new URL(`./${name}.astro`, import.meta.url), "utf8");
const mobile = (name: string) =>
  source(name).split("@media (max-width: 480px)")[1]?.split("@media")[0] ?? "";

describe("mobile Hero source contracts (not rendered dimensions)", () => {
  it("uses semantic hooks and fixed mobile typography without changing desktop utilities", () => {
    const hero = source("Hero");
    expect(hero).toContain('class="hero relative min-h-[52vh]');
    expect(hero).toContain('class="hero-heading mt-5 text-[38px] leading-[48px]');
    expect(hero).toContain('class="hero-positioning mt-3');
    expect(hero).toContain('class="hero-tagline mt-3');
    expect(mobile("Hero")).toMatch(
      /\.hero\s*\{[^}]*padding-top:\s*24px;[^}]*padding-bottom:\s*16px/,
    );
    expect(mobile("Hero")).toMatch(
      /\.hero-heading\s*\{[^}]*font-size:\s*32px;[^}]*line-height:\s*40px;[^}]*margin-top:\s*16px/,
    );
    expect(mobile("Hero")).toMatch(
      /\.hero-positioning\s*\{[^}]*font-size:\s*14px;[^}]*line-height:\s*20px/,
    );
    expect(mobile("Hero")).toMatch(/\.hero-tagline\s*\{[^}]*display:\s*none/);
    expect(hero).not.toMatch(/nth-of-type|\dvw/);
    expect(hero).toContain("{dict.hero.tagline}");
  });

  it("keeps readable mobile tabs and removes the panel height floor", () => {
    const css = mobile("Installation");
    expect(css).toMatch(/\[role='tab'\]\s*\{[^}]*font-size:\s*12px;[^}]*padding:\s*8px 4px/);
    expect(css).toMatch(/\.tab-note\s*\{[^}]*font-size:\s*10px/);
    expect(css).toMatch(/\.method-note\s*\{[^}]*font-size:\s*12px;[^}]*line-height:\s*1\.45/);
    expect(css).toMatch(/\[role='tabpanel'\]\s*\{[^}]*min-height:\s*0/);
  });

  it("keeps brand, installation and positioning copy without the removed CTA or meta", () => {
    const hero = source("Hero");
    const short =
      hero.split("@media (max-width: 480px) and (max-height: 740px)")[1]?.split("@media")[0] ?? "";
    expect(short).toMatch(/\.hero-positioning\s*\{[^}]*display:\s*none/);
    expect(short).not.toMatch(/\.hero-heading\s*\{|\.hero-installation\s*\{/);
    expect(hero).toContain("{dict.hero.positioning}");
    expect(hero).not.toMatch(/hero-actions|hero-meta|dict\.hero\.(meta|ctaStart|ctaGitHub)/);
    expect(hero).toContain("data-release-link");
    expect(hero).toContain("data-release-version");
  });

  it("keeps the next module discoverable on 640px-high phones with fixed type and spacing", () => {
    const compact =
      source("Hero").split("@media (max-width: 480px) and (max-height: 680px)")[1] ?? "";
    expect(compact).toMatch(
      /\.hero-heading\s*\{[^}]*font-size:\s*28px;[^}]*line-height:\s*34px;[^}]*margin-top:\s*8px/,
    );
    expect(compact).toMatch(/\.hero-installation\s*\{[^}]*margin-top:\s*8px/);
    expect(compact).toMatch(/\.hero\s*\{[^}]*padding-top:\s*12px;[^}]*padding-bottom:\s*8px/);
    expect(compact).not.toContain("hero-actions");
  });
});
