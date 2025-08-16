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
          content: s.custom<string>().transform((_, { meta }) => String((meta as unknown as { content?: unknown }).content ?? '')),
        })
        .transform((data, { meta }) => {
          const filename = typeof (meta as unknown as { filename?: unknown }).filename === 'string'
            ? (meta as unknown as { filename: string }).filename
            : String((meta as unknown as { filename?: unknown }).filename ?? '')
          return {
            ...data,
            // derive slug from filename if not provided
            slug: data.slug ?? filename.replace(/\.mdx?$/, ''),
            url: `/projects/${data.slug ?? filename.replace(/\.mdx?$/, '')}`,
          }
        }),
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
          content: s.custom<string>().transform((_, { meta }) => String((meta as unknown as { content?: unknown }).content ?? '')),
        })
        .transform((data, { meta }) => {
          const filename = typeof (meta as unknown as { filename?: unknown }).filename === 'string'
            ? (meta as unknown as { filename: string }).filename
            : String((meta as unknown as { filename?: unknown }).filename ?? '')
          return {
            ...data,
            slug: data.slug ?? filename.replace(/\.mdx?$/, ''),
            url: `/essays/${data.slug ?? filename.replace(/\.mdx?$/, '')}`,
          }
        }),
    },
  },
})
