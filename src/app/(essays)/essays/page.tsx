import PostList from '@/components/PostList'
import NewsletterCTA from '@/components/NewsletterCTA'
import { getAllEssays } from '@/lib/content'

export const revalidate = 60

export default async function EssaysPage() {
  const initial = getAllEssays({ offset: 0, limit: 10 })
  return (
    <div style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px', display: 'grid', gap: 24 }}>
      <h1>Essays</h1>
      <PostList initial={initial} section="essays" />
      <NewsletterCTA />
    </div>
  )
}
