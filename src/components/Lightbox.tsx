import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Picture from './Picture'
export default function Lightbox({ id, onClose }: { id: string; onClose: () => void }) {
  const btn = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'; btn.current?.focus()
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); if (e.key === 'Tab') { e.preventDefault(); btn.current?.focus() } }
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = overflow; prev?.focus() }
  }, [onClose])
  return (
    <div role="dialog" aria-modal="true" aria-label="Gallery image" className="fixed inset-0 z-50 grid place-items-center bg-espresso/90 p-4" onClick={onClose}>
      <button ref={btn} onClick={onClose} aria-label="Close image" className="absolute right-4 top-4 grid size-12 place-items-center bg-ivory text-espresso"><X /></button>
      <div className="w-full max-w-[min(90vw,70vh*0.8)]" onClick={e => e.stopPropagation()}><Picture id={id} /></div>
    </div>
  )
}
