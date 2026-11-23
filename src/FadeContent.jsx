import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Estado inicial de cada efeito; todos animam para o estado "visível" abaixo.
const EFFECTS = {
  fade: { opacity: 0 },
  mist: { opacity: 0, filter: 'blur(12px)', y: 16, scale: 1.03 },
  blur: { opacity: 0, filter: 'blur(10px)' },
  rise: { opacity: 0, y: 40 },
  zoom: { opacity: 0, scale: 0.92 },
}

const VISIBLE = { opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }

export default function FadeContent({
  children,
  effect = 'fade',
  duration = 1,
  ease = 'power2.out',
  delay = 0,
  stagger = 0,
  threshold = 0.1,
  once = true,
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger > 0 && el.children.length ? el.children : el
    const from = EFFECTS[effect] ?? EFFECTS.fade

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(targets, VISIBLE)
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, from, {
        ...VISIBLE,
        duration,
        ease,
        delay,
        stagger,
        scrollTrigger: {
          trigger: el,
          // dispara quando `threshold` (0–1) do elemento entrou na tela
          start: `top ${100 - threshold * 100}%`,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
          once,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [effect, duration, ease, delay, stagger, threshold, once])

  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
    </div>
  )
}
