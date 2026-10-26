# Production Refinement Acceptance

Date: 2026-10-24. Result: PASS, first round, four fresh isolated contexts.
Requested site commit: 12155326561de991207f69dd553de8a8f1e1922b.
Cloudflare check monitoring remained with main; no gh requests were repeated.

## Actual Results

- Target: https://harnessed.cc/ and https://harnessed.cc/zh-hans/.
- Deadline: eight minutes; polling interval configured to 16 seconds; at most
  two acceptance rounds. First readiness poll returned HTTP 200, heading
  installation marker present and zero old Hero CTA/meta elements.
- Total measured elapsed time, including preparation: 204132ms. First and
  only acceptance round passed all four cases: EN/ZH at 1440x1000 and 390x844.
- Each production page returned HTTP 200. Correct localized headings,
  left alignment and exactly one decorative 1px trailing rule passed.
- Four tabs per case: literal parenthetical notes remain on the platform's
  line, text bounds fit, scrollWidth <= clientWidth, no tab overlap; desktop
  keeps four tabs on one row. Hero and installation bounds do not overflow.
- All four original installation commands match exactly in every context.
  Old Hero CTA/meta count is zero; no Hero license sentence remains.
- Every context has four version markers at v5.0.0 and four release links
  pointing to https://github.com/easyinplay/harnessed/releases/tag/v5.0.0.
- Actual browser-observed GitHub latest-release API responses: 200, 200,
  200, 200, each with tag_name v5.0.0. Remaining rate limits: 34, 33, 32, 31.
  No 403, timeout, failed request or page error was observed. These are real
  HTTP observations, not assumed statuses or substituted API responses.
- JSON evidence is 23307 bytes, below 50KB. All assertions and actual HTTP
  observations are in install-refinement-production.json.

## Screenshots And Scope

All four real viewport screenshots were visually inspected:

- install-refinement-production-r1-en-1440.png
- install-refinement-production-r1-en-390.png
- install-refinement-production-r1-zh-hans-1440.png
- install-refinement-production-r1-zh-hans-390.png

No network, component, clipboard, navigator or storage mocks were used. Fresh
contexts use en-US browser locale and reduced motion. Clipboard interaction
was not requested or claimed in this production pass; exact rendered commands
were verified. The deployment marker verifies visible production behavior,
not an independent assertion of the server's Git commit or Cloudflare status.

The browser and contexts were closed in finally; owned exec session 98586
finished with exit 0. Previews 4322/PID 21588 and 4323/PID 35960 were preserved.
Only new install-refinement-production evidence and the temporary production
script were written. No source or committed local evidence edits, commits,
pushes, deployment actions or changes to existing previews were performed.
