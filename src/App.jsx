import { useCallback, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import LiquidEther from './components/LiquidEther'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Services from './sections/Services'
import Process from './sections/Process'
import Projects from './sections/Projects'
import Differentials from './sections/Differentials'
import Plans from './sections/Plans'
import Testimonials from './sections/Testimonials'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [ready, setReady] = useState(false)
  const done = useCallback(() => setReady(true), [])

  // revelação genérica: qualquer elemento com data-reveal surge ao entrar na tela
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const els = gsap.utils.toArray('[data-reveal]')
    gsap.set(els, { opacity: 0, y: 40, filter: 'blur(6px)' })
    const triggers = ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: batch => gsap.to(batch, {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out', stagger: 0.08, overwrite: true,
        clearProps: 'filter',
      }),
    })

    // barra de progresso de leitura
    const bar = gsap.to('.progress', {
      scaleX: 1, ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
    })
    return () => { triggers.forEach(t => t.kill()); bar.scrollTrigger?.kill() }
  }, [])

  useEffect(() => {
    if (ready) ScrollTrigger.refresh()
  }, [ready])

  return (
    <>
      <Preloader onDone={done} />
      <Cursor />
      <div className="progress" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      {/* Fluido fixo atrás do site inteiro — anima sozinho, não reage ao mouse/toque */}
      <div className="ether-bg" aria-hidden="true">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#000000']}
          mouseForce={20}
          cursorSize={100}
          persistence={0.75}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          intensity={1}
          viscosity={0}
          resolution={0.5}
          clickBurst
          bounceEdges={false}
          intro
          lightMode={false}
          interactive={false}
        />
      </div>
      <Header />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Projects />
        <Differentials />
        <Plans />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
