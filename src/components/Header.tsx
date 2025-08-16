import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'My Blog'
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.brand}>{siteName}</Link>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/essays">Essays</Link>
          <Link href="/rss.xml" aria-label="RSS">RSS</Link>
        </div>
      </nav>
    </header>
  )
}
