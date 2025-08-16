import { filterByTag } from '@/lib/content'
import PostCard from '@/components/PostCard'

export const revalidate = 60

export default function TagPage({ params }: { params: { tag: string } }) {
  const items = filterByTag(decodeURIComponent(params.tag), { offset: 0, limit: 50 })
  return (
    <div style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px', display: 'grid', gap: 16 }}>
      <h1>Tag: {decodeURIComponent(params.tag)}</h1>
      <div style={{ display: 'grid', gap: 16 }}>
        {items.map(p => <PostCard key={`${p.section}-${p.slug}`} post={p} />)}
      </div>
    </div>
  )
}
