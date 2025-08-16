import { getAllPostsFull } from '@/lib/content'
import { toAbsoluteUrl } from '@/lib/format'

export const revalidate = 60

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const items = getAllPostsFull().slice(0, 50)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${process.env.NEXT_PUBLIC_SITE_NAME || 'My Blog'}</title>
  <link>${site}</link>
  <description>Projects and essays</description>
  ${items.map(item => `
  <item>
    <title><![CDATA[${item.title}]]></title>
    <link>${toAbsoluteUrl(item.url, site)}</link>
    <guid>${toAbsoluteUrl(item.url, site)}</guid>
    <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    <description><![CDATA[${item.summary}]]></description>
    ${item.headerImage ? `<enclosure url="${toAbsoluteUrl(item.headerImage, site)}" type="image/${item.headerImage.endsWith('.png') ? 'png' : 'jpeg'}"/>` : ''}
  </item>`).join('\n')}
</channel>
</rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=86400' } })
}
