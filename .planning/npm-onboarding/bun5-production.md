# Bun 5.x Production Followup

Status: **PASS**. Target commit supplied by main: `0ce60ab`.
Acceptance checks rendered production content; no independent deployment commit
identity claim or duplicate Cloudflare/GitHub check polling is made.

## Timing and Readiness

- Total budget: 6 minutes, beginning 2026-10-25 00:27:18.691 +08:00.
- Readiness probe: 00:29:30.725 +08:00, first poll, HTTP 200, cache status `MISS`.
- The ZH body included the exact new Bun copy; its Bun note had no legacy warning.
- Poll interval was configured as 20 seconds; no second poll was necessary.
- Automated checks and browser cleanup finished at 00:29:47.168 +08:00.
- Elapsed including preparation: 148477 ms. First QA round passed; no second round.

## Acceptance Results

| Locale | Viewport | Homepage | Copy / Chain | Geometry | Page Errors | Screenshot |
| --- | --- | --- | --- | --- | --- | --- |
| EN | 1440x1000 | 200 | PASS | PASS | 0 | `bun5-production-r1-en-1440.png` |
| EN | 390x844 | 200 | PASS | PASS | 0 | `bun5-production-r1-en-390.png` |
| ZH | 1440x1000 | 200 | PASS | PASS | 0 | `bun5-production-r1-zh-hans-1440.png` |
| ZH | 390x844 | 200 | PASS | PASS | 0 | `bun5-production-r1-zh-hans-390.png` |

Each case used a fresh context and actually selected the Bun tab. Exact current
copy confirms the owned-hooks/no-separate-Node boundary and separate upstream
prerequisites. No old 4.x / Node.js 22 requirement or old updater remains in that
note. The command remains `bun install -g harnessed && bun run --bun harnessed setup`.
No page or changed-region horizontal overflow, neighboring-block overlap,
code/copy-button overlap, or text clipping was detected.

Both EN/ZH installation pages returned HTTP 200 and contained the exact current
command `bun run --bun harnessed update --package-manager bun`. It precedes the
separate legacy 4.x heading; `bun add -g harnessed@latest` follows that heading.
The 5.x boundary, default npm updater and bare-shim shebang caveat remain present.

All four screenshots were opened individually with `view_image`: the changed
note and command are fully visible, mobile wrapping is readable, and no
changed-region overlap or clipping was observed. This is scoped copy/layout QA,
not full-site, upstream, native-model or live-model certification.

## Network and Cleanup

- No mocks, installs, credentials, persistent user profile or configuration changes.
- Four metadata API responses were actually observed as HTTP 200; these were
  informational observations, not acceptance prerequisites.
- Three Cloudflare analytics requests reported `net::ERR_ABORTED`, recorded in
  JSON. They are request failures, not page script errors.
- Five contexts created and closed: one readiness probe plus four fresh QA contexts.
- Browser closed; the owned execution session exited. Existing 4322/4323 previews
  were not touched. No source or prior evidence edits, build, commit, push or deploy.

Machine receipt: `bun5-production.json` (<35 KB), including actual poll results,
per-case checks, geometry, network observations and cleanup. Reproduction script:
`bun5-production.mjs`. Only new production receipts, screenshots and script added.
