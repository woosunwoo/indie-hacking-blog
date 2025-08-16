import type { Metadata } from 'next'
import { toAbsoluteUrl } from './format'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'My Blog'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export function baseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_NAME,
      template: '%s — ' + SITE_NAME,
    },
    description: 'Projects and essays',
    openGraph: {
      siteName: SITE_NAME,
      type: 'website',
      url: SITE_URL,
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}

export function postMetadata(p: { title: string; summary: string; headerImage?: string; canonicalUrl?: string; url: string }) {
  return {
    title: p.title,
    description: p.summary,
    alternates: {
      canonical: p.canonicalUrl || toAbsoluteUrl(p.url, SITE_URL),
    },
    openGraph: {
      title: p.title,
      description: p.summary,
      images: p.headerImage ? [toAbsoluteUrl(p.headerImage, SITE_URL)] : undefined,
      url: toAbsoluteUrl(p.url, SITE_URL),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: p.title,
      description: p.summary,
      images: p.headerImage ? [toAbsoluteUrl(p.headerImage, SITE_URL)] : undefined,
    },
  } satisfies Metadata
}
