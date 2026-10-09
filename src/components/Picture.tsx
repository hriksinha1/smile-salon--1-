import { useState } from 'react'
import { images } from '../data/images'

const artBackground = {
  blush: '#E9D6D0',
  champagne: '#C8AD91',
  berry: '#8A505D',
  espresso: '#302725',
} as const

const artForeground = {
  blush: '#8A505D',
  champagne: '#FAF6F1',
  berry: '#E9D6D0',
  espresso: '#C8AD91',
} as const

export default function Picture({
  id,
  className = '',
  eager = false,
  round = false,
}: {
  id: string
  className?: string
  eager?: boolean
  round?: boolean
}) {
  const img = images[id]
  const [failed, setFailed] = useState(false)

  if (img && !failed && img.src) {
    return (
      <img
        src={img.src}
        srcSet={img.srcSet}
        width={img.width}
        height={img.height}
        alt={img.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        {...(eager ? { fetchpriority: 'high' } : {})}
        onError={() => setFailed(true)}
        className={className}
        style={{
          objectFit: 'cover',
          objectPosition: img.objectPosition ?? 'center',
          borderRadius: round ? '999px 999px 8px 8px' : 'inherit',
        }}
      />
    )
  }

  const tone = (['blush', 'champagne', 'berry', 'espresso'] as const)[(img?.id?.length ?? 0) % 4]
  const c = artForeground[tone]
  const background = artBackground[tone]
  const variant = (img?.id?.length ?? 0) % 5

  return (
    <svg
      role="img"
      aria-label={img?.alt ?? 'Temporary salon artwork'}
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{
        display: 'block',
        background,
        borderRadius: round ? '999px 999px 8px 8px' : 'inherit',
      }}
    >
      <circle cx={80 + variant * 30} cy={110 + (variant % 2) * 40} r="90" fill={c} opacity="0.25" />
      <path d={`M0 ${300 - variant * 12} C 90 ${230 + variant * 10}, 190 ${360 - variant * 8}, 300 ${250 + variant * 8} V400 H0Z`} fill={c} opacity="0.5" />
      <path d={`M${60 + variant * 20} 400 C ${70 + variant * 20} 240, ${200 - variant * 10} 220, ${250 - variant * 20} 400`} fill="none" stroke={c} strokeWidth="3" />
    </svg>
  )
}
