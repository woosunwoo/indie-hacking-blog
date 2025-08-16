"use client"
import { useEffect, useRef, useState } from 'react'
import PostCard from './PostCard'
import type { Post } from '@/lib/content'

export default function PostList({ initial, section }: { initial: Post[]; section: 'all' | 'projects' | 'essays' }) {
  const [items, setItems] = useState<Post[]>(initial)
  const [cursor, setCursor] = useState<string | null>(initial.at(-1)?.date ?? null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sentinelRef.current || done) return
    const el = sentinelRef.current
    const io = new IntersectionObserver(async (entries) => {
      if (entries.some(e => e.isIntersecting)) {
        if (loading || !cursor) return
        setLoading(true)
        try {
          const res = await fetch(`/api/posts?section=${section}&cursor=${encodeURIComponent(cursor)}`)
          if (!res.ok) throw new Error('Failed')
          const data: { posts: Post[]; nextCursor: string | null } = await res.json()
          setItems(prev => [...prev, ...data.posts])
          setCursor(data.nextCursor)
          if (!data.nextCursor || data.posts.length === 0) setDone(true)
        } catch (e) {
          // stop trying on error
          setDone(true)
        } finally {
          setLoading(false)
        }
      }
    })
    io.observe(el)
    return () => io.disconnect()
  }, [cursor, loading, section, done])

  return (
    <div>
      <div style={{ display: 'grid', gap: 16 }} aria-live="polite">
        {items.map(p => <PostCard key={`${p.section}-${p.slug}`} post={p} />)}
      </div>
      <div ref={sentinelRef} aria-hidden style={{ height: 1 }} />
      {loading && <div aria-live="polite" role="status" style={{ padding: 16 }}>Loading…</div>}
      {done && <div style={{ padding: 16, color: 'color-mix(in oklab, var(--foreground), transparent 40%)' }}>No more posts</div>}
    </div>
  )
}
