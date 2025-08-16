"use client"
import { useState } from 'react'
import styles from './NewsletterCTA.module.css'

const ACTION = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ACTION || ''

export default function NewsletterCTA({ title = 'Stay in the loop', subtitle = 'Get new posts in your inbox.' }: { title?: string; subtitle?: string }) {
  const [email, setEmail] = useState('')
  const [botField, setBotField] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    // Honeypot: if filled, assume bot and pretend success without submitting
    if (botField.trim() !== '') {
      setStatus('success')
      return
    }
    if (!ACTION) {
      setStatus('success')
      return
    }
    try {
      setStatus('loading')
      const res = await fetch(ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // ConvertKit expects `email_address`
        body: new URLSearchParams({ email_address: email }).toString(),
      })
      if (!res.ok) throw new Error('fail')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.wrap} aria-live="polite">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <input type="email" name="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required aria-label="Email address" />
        {/* Honeypot field: hidden from users, bots may fill it */}
        <input
          type="text"
          name="website"
          value={botField}
          onChange={e => setBotField(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
          aria-hidden="true"
        />
        <button type="submit" disabled={status==='loading'}>{status==='loading' ? 'Subscribing…' : 'Subscribe'}</button>
      </form>
      {status==='success' && <p className={styles.success}>Thanks! Check your inbox.</p>}
      {status==='error' && <p className={styles.error}>Please enter a valid email or try again later.</p>}
    </section>
  )
}

