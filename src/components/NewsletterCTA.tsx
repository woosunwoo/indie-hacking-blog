"use client"
import Script from 'next/script'
import styles from './NewsletterCTA.module.css'


export default function NewsletterCTA({ title = 'Stay in the loop', subtitle = 'Get new posts in your inbox.' }: { title?: string; subtitle?: string }) {
  return (
    <section className={styles.wrap} aria-live="polite">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <div>
        <Script
          async
          strategy="afterInteractive"
          data-uid="dcde6be117"
          src="https://sunwoo-labs.kit.com/dcde6be117/index.js"
        />
      </div>
    </section>
  )
}
