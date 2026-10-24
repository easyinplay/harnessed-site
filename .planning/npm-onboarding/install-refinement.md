# Focused Installation Refinement

Date: 2026-10-24. Repository: D:/GitCode/harnessed-site.

## Scope And Acceptance

- Change only Hero.astro, Installation.astro, associated component tests,
  onboarding installation headings, and new install-refinement* evidence.
- Main later explicitly authorized InstallCommand.astro and its tests for
  short-screen code scrolling and the separate P2 focus/outline correction.
- Retain existing typography and positioning. Use a left-aligned localized
  product installation heading and one thin trailing rule.
- Render recommendation text in literal parentheses immediately after each
  platform. Do not recreate the old second tier or character wrapping.
- Remove the entire Hero bottom CTA group and meta/license sentence and only
  their newly dead CSS. Preserve release pill, nav GitHub, install/copy/keyboard
  behavior and lower workflow module.
- Verify TDD RED/GREEN, all site tests, the 121-page build, scoped formatter,
  isolated EN/ZH desktop/mobile contexts down to 320px and real screenshots.
- Preserve other agents' edits and existing untracked evidence. No CLI/release
  edits, commits, pushes or deployment. Do not stop preview port 4322.
- Native ralph-loop is unavailable. At most three bounded fix/verification
  layout iterations were used; main then authorized the separate focused P2
  correction. No additional layout iteration or geometry-suite rerun followed.

## Baseline

- vp test: PASS, 81 tests across four files before this task's edits.
- Tracked worktree initially clean; existing untracked evidence is preserved.
- Process inspection: one existing Astro preview on 127.0.0.1:4322, no Astro
  build. Building writes dist, also served by that existing preview.
- At 320px the install area is 272px wide. Browser measurement at 12px:
  macOS / Linux (Recommended) = 180px; Windows (Recommended) = 150px.
  Main resolved the narrow layout: intrinsic whole-tab flex wrapping, no
  smaller fonts or locale-specific grid breakpoints.

## Progress

1. Expected contract RED failures observed before implementation.
2. Focused layout implementation and manual scoped diff review complete.
3. Final site tests 96/96; build 121 pages; scoped checks pass.
4. Browser: 80 layout cases and six interaction groups pass; six viewport
   screenshots visually inspected. Existing outside-scope overflow retained.
5. Explicitly authorized P2 follow-up: code tabindex/outline, focused RED/GREEN
   and two real 320x640 keyboard checks pass without rerunning geometry suite.

## Tooling

- Use existing Chromium 1247 executable with the site's Playwright package;
  its default expected browser revision is unavailable. No installs needed.
- Read frontend-design/playwright-cli and existing source/test patterns.
  Missing web-design/testing rules are noted in the task context.
- Initial apply_patch shell wrappers failed before writing any file; retry
  using the native apply_patch executable entry point. No shell file writes.

## Delivered Changes

Left-aligned product installation headings cover all ten locales, with one
thin trailing decorative rule. Recommendation text uses literal inline
parentheses. Tabs use flex-wrap, flex: 1 0 auto and white-space: nowrap;
desktop retains four inline tabs, narrow widths wrap whole buttons.
Hero bottom CTAs/meta and only newly dead related CSS were removed.
Release pill, nav GitHub, keyboard/copy behavior and lower workflow remain.

Only at <=480px width and <=680px height, installation code scrolls inside
its own flex: 1, width: 0 region; the separate 32px copy button cannot cover
the text. Command contents and prerequisite notes are unchanged. Compact
tab bottom margin and command vertical padding are 8px. Actual code has
tabindex="0" and a 2px focus-visible outline; panel/copy roles are unchanged.

## Verified Receipt

- Layout RED: 15 failed / 8 passed initially; final flex/scroll contracts
  failed 2/14 before implementation. Logs: install-refinement-red.log and
  install-refinement-final-red.log. Intermediate responsive RED also retained.
- Layout GREEN: 95/95. P2 RED: 1 failed / 1 passed. P2 focused GREEN: 26/26.
  Final whole-site GREEN: 96/96 in six files, recorded in
  install-refinement-keyboard-full-green.log.
- Latest build: exit 0, 121 pages at 22:31:08 +08:00 on 2026-10-24;
  install-refinement-keyboard-build.log. Existing chunk/404 warnings remain.
- Existing vp formatter and scoped lint/type checks pass for five TS files;
  three Astro files pass no-fmt checks. No whole-repo formatting or claim
  of Astro formatter coverage. install-refinement-keyboard-check.log.
- 80 isolated browser contexts: ten locales at 320/360/375/390/480/768/801/1440,
  six EN/ZH interaction groups, zero acceptance failures or page errors.
  Every tab passes scrollWidth <= clientWidth, text bounds and inline-note
  checks; Hero/installation stay inside the viewport. Real clipboard, full
  commands, roving tabs, keyboard wrap, host independence and Bun runner pass.
  Evidence: install-refinement-browser-verification.json (kept unchanged).
- EN/ZH viewport screenshots at 1440x1000, 390x844, 320x640 were visually
  inspected. Final 320 screenshots show full prerequisite notes and the next
  heading: EN y=603.95..637.95, ZH y=512.56..546.56; both document widths 320.
  Files: install-refinement-{en,zh-hans}-{1440,390,320}.png and -hero.png.
- P2 keyboard follow-up: both EN/ZH 320x640 contexts pass real Tab onto code,
  ArrowRight scrollLeft 0 -> 2, visible 2px outline, next Tab onto copy.
  install-refinement-keyboard-verification.json and matching keyboard PNGs.
  Main independently confirmed final tests/build/keyboard results.

## Residuals And Test Doubles

- Preserved start failure: Astro CLI reused 4322 instead of opening 4323;
  80 ERR_CONNECTION_REFUSED cases, zero accepted pages. Recorded in
  install-refinement-browser-start-failure.{json,log}. Public Astro preview
  API now serves 4323 without replacing the existing CLI preview lock.
- Preserved layout failure: 35 findings (14 tab clipping/bounds assertions,
  21 existing document overflow cases), in browser-layout-failure.{json,log}
  with the install-refinement- prefix. Original 320 screenshots remain as
  install-refinement-{en,zh-hans}-320-before-compact{,-hero}.png.
- Final report explicitly retains 21 unchanged outside-scope overflow cases:
  lower WorkflowSection stage strip at 768/801px for all ten locales; Russian
  320px document extent 322px remains. No document extent increased versus
  the preserved pre-fix run. Main accepted reporting these existing debts;
  no global overflow hiding or unrelated module edits were made.
- Global tsc still reports four existing TS2345 errors in Starlight's
  markdown-plugins.ts (satteri/hast incompatibilities, lines 31/32/35/51).
  install-refinement-typecheck.log. No dependency/config/check weakening.
- Test doubles: geometry contexts force navigator.platform to Win32 for a
  deterministic initial Windows selection and use en-US browser locale to
  prevent automatic home redirects. Keyboard follow-up clicks Windows.
  No clipboard, release API, component or network mocks; real rendered local
  builds, browser keys and OS clipboard are used. Source-contract tests are
  explicitly not rendered-DOM tests; browser evidence supplies that coverage.
- Release behavior is untouched: screenshots can show the existing v4.49.2
  build seed before async refresh or v5.0.0 afterward. CLI release validation
  and release metadata changes are not part of this task.

## Handoff

Owned sources: Hero.astro, Installation.astro, InstallCommand.astro,
Hero.test.ts, Quickstart.test.ts, new Installation.test.ts and
InstallCommand.test.ts (all in src/components), plus src/i18n/onboarding.ts
(only ten install headings). New evidence uses install-refinement* only.

Preview retained: http://127.0.0.1:4323/ and /zh-hans/, PID 35960.
Original preview 4322/PID 21588 was never stopped or replaced. Both serve dist
and therefore reflect the authorized builds. No check/build sessions remain.
No commit/push/deploy, CLI/release edits, unrelated changes or removal of
existing untracked evidence. Main owns commit/push and production follow-up.
