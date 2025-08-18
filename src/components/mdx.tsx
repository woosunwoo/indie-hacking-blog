import Image from 'next/image'
import type { ImgHTMLAttributes } from 'react'

export const mdxComponents = {
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const { alt = '', src, width, height } = props || {}
    if (!src || typeof src !== 'string') return null
    const w = width ? Number(width) : undefined
    const h = height ? Number(height) : undefined
    if (w && h) {
      return (
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          sizes="100vw"
          style={{ height: 'auto' }}
        />
      )
    }
    return (
      <span style={{ position: 'relative', display: 'block', width: '100%', aspectRatio: '16 / 9' }}>
        <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
      </span>
    )
  },
}

export type MdxComponents = typeof mdxComponents
