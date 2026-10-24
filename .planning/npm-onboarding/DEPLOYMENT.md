# Website Deployment

Date: 2026-10-24.
Status: Pre-deployment verification passed; commit/push and managed deployment next.

## Scope

Deploy the approved website changes to harnessed.cc through the existing main-branch Cloudflare Workers Builds integration. This explicit website authorization supersedes the earlier website hold; it does not authorize tagging or publishing the separate harnessed CLI 5.0.0 candidate.

Preserve the final layout: installation tabs and localized separator inside Hero; workflow/progress module after WhyCards; no old 60-second duplicate. Preserve default automatic setup host detection and combined Bun/npm installation commands.

## Baseline And Compatibility

- Website branch main matches origin/main at `653f62e8bdba6a783f6f5c81d6ea225e0fb26ae8` after fetch, with no divergence.
- The prior Cloudflare check `Workers Builds: harnessed-site` completed successfully for that baseline; deployment uses the repository's existing wrangler.jsonc static assets configuration.
- Public CLI stable release remains v4.49.2, published 2026-10-23T04:22:43Z. The website must not recommend an unconditional 5.0-only update flag while its install commands resolve the stable package.
- Pre-deployment copy correction uses native `bun add -g harnessed@latest` for Bun-managed package updates and discloses the 4.x hook Node prerequisite. No automatic package-manager switch or CLI release is performed.
- The previous local verification, screenshots and known baseline formatting/typecheck limitations remain in verification.md. They are not production deployment receipts.

## Deployment Checklist

- [x] Fresh site tests: 81/81; scoped lint/type: 26 files; single-thread scoped formatting: 23 files; production build: 121 pages.
- [x] Pre-deployment Chromium: English/Chinese desktop/mobile, four cases; localized separator, layout, complete install chains, keyboard/copy, stable 4.x compatibility and no page errors/overflow.
- [x] Inspect and explicitly stage only task-owned source/tests/docs/evidence; exclude older local scratch reports and build logs.
- [ ] Commit in English and push main once to trigger the managed build.
- [ ] Verify the Cloudflare check on that exact commit, not only Git push success.
- [ ] Verify live English/Chinese HTTP and browser behavior, final layout/commands, release metadata, clipboard and responsive rendering.
- [ ] Record deployed commit/check identity and actual production outcomes.

README Bun command merging is handled separately in the CLI repository. No CLI tag or npm publication is part of this website deployment.

This record captures the deployment plan at source commit time. The completed production receipt will be recorded separately in the CLI repository's `.planning/releases/site-2026-10-24.md`, so writing the outcome does not itself retrigger a second website build.

Before deployment, the real public Chinese homepage returned HTTP 200 from Cloudflare, contained static v4.43.0 content and lacked the new installation heading. This baseline was observed directly, not inferred from local screenshots. Final checks must observe the public domain after the managed build.
