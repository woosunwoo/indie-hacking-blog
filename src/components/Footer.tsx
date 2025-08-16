import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} My Blog</span>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/sitemap.xml">Sitemap</Link>
          <Link href="/rss.xml">RSS</Link>
        </nav>
      </div>
    </footer>
  )
}
