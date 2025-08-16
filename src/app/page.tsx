import PostList from '@/components/PostList'
import NewsletterCTA from '@/components/NewsletterCTA'
import { getAllPosts } from '@/lib/content'

export const revalidate = 60

export default async function HomePage() {
  const initial = getAllPosts({ offset: 0, limit: 10 })
  return (
    <div style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px', display: 'grid', gap: 24 }}>
      <header style={{ textAlign: 'center', margin: '32px 0 8px' }}>
        <h1 style={{ fontSize: '2rem', lineHeight: 1.2, margin: 0 }}>Sunwoo Labs</h1>
        <p style={{ color: 'var(--muted-foreground, #555)', marginTop: 12 }}>
          Building and selling small products. Real lessons in indie hacking, marketing, and entrepreneurship —
          plus behind‑the‑scenes project write‑ups.
        </p>
      </header>
      <NewsletterCTA title="Get weekly notes" subtitle="Tactics, experiments, and project updates — no fluff." />
      <PostList initial={initial} section="all" />
    </div>
  )
}
