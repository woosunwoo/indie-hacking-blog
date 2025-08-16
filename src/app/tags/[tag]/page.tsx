import { filterByTag } from '@/lib/content'
import PostCard from '@/components/PostCard'

export const revalidate = 60

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const decoded = decodeURIComponent(tag)
  const items = filterByTag(decoded, { offset: 0, limit: 50 })
  return (
    <div style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px', display: 'grid', gap: 16 }}>
      <h1>Tag: {decoded}</h1>
      <div style={{ display: 'grid', gap: 16 }}>
        {items.map(p => <PostCard key={`${p.section}-${p.slug}`} post={p} />)}
      </div>
    </div>
  )
}
