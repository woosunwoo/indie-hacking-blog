import Link from 'next/link'
import styles from './TagList.module.css'

export default function TagList({ tags }: { tags: string[] }) {
  if (!tags?.length) return null
  return (
    <ul className={styles.list}>
      {tags.map(t => (
        <li key={t}><Link href={`/tags/${encodeURIComponent(t)}`}>#{t}</Link></li>
      ))}
    </ul>
  )
}
