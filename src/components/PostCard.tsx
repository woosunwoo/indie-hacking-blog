import Image from 'next/image'
import Link from 'next/link'
import styles from './PostCard.module.css'
import { formatDate } from '@/lib/format'
import type { Post } from '@/lib/content'

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className={styles.card}>
      {post.headerImage ? (
        <Link href={post.url} className={styles.media}>
          <Image src={post.headerImage} alt="" fill sizes="(max-width: 768px) 100vw, 480px" className={styles.image} />
        </Link>
      ) : null}
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.badge}>{post.section === 'projects' ? 'Project' : 'Essay'}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3 className={styles.title}><Link href={post.url}>{post.title}</Link></h3>
        <p className={styles.summary}>{post.summary}</p>
      </div>
    </article>
  )
}
