import { useEffect, useState } from 'react'
import { nav, contact } from '../data'
import Magnetic from '../components/Magnetic'
import Glass from '../components/Glass'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header__inner header__bar has-glass">
        <Glass radius={34} backgroundOpacity={0.7} />
        <a href="#top" className="brand" aria-label="Argus — início">
          <img src={`${import.meta.env.BASE_URL}argus-white.webp`} alt="" className="brand__mark" />
          <span className="brand__name">ARGUS</span>
        </a>

        <nav className="nav" aria-label="Principal">
          {nav.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span className="nav__clip"><span data-text={item.label}>{item.label}</span></span>
            </a>
          ))}
          <a className="nav__mobile-cta btn btn--primary" href="#contato" onClick={() => setOpen(false)}>
            Iniciar projeto
          </a>
        </nav>

        <div className="header__actions">
          <Magnetic>
            <a className="btn btn--ghost btn--sm has-glass" href="#contato"><Glass radius={21} />Iniciar projeto</a>
          </Magnetic>
          <button
            className="burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>
      <a
        className="wa-float"
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1l1.8.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2z" /></svg>
      </a>
    </header>
  )
}
