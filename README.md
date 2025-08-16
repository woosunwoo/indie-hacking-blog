## My Blog — Next.js 14 + Velite

Production-ready blog using Next.js App Router, TypeScript, MDX via Velite, CSS Modules, ISR, infinite scroll, RSS and sitemap.

### Tech
- Next.js 14 App Router
- TypeScript, ESM
- Velite for MDX content indexing at build time
- CSS Modules, modern minimal design (system fonts, light/dark via prefers-color-scheme)
- next/image for optimized images
- ISR: revalidate every 60 seconds

### Structure
- `content/` — MDX content
  - `content/projects/*.mdx`
  - `content/essays/*.mdx`
- `src/lib/` — content helpers, seo, format
- `src/components/` — UI components
- `src/app/` — App Router pages and route handlers (API, rss, sitemap, robots)

### Content model (frontmatter)
```yaml
title: "Title here"
slug: "kebab-slug"      # optional, default from filename
date: "2025-08-10"
updated: "2025-08-15"   # optional
summary: "One-sentence summary"
tags: ["tag1","tag2"]
headerImage: "/images/xyz.png"  # public path or remote URL
published: true
canonicalUrl: ""               # optional
```

## Running locally

1) Install deps
```bash
npm install
```

2) Generate content index (Velite) and start dev
```bash
npm run content:check
npm run dev
# open http://localhost:3000
```

Build runs Velite automatically:
```bash
npm run build
npm start
```

## Deploying to Vercel

1) Push to GitHub and import repo in Vercel.
2) Set Environment Variables:
- `NEXT_PUBLIC_SITE_NAME` (e.g. "My Blog")
- `NEXT_PUBLIC_SITE_URL` (e.g. "https://your-domain.com")
- `NEXT_PUBLIC_CONVERTKIT_FORM_ACTION` (optional ConvertKit form post URL)

No additional build command needed; `npm run build` will run Velite beforehand.

## Adding a new post

1) Create a new MDX file:
- `content/projects/my-new-project.mdx` or
- `content/essays/my-new-essay.mdx`

2) Include required frontmatter fields. Commit and push. ISR will refresh lists and feeds.

## How ISR and Infinite Scroll work

- Pages and handlers export `revalidate = 60`. Next will re-generate at most once per minute on traffic.
- Infinite scroll uses `/api/posts` with `?section=all|projects|essays&cursor=<ISO date>`. It reads from the in-memory Velite index and returns 10 items per request plus `nextCursor`.

## RSS & Sitemap

- `/rss.xml` serves combined latest 50 across projects and essays.
- `/sitemap.xml` includes home, listings, tags, and all post URLs. Cached 24h.

## Newsletter (ConvertKit)

Set `NEXT_PUBLIC_CONVERTKIT_FORM_ACTION` to your ConvertKit form action URL. The form validates client-side and shows success/error without page reload. If not set, the form simulates success.

## Testing

- Unit tests (todo) for merge/sort in `src/lib/content.ts`.
- E2E smoke (todo) with Playwright: home loads initial 10 and loads more on scroll; post renders.

## Notes

- MDX code highlighting via `rehype-pretty-code` (Shiki). Adjust theme in detail pages.
- Images: use `headerImage` for cards and headers; remote domains allowed by `next.config.ts`.
