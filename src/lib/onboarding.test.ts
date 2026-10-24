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
  it.each(locales)("keeps %s Bun update instructions compatible with stable releases", (locale) => {
    const copy = onboarding[locale].bun;
    expect(copy).not.toContain("--package-manager");
    expect(copy).toContain("bun add -g harnessed@latest");
    expect(copy).toContain("--bun");
  });
  it.each(locales)("scopes the %s Bun hook Node.js requirement to 4.x", (locale) => {
    expect(onboarding[locale].bun).toMatch(/4\.x[^.!?。！？]*hooks[^.!?。！？]*Node\.js 22\+/);
  });
});

describe("stable Bun documentation", () => {
  const paths = [
    "docs/getting-started/installation.md",
    "docs/getting-started/quickstart.md",
    "zh-hans/docs/getting-started/installation.md",
    "zh-hans/docs/getting-started/quickstart.md",
  ];
  it.each(paths)("recommends native cross-version Bun updates in %s", (path) => {
    const doc = readFileSync(new URL(`../content/docs/${path}`, import.meta.url), "utf8");
    expect(doc).not.toContain("--package-manager");
    expect(doc).toContain("bun add -g harnessed@latest");
    expect(doc).toMatch(/4\.x[^.!?。！？]*hooks[^.!?。！？]*Node\.js 22\+/);
    expect(doc).toContain("bun install -g harnessed && bun run --bun harnessed setup");
  });
});
