import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import FadeContent from '../FadeContent'
import { stats } from '../data'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  useEffect(() => {
    const obj = { v: 0 }
    const tween = gsap.to(obj, {
      v: value, duration: 2, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      onUpdate: () => { if (ref.current) ref.current.textContent = Math.round(obj.v) },
    })
    return () => tween.kill()
  }, [value])
  return <><span ref={ref}>0</span>{suffix}</>
}

export default function About() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // texto do manifesto acende palavra por palavra conforme o scroll
      gsap.fromTo('.manifesto .w', { opacity: 0.12 }, {
        opacity: 1, stagger: 0.05, ease: 'none',
        scrollTrigger: { trigger: '.manifesto', start: 'top 80%', end: 'bottom 55%', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const text = 'Na mitologia grega, Argus Panoptes era o gigante de cem olhos que nunca dormia — nada escapava ao seu olhar. É essa a filosofia por trás de cada projeto: enxergar cada detalhe, do pixel à conversão, para criar sites que não apenas impressionam, mas trabalham pelo seu negócio 24 horas por dia.'

  return (
    <section className="section about" id="sobre" ref={root}>
      <div className="container">
        <FadeContent effect="mist" duration={1.6} threshold={0.2}>
          <p className="eyebrow">// Sobre a Argus</p>
        </FadeContent>
        <p className="manifesto">
          {text.split(' ').map((w, i) => <span className="w" key={i}>{w} </span>)}
        </p>

        <div className="stats">
          {stats.map(s => (
            <div className="stat" key={s.label} data-reveal>
              <strong className="stat__value"><Counter value={s.value} suffix={s.suffix} /></strong>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
