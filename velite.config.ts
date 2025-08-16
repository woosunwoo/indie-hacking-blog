import { defineConfig, s } from 'velite'

export default defineConfig({
  root: process.cwd(),
  output: {
    data: '.velite',
    assets: 'public',
    name: 'content',
    clean: true,
  },
  collections: {
    projects: {
      name: 'Project',
      pattern: 'content/projects/*.mdx',
      schema: s
        .object({
          title: s.string(),
          slug: s.string().optional(),
          // Coerce string dates from frontmatter into Date objects
          date: s.string().transform((v) => new Date(v)),
          updated: s.string().transform((v) => new Date(v)).optional(),
          summary: s.string(),
          tags: s.array(s.string()).default([]),
          headerImage: s.string().optional(),
          published: s.boolean().default(true),
          canonicalUrl: s.string().url().optional(),
          content: s.custom<string>().transform((_, { meta }) => meta.content),
        })
        .transform((data, { meta }) => ({
          ...data,
          // derive slug from filename if not provided
          slug: data.slug ?? meta.filename.replace(/\.mdx?$/, ''),
          url: `/projects/${data.slug ?? meta.filename.replace(/\.mdx?$/, '')}`,
        })),
    },
    essays: {
      name: 'Essay',
      pattern: 'content/essays/*.mdx',
      schema: s
        .object({
          title: s.string(),
          slug: s.string().optional(),
          // Coerce string dates from frontmatter into Date objects
          date: s.string().transform((v) => new Date(v)),
          updated: s.string().transform((v) => new Date(v)).optional(),
          summary: s.string(),
          tags: s.array(s.string()).default([]),
          headerImage: s.string().optional(),
          published: s.boolean().default(true),
          canonicalUrl: s.string().url().optional(),
          content: s.custom<string>().transform((_, { meta }) => meta.content),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: data.slug ?? meta.filename.replace(/\.mdx?$/, ''),
          url: `/essays/${data.slug ?? meta.filename.replace(/\.mdx?$/, '')}`,
        })),
    },
  },
})
