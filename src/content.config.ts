import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    date: z.coerce.date(),
    order: z.number().default(99),
    logo: z.string().optional(),
    accent: z.string().default('#6366f1'),
    screenshots: z.array(z.string()).optional().default([]),
    demoVideo: z.string().optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        gem: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
