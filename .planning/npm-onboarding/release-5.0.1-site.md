# harnessed 5.0.1 Production Version Propagation

Date: 2026-10-27 (Asia/Shanghai). Result: **PASS**.

The initially assigned browser sidecar hit its model-account rate limit before producing evidence. It made no verification claim. The main session then performed this direct bounded check.

## Evidence

- Direct anonymous GitHub latest-release API: HTTP 200, `tag_name` `v5.0.1`, stable/non-draft/non-prerelease.
- Four fresh isolated Chromium contexts: English and Simplified Chinese at 1440x1000 and 390x844.
- Every page returned HTTP 200. Each started with four static `v5.0.0` nodes and dynamically updated all four version nodes and four release links to `v5.0.1`.
- Every browser-observed metadata response returned HTTP 200. No page errors, request failures, or document-level horizontal overflow occurred.
- Screenshots were captured for all four contexts. Automated DOM and geometry assertions passed; the main session could not visually inspect the images because image input was unavailable in this environment, so no visual-inspection claim is made.

## Files

- `release-5.0.1-site.json`
- `release-5.0.1-site-en-1440.png`
- `release-5.0.1-site-en-390.png`
- `release-5.0.1-site-zh-hans-1440.png`
- `release-5.0.1-site-zh-hans-390.png`

No mocks, persistent browser profile, authentication, site source edit, deployment action, commit, or push were used during the browser check. All four contexts and the browser were closed.
