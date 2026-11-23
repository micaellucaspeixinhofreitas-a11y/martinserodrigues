import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Magnetic from '../components/Magnetic'
import Icon from '../components/Icons'
import Glass from '../components/Glass'

const line1 = ['Sites', 'que', 'enxergam']
const line2 = ['além', 'do', 'óbvio.']

export default function Hero({ ready }) {
  const root = useRef(null)
  const logo = useRef(null)

  // animação de entrada (dispara quando o preloader termina)
  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('.hero__word > span', { yPercent: 115, rotate: 6, duration: 1.3, stagger: 0.07 })
        .from('.hero__eyebrow', { opacity: 0, y: 20, duration: 1 }, 0.2)
        .from('.hero__lead, .hero__ctas', { opacity: 0, y: 30, duration: 1.1, stagger: 0.12 }, 0.5)
        .from('.hero__logo', { opacity: 0, scale: 0.85, x: 120, rotate: -8, duration: 2 }, 0.1)
        .from('.hero__hud > *', { opacity: 0, y: 10, duration: 0.8, stagger: 0.08 }, 0.9)
    }, root)
    return () => ctx.revert()
  }, [ready])

  // parallax do logo cromado com o mouse e com o scroll
  useEffect(() => {
    const el = logo.current
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: 40, rotate: 6, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    if (!window.matchMedia('(pointer: fine)').matches) return () => ctx.revert()
    const rx = gsap.quickTo(el, 'rotateY', { duration: 1.2, ease: 'power3' })
    const ry = gsap.quickTo(el, 'rotateX', { duration: 1.2, ease: 'power3' })
    const move = e => {
      rx((e.clientX / window.innerWidth - 0.5) * 18)
      ry((e.clientY / window.innerHeight - 0.5) * -14)
    }
    window.addEventListener('pointermove', move)
    return () => { window.removeEventListener('pointermove', move); ctx.revert() }
  }, [])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow eyebrow">
            <span className="pulse" /> Disponível para novos projetos
          </p>
          <h1 className="hero__title">
            <span className="hero__line">
              {line1.map(w => <span className="hero__word" key={w}><span>{w}</span></span>)}
            </span>
            <span className="hero__line">
              {line2.map(w => (
                <span className={`hero__word ${w === 'óbvio.' ? 'grad' : ''}`} key={w}><span>{w}</span></span>
              ))}
            </span>
          </h1>
          <p className="hero__lead">
            Eu sou a <strong>Argus</strong> — estúdio de criação de sites que une design autoral, código de alta
            performance e animações que prendem o olhar. Landing pages, sites institucionais e e-commerces
            feitos para transformar visitantes em clientes.
          </p>
          <div className="hero__ctas">
            <Magnetic>
              <a href="#contato" className="btn btn--primary">
                Quero meu site <Icon name="arrow" size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projetos" className="btn btn--ghost has-glass"><Glass radius={27} refract />Ver projetos</a>
            </Magnetic>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__orbit"><span /><span /><span /></div>
          <img ref={logo} src={`${import.meta.env.BASE_URL}argus-chrome.webp`} alt="" className="hero__logo" />
        </div>
      </div>

      <div className="container hero__hud" aria-hidden="true">
        <span>[ 01 — DESIGN ]</span>
        <span>[ 02 — CÓDIGO ]</span>
        <span>[ 03 — PERFORMANCE ]</span>
        <a href="#servicos" className="scroll-cue">Role <i /></a>
      </div>
    </section>
  )
}
