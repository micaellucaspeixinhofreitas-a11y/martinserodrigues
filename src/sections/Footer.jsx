import { nav, contact } from '../data'
import Icon from '../components/Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={`${import.meta.env.BASE_URL}argus-white.webp`} alt="" className="footer__mark" />
            <p>Design, código e performance para marcas que querem ser vistas.</p>
          </div>
          <nav className="footer__nav" aria-label="Rodapé">
            {nav.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
            <a href="#contato">Contato</a>
          </nav>
          <div className="footer__social">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={20} /></a>
            <a href={`mailto:${contact.email}`} aria-label="E-mail"><Icon name="mail" size={20} /></a>
          </div>
        </div>
        <p className="footer__word" aria-hidden="true">ARGUS</p>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Argus. Todos os direitos reservados.</span>
          <a href="#top">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  )
}
