import { readFileSync } from "node:fs";
import { describe, expect, it } from "vite-plus/test";

const source = (name: string) => readFileSync(new URL(`./${name}.astro`, import.meta.url), "utf8");
const template = (name: string) => source(name).split("---")[2].split("<script>")[0];

describe("onboarding source layout contracts (not rendered DOM)", () => {
  it("separates installation controls with a localized heading and one trailing rule", () => {
    const installation = template("Installation");
    expect(installation).toMatch(
      /id="installation-heading"[^>]*>\{copy\.install\}<\/h2>[\s\S]*role="tablist"/,
    );
    expect(installation.match(/class="installation-rule" aria-hidden="true"/g)).toHaveLength(1);
    expect(installation).toMatch(
      /<h2 id="installation-heading">\{copy\.install\}<\/h2>\s*<span class="installation-rule"/,
    );
    expect(source("Installation")).toMatch(/\.installation-heading h2\s*\{[^}]*font-size:\s*14px/);
  });

  it("ends Hero content with installation after the tagline without the old bottom links", () => {
    expect(template("Hero")).toMatch(
      /dict\.hero\.tagline[\s\S]*<Installation lang=\{lang\} \/>\s*<\/div>\s*<\/div>\s*<\/section>/,
    );
    expect(template("Hero")).not.toContain("<InstallCommand");
    expect(template("Hero")).not.toMatch(/href="#quickstart"|ctaGitHub|hero-meta/);
  });

  it("keeps WhyCards immediately before the unique Quickstart", () => {
    const page = template("PageBody");
    expect(page).toMatch(
      /<Hero lang=\{lang\} \/>\s*<WhyCards lang=\{lang\} \/>\s*<Quickstart lang=\{lang\} \/>\s*<ThreeLayerStack/,
    );
    expect(page.match(/<Quickstart\b/g)).toHaveLength(1);
  });

  it("owns the sole installation tablist in Installation and host selector in Quickstart", () => {
    const installation = template("Installation");
    const quickstart = template("Quickstart");
    expect(installation.match(/role="tablist"/g)).toHaveLength(1);
    expect(installation).toContain("data-install-panel={method}");
    expect(installation).not.toContain('name="quickstart-host"');
    expect(quickstart.match(/<fieldset/g)).toHaveLength(1);
    expect(quickstart).toContain('name="quickstart-host"');
    expect(quickstart).not.toMatch(/role="tablist"|data-install-panel/);
  });

  it("renders exactly two workflow/progress actions with no standalone setup row", () => {
    const quickstart = template("Quickstart");
    expect(quickstart.match(/<li class="step">/g)).toHaveLength(2);
    expect(quickstart).toContain("{copy.workflow}");
    expect(quickstart).toContain("{copy.status}");
    expect(quickstart).toContain('id="quickstart"');
    expect(quickstart).not.toContain("copy.install");
    expect(quickstart).not.toContain("copy.subheading");
    expect(source("Quickstart") + source("Installation")).not.toContain("data-setup-command");
  });

  it("keeps installation commands independent of the workflow host controller", () => {
    const controller = source("Quickstart").split("<script>")[1].split("</script>")[0];
    expect(controller).not.toContain("setupCommand");
    expect(controller).not.toContain("installCommand");
    expect(controller).not.toContain("--platform");
    expect(template("Installation")).toContain("cmd={installCommand(method)}");
  });
});

it("reserves anchor clearance for the 100px sticky header stack plus a 16px gap", () => {
  const component = readFileSync(new URL("./Quickstart.astro", import.meta.url), "utf8");
  const sectionRule = component.match(/\.quickstart\s*\{([^}]*)\}/)?.[1] ?? "";
  const margin = Number(sectionRule.match(/scroll-margin-top:\s*(\d+)px/)?.[1] ?? 0);

  expect(margin).toBeGreaterThanOrEqual(36 + 64 + 16);
});
