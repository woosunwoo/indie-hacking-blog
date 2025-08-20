import { getAllPostsFull, getAllTags } from '@/lib/content'
import { toAbsoluteUrl } from '@/lib/format'

export const revalidate = 60

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const urls: string[] = []
  urls.push(site)
  urls.push(toAbsoluteUrl('/projects', site))
  urls.push(toAbsoluteUrl('/essays', site))
  urls.push(toAbsoluteUrl('/privacy-policy', site))
  getAllTags().forEach(t => urls.push(toAbsoluteUrl(`/tags/${encodeURIComponent(t)}`, site)))
  getAllPostsFull().forEach(p => urls.push(toAbsoluteUrl(p.url, site)))
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${u}</loc></url>`).join('\n')}
</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=86400' } })
}
