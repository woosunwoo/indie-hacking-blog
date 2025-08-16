export function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: '2-digit'
  })
}

export function toAbsoluteUrl(path: string, base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') {
  if (!path) return base
  if (path.startsWith('http')) return path
  return new URL(path, base).toString()
}
