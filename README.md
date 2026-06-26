# Portfolio — Alejandro Anza

Personal portfolio + digital CV, built with [Astro](https://astro.build).

## Run it locally

```bash
npm install      # first time only
npm run dev      # start dev server at http://localhost:4321
```

Other commands:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Add a new project

Drop a new Markdown file in `src/content/projects/`. Copy an existing one and edit
the frontmatter:

```markdown
---
title: "My New Project"
category: "Web"            # used by the portfolio filter
tech: ["React", "Node.js"] # tags shown on the card
year: 2026
summary: "One or two sentences describing it."
repo: "https://github.com/Alejandroanzac/my-project"  # optional; omit if private
featured: true             # show it on the Home "Highlights"
private: false             # true = hide repo link, show a 🔒 badge
---

Longer description here.
```

That's it — the Home and Portfolio pages pick it up automatically.

## Project structure

```
src/
├── content/projects/   ← one .md per project (your data)
├── content.config.ts   ← project schema
├── pages/              ← index.astro (Home/CV) + portfolio.astro
├── components/         ← Header, Footer, ProjectCard
├── layouts/Base.astro
└── styles/global.css
public/
├── cv-en.pdf  cv-es.pdf ← downloadable CVs
└── images/             ← project covers
```

## Deploy (free)

- **GitHub Pages**: set `site` and `base` in `astro.config.mjs`, push, enable Pages.
- **Vercel / Netlify**: import the repo; framework auto-detected as Astro. No config needed.
