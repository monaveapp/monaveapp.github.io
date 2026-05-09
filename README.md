# monaveapp.github.io

Private prelaunch website for `monave.app`.

This repository intentionally contains only a minimal placeholder site until the
app is public and the brand is ready for search exposure.

## Prelaunch Policy

- Do not add app features, screenshots, pricing, download links, privacy policy,
  or terms pages yet.
- Keep all generated pages marked with `noindex, nofollow`.
- Keep `public/robots.txt` blocking all crawlers.
- TODO before public launch: remove the noindex meta tags, replace
  `robots.txt`, and add real localized landing content.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

GitHub Actions builds the Astro static site from `main` and deploys `dist/` to
GitHub Pages. The custom domain is configured through `public/CNAME`.
