import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onDone }) {
  const root = useRef(null)
  const num = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { root.current.style.display = 'none'; onDone(); return }
    const counter = { v: 0 }
    const ctx = gsap.context(() => {
      gsap.timeline({ onComplete: onDone })
        .from('.preloader__logo', { opacity: 0, scale: 0.9, filter: 'blur(12px)', duration: 1, ease: 'power3.out' })
        .to(counter, {
          v: 100, duration: 1.4, ease: 'power2.inOut',
          onUpdate: () => { num.current.textContent = String(Math.round(counter.v)).padStart(3, '0') },
        }, 0)
        .to('.preloader__bar i', { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, 0)
        .to('.preloader__inner', { opacity: 0, y: -20, duration: 0.4 })
        .to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.1')
        .set(root.current, { display: 'none' })
    }, root)
    return () => ctx.revert()
  }, [onDone])

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader__inner">
        <img src={`${import.meta.env.BASE_URL}argus-chrome.webp`} alt="" className="preloader__logo" />
        <div className="preloader__meta">
          <span>ARGUS // INICIALIZANDO</span>
          <span ref={num}>000</span>
        </div>
        <div className="preloader__bar"><i /></div>
      </div>
    </div>
  )
}
