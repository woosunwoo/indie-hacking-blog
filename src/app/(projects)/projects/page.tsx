import PostList from '@/components/PostList'
import NewsletterCTA from '@/components/NewsletterCTA'
import { getAllProjects } from '@/lib/content'

export const revalidate = 60

export default async function ProjectsPage() {
  const initial = getAllProjects({ offset: 0, limit: 10 })
  return (
    <div style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px', display: 'grid', gap: 24 }}>
      <h1>Projects</h1>
      <PostList initial={initial} section="projects" />
      <NewsletterCTA />
    </div>
  )
}
