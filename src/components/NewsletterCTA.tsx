"use client"
import Script from 'next/script'
import styles from './NewsletterCTA.module.css'


export default function NewsletterCTA({ title = 'Stay in the loop', subtitle = 'Get new posts in your inbox.' }: { title?: string; subtitle?: string }) {
  return (
    <section className={styles.wrap} aria-live="polite">
      <script async data-uid="dcde6be117" src="https://sunwoo-labs.kit.com/dcde6be117/index.js"></script>
    </section>
  )
}
