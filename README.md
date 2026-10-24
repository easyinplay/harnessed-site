# harnessed-site

Marketing site for [harnessed](https://github.com/easyinplay/harnessed), built with Astro, Starlight and Tailwind CSS.

## Dev

```bash
pnpm install
pnpm dev    # http://localhost:4321
```

## Build

```bash
pnpm build      # → dist/
pnpm preview    # serve dist/
```

## Deploy

Push to main. Cloudflare Workers Builds runs `pnpm run build` and deploys `dist/` as a
static-assets Worker (`wrangler.jsonc`) serving harnessed.cc. The build status shows up
as the "Workers Builds: harnessed-site" check on each commit.

The homepage npm download total is fetched from api.npmjs.org at build time and refreshed
in the browser on load (`src/lib/npmDownloads.ts`), so it stays current between deploys.

Product versions and release links share GitHub latest-stable metadata (`src/lib/releases.ts`),
with bounded fetching, a 15-minute browser cache and a last-known-good fallback.
