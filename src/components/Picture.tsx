import { useState } from 'react'
import { images } from '../data/images'
const bg = {blush:'#E9D6D0',champagne:'#C8AD91',berry:'#8A505D',espresso:'#302725'}
const fg = {blush:'#8A505D',champagne:'#FAF6F1',berry:'#E9D6D0',espresso:'#C8AD91'}
export default function Picture({ id, className = '', eager = false, round = false }: { id: string; className?: string; eager?: boolean; round?: boolean }) {
  const img = images[id]; const [failed, setFailed] = useState(false)
  const style = { aspectRatio: img.ratio, borderRadius: round ? '999px 999px 2px 2px' : 2 }
  if (img.src && !failed)
    return <img src={img.src} alt={img.alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} onError={() => setFailed(true)} className={`w-full object-cover ${className}`} style={style} />
  const c = fg[img.tone]; const v = img.variant
  return (
    <svg role="img" aria-label={img.alt} viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className={`w-full block ${className}`} style={{ ...style, background: bg[img.tone] }}>
      <circle cx={80 + v * 30} cy={110 + (v % 2) * 40} r="90" fill={c} opacity=".25" />
      <path d={`M0 ${300 - v * 12} C 90 ${230 + v * 10}, 190 ${360 - v * 8}, 300 ${250 + v * 8} V400 H0Z`} fill={c} opacity=".5" />
      <path d={`M${60 + v * 20} 400 C ${70 + v * 20} 240, ${200 - v * 10} 220, ${250 - v * 20} 400`} fill="none" stroke={c} strokeWidth="3" />
    </svg>
  )
}
