import { readFileSync } from "node:fs";
import { describe, expect, it } from "vite-plus/test";
import {
  commands,
  defaultInstallMethod,
  installCommand,
  runtimeCommand,
  tabIndexForKey,
} from "./onboarding";
import { locales } from "../i18n/locales";
import { onboarding } from "../i18n/onboarding";

describe("onboarding choices", () => {
  it("copies a complete Bun install/setup chain using default host detection", () => {
    expect(installCommand("bun")).toBe("bun install -g harnessed && bun run --bun harnessed setup");
  });
  it("copies a complete npm install/setup chain using default host detection", () => {
    expect(installCommand("npm")).toBe("npm install -g harnessed && harnessed setup");
  });
  it.each(["unix", "windows"] as const)(
    "does not append a second setup to the %s installer",
    (method) => {
      expect(installCommand(method)).toBe(commands.install[method]);
      expect(installCommand(method)).not.toMatch(/&&|setup/);
    },
  );
  it("does not force a platform in any default installation command", () => {
    for (const method of ["unix", "windows", "bun", "npm"] as const)
      expect(installCommand(method)).not.toContain("--platform");
  });
  it("keeps Bun selected for status and resume instead of executing the Node shim", () => {
    expect(runtimeCommand("bun", commands.status)).toBe("bun run --bun harnessed");
    expect(runtimeCommand("bun", commands.resume)).toBe("bun run --bun harnessed resume");
    expect(runtimeCommand("windows", commands.resume)).toBe("harnessed resume");
  });
  it.each([
    ["Win32", "windows"],
    ["Windows", "windows"],
    ["MacIntel", "unix"],
    ["Linux x86_64", "unix"],
    ["", "unix"],
  ])("defaults %s to %s", (platform, expected) => {
    expect(defaultInstallMethod(platform)).toBe(expected);
  });
  it("uses host-specific workflow prompts without forcing setup flags", () => {
    expect(commands.workflow.codex).toBe("$auto");
    expect(commands.workflow.claude).toBe("/auto");
  });
  it.each([
    ["ArrowRight", 3, 0],
    ["ArrowLeft", 0, 3],
    ["Home", 2, 0],
    ["End", 0, 3],
    ["ArrowRight", 1, 2],
    ["Tab", 1, null],
    ["Enter", 1, null],
  ])("maps %s from %i to %s without trapping Tab", (key, current, expected) => {
    expect(tabIndexForKey(key, current, 4)).toBe(expected);
  });
  it("provides complete nonempty localized onboarding for every registered locale", () => {
    for (const locale of locales) {
      const copy = onboarding[locale];
      expect(Object.keys(copy).sort()).toEqual(Object.keys(onboarding.en).sort());
      for (const text of Object.values(copy)) expect(text.trim().length).toBeGreaterThan(0);
      if (locale !== "en") {
        expect(copy.heading).not.toBe(onboarding.en.heading);
        expect(copy.readiness).not.toBe(onboarding.en.readiness);
        expect(copy.copyFailed).not.toBe(onboarding.en.copyFailed);
      }
    }
  });
  it.each(locales)("keeps %s homepage Bun guidance focused on the 5.x runtime", (locale) => {
    const copy = onboarding[locale].bun;
    expect(copy).not.toContain("--package-manager");
    expect(copy).not.toContain("bun add -g harnessed@latest");
    expect(copy).not.toMatch(/4\.x|Node\.js 22\+/);
    expect(copy).toContain("--bun");
    expect(copy).toContain("harnessed");
    expect(copy).toContain("hooks");
    expect(copy).toContain("Node.js");
  });
  it.each([
    ["en", "need no separate Node.js", "upstream"],
    ["zh-hans", "无需另装 Node.js", "上游"],
    ["zh-hant", "無需另裝 Node.js", "上游"],
    ["ja", "Node.js を別途インストールする必要はありません", "上流"],
    ["ko", "Node.js를 별도로 설치할 필요가 없습니다", "업스트림"],
    ["pt-br", "não precisam de Node.js separado", "upstream"],
    ["tr", "ayrıca Node.js gerektirmez", "upstream"],
    ["ru", "не требуют отдельной установки Node.js", "upstream"],
    ["vi", "không cần cài riêng Node.js", "upstream"],
    ["th", "ไม่ต้องติดตั้ง Node.js แยก", "upstream"],
  ] as const)(
    "separates %s first-party runtime support from upstream prerequisites",
    (locale, owned, upstream) => {
      const copy = onboarding[locale].bun;
      expect(copy).toContain(owned);
      expect(copy.toLowerCase()).toContain(upstream);
    },
  );
  it("keeps the ten Bun translations distinct", () => {
    expect(new Set(locales.map((locale) => onboarding[locale].bun)).size).toBe(locales.length);
  });
});

describe("5.x Bun documentation", () => {
  const paths = [
    "docs/getting-started/installation.md",
    "docs/getting-started/quickstart.md",
    "zh-hans/docs/getting-started/installation.md",
    "zh-hans/docs/getting-started/quickstart.md",
  ];
  it.each(paths)("documents explicit Bun runtime and updater selection in %s", (path) => {
    const doc = readFileSync(new URL(`../content/docs/${path}`, import.meta.url), "utf8");
    const zh = path.startsWith("zh-hans/");
    expect(doc).toContain("bun run --bun harnessed update --package-manager bun");
    expect(doc).toContain(zh ? "更新默认仍使用 npm" : "npm remains the default updater");
    expect(doc).toContain(
      zh ? "运行时不代表安装管理器" : "Runtime selection does not identify the install manager",
    );
    expect(doc).toContain("shebang");
    expect(doc).toContain("5.x");
    expect(doc).toContain("first-party hooks");
    expect(doc).toContain(zh ? "无需另装 Node.js" : "need no separate Node.js");
    expect(doc).toContain("bun install -g harnessed && bun run --bun harnessed setup");
    expect(doc).not.toMatch(/4\.x[^.!?。！？]*hooks[^.!?。！？]*Node\.js 22\+/);
    expect(doc).not.toMatch(/```(?:bash|shell)\r?\n(?:bun run --bun )?harnessed update\r?\n/);
  });
  it.each(paths)("reserves the native update command for the legacy 4.x fallback in %s", (path) => {
    const doc = readFileSync(new URL(`../content/docs/${path}`, import.meta.url), "utf8");
    const heading = path.startsWith("zh-hans/")
      ? "### 旧版 4.x 升级备用方式"
      : "### Legacy 4.x upgrade fallback";
    const [current, legacy] = doc.split(heading);
    expect(current).toContain("bun run --bun harnessed update --package-manager bun");
    expect(current).not.toContain("bun add -g harnessed@latest");
    expect(legacy).toBeDefined();
    const fallback = legacy?.split(/\r?\n## /)[0];
    expect(fallback).toContain("bun add -g harnessed@latest");
    expect(fallback).not.toContain("bun run --bun harnessed update --package-manager bun");
  });
});
