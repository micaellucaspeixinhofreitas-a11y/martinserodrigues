import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { steps } from '../data'
import SectionHead from './SectionHead'
import Glass from '../components/Glass'

export default function Process() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process__beam', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.process', start: 'top 70%', end: 'bottom 60%', scrub: true },
      })
      gsap.utils.toArray('.step').forEach(step => {
        gsap.to(step, {
          scrollTrigger: {
            trigger: step, start: 'top 65%',
            onEnter: () => step.classList.add('is-active'),
            onLeaveBack: () => step.classList.remove('is-active'),
          },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="processo" ref={root}>
      <div className="container process-wrap">
        <div className="process-wrap__head">
          <SectionHead
            eyebrow="// Processo"
            title={<>Do briefing ao <span className="grad">lançamento</span> em 4 etapas.</>}
            text="Um método transparente, com entregas claras e sua aprovação em cada fase. Você sempre sabe o que está acontecendo."
          />
        </div>
        <ol className="process">
          <span className="process__line" aria-hidden="true"><span className="process__beam" /></span>
          {steps.map(s => (
            <li className="step" key={s.n}>
              <span className="step__dot" aria-hidden="true" />
              <div className="step__body card has-glass">
                <Glass radius={20} />
                <div className="step__meta">
                  <span className="step__n">{s.n}</span>
                  <span className="step__time">{s.time}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
