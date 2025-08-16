import { NextRequest } from 'next/server'
import { getAllPostsFull, getAllBySection } from '@/lib/content'

export const revalidate = 60

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const section = (searchParams.get('section') || 'all') as 'all' | 'projects' | 'essays'
  const cursor = searchParams.get('cursor')

  const source = section === 'all' ? getAllPostsFull() : getAllBySection(section)
  const startIndex = cursor ? source.findIndex(p => p.date < cursor) : 0
  const start = startIndex === -1 ? source.length : startIndex
  const posts = source.slice(start, start + 10)
  const nextCursor = posts.at(-1)?.date ?? null
  return Response.json({ posts, nextCursor }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=59' } })
}
