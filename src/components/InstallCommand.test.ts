import { readFileSync } from "node:fs";
import { expect, it } from "vite-plus/test";

const source = readFileSync(new URL("./InstallCommand.astro", import.meta.url), "utf8");

it("makes command code explicitly keyboard-focusable with a visible focus outline", () => {
  expect(source).toMatch(/<code\b[^>]*data-command-content[^>]*tabindex="0"[^>]*>\{cmd\}<\/code>/);
  expect(source).toMatch(
    /code:focus-visible\s*\{[^}]*outline:\s*2px solid #c4b5fd;[^}]*outline-offset:\s*2px/,
  );
});

it("scrolls only installation code on short phones without expanding ancestors or covering copy", () => {
  const compact = source.split("@media (max-width: 480px) and (max-height: 680px)")[1] ?? "";
  expect(compact).toMatch(
    /:global\(#installation\) code\s*\{[^}]*flex:\s*1;[^}]*width:\s*0;[^}]*white-space:\s*pre;[^}]*overflow-x:\s*auto/,
  );
  expect(source).toMatch(/\.copy-btn\s*\{[^}]*width:\s*2rem;[^}]*height:\s*2rem/);
  expect(source).toContain(
    "copy-btn text-zinc-400 hover:text-violet-300 transition-colors shrink-0",
  );
  expect(source).toContain("const text = el.textContent ?? ''");
  expect(source).toContain("await navigator.clipboard.writeText(text)");
});
