# harnessed-site

Marketing site for [harnessed](https://github.com/easyinplay/harnessed). Astro 4 + Tailwind 3.

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

Push to main. GitHub Actions builds + publishes to GitHub Pages.
Custom domain configured via `public/CNAME` → harnessed.cc.
