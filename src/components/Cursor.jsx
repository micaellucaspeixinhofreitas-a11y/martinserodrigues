import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Cursor customizado (apenas em dispositivos com mouse)
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.documentElement.classList.add('has-cursor')
    const xDot = gsap.quickTo(dot.current, 'x', { duration: 0.1 })
    const yDot = gsap.quickTo(dot.current, 'y', { duration: 0.1 })
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power3' })
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power3' })

    const move = e => { document.documentElement.classList.add('cursor-live'); xDot(e.clientX); yDot(e.clientY); xRing(e.clientX); yRing(e.clientY) }
    const over = e => {
      const hit = e.target.closest('a, button, [data-hover]')
      ring.current.classList.toggle('is-hover', !!hit)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => {
      document.documentElement.classList.remove('has-cursor', 'cursor-live')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
