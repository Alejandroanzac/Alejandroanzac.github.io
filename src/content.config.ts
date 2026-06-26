import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project lives in src/content/projects/.
// To add a project: copy an existing .md, change the frontmatter, done.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(), // single category, used for the portfolio filter
    tech: z.array(z.string()), // tech tags shown on the card
    year: z.number(),
    summary: z.string(), // 1–2 sentences shown on the card
    repo: z.string().url().optional(), // omit for private projects
    demo: z.string().url().optional(),
    cover: z.string().optional(), // path under /public, e.g. "/images/foo.png"
    featured: z.boolean().default(false), // shows on the Home "Highlights"
    private: z.boolean().default(false), // hides repo link, shows a "Private" badge
  }),
});

export const collections = { projects };
