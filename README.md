# Portfolio

A personal portfolio laid out like documentation. Built with Next.js (App Router) and exported as a static site.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm start        # serve ./out locally
```

## Editing content

All content is in `src/content/`. You shouldn't need to touch components to update the site.

| File | What it holds |
|---|---|
| `site.ts` | Name, title, intro, "Currently" list, email, socials, resume path |
| `navigation.ts` | Sidebar groups and order (also drives prev/next links and search) |
| `projects.ts` | Project cards and the full write-up for each `/projects/<slug>` page |
| `experience.ts` | Timeline entries, most recent first (`end: null` = current role) |
| `stack.ts` | Tech categories. `icon` is a [simple-icons](https://simpleicons.org) slug; omit it for a monogram |
| `certificates.ts` | Certificate cards and modal details |

Placeholder values are marked `TODO`. Replace these assets in `public/`:

- `JhayLord_Celeste_Resume.pdf`: your resume (the path is set by `resume` in `site.ts`; set it to `null` to hide the button)
- `projects/*.svg`: project screenshots (PNG/JPG also work; update the paths in `projects.ts`)
- `certificates/*.svg`: certificate previews
- `favicon.svg`

Images with the `wire` class are inverted in dark mode, so the grayscale placeholders work in both themes. Remove that class from `Screenshots.tsx` and `CertificateGrid.tsx` once you use real screenshots.

## Structure

```
src/
  app/          routes (one folder per page, projects/[slug] for project write-ups)
  components/   layout + UI (DocPage, Header, SidebarNav, TableOfContents, cards…)
  content/      all portfolio data, typed in content/types.ts
  lib/          formatting helpers and the search index
  styles/       tokens.css (colors, sizes) and globals.css
```

Colors live only in `src/styles/tokens.css`, with one set for light and one for dark.

## Deploying

`npm run build` writes a fully static site to `out/`. It deploys to Vercel, Netlify, Cloudflare Pages or GitHub Pages without extra config. For GitHub Pages under a sub-path, set `basePath` in `next.config.ts`.
