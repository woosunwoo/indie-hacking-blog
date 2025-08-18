import Image from 'next/image'
import { notFound } from 'next/navigation'
import Prose from '@/components/Prose'
import NewsletterCTA from '@/components/NewsletterCTA'
import TagList from '@/components/TagList'
import { getWithContent, getPrevNext } from '@/lib/content'
import { postMetadata } from '@/lib/seo'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getWithContent('essays', slug)
  if (!post) return {}
  return postMetadata(post)
}

export default async function EssayDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getWithContent('essays', slug)
  if (!post) return notFound()
  const mdx = await compileMDX<unknown>({
    source: post.content,
    components: {
      img: (props: any) => {
        const { alt = '', src, width, height } = props || {}
        if (!src) return null
        const w = width ? Number(width) : undefined
        const h = height ? Number(height) : undefined
        if (w && h) {
          return (
            <Image
              src={src}
              alt={alt}
              width={w}
              height={h}
              sizes="100vw"
              style={{ height: 'auto' }}
            />
          )
        }
        return (
          <span style={{ position: 'relative', display: 'block', width: '100%', aspectRatio: '16 / 9' }}>
            <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
          </span>
        )
      },
    },
    options: { mdxOptions: { rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] } },
  })
  const { prev, next } = getPrevNext('essays', post.slug)
  return (
    <div style={{ maxWidth: 860, margin: '24px auto', padding: '0 16px', display: 'grid', gap: 24 }}>
      {post.headerImage && (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
          <Image src={post.headerImage} alt="" fill sizes="100vw" style={{ objectFit: 'cover', borderRadius: 12 }} />
        </div>
      )}
      <header>
        <p style={{ color: 'color-mix(in oklab, var(--foreground), transparent 35%)' }}>Essay • <time dateTime={post.date}>{new Date(post.date).toDateString()}</time></p>
        <h1 style={{ margin: '4px 0 0', fontSize: 34 }}>{post.title}</h1>
        <p style={{ margin: '8px 0 0', color: 'color-mix(in oklab, var(--foreground), transparent 20%)' }}>{post.summary}</p>
        <TagList tags={post.tags} />
      </header>
      <Prose>{mdx.content}</Prose>
      <nav style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid color-mix(in oklab, var(--foreground), transparent 90%)', paddingTop: 16 }} aria-label="Pagination">
        <div>{prev && <a href={prev.url}>← {prev.title}</a>}</div>
        <div>{next && <a href={next.url}>{next.title} →</a>}</div>
      </nav>
      <NewsletterCTA />
    </div>
  )
}
