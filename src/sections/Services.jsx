import { services } from '../data'
import Icon from '../components/Icons'
import SectionHead from './SectionHead'
import Glass from '../components/Glass'

// borda luminosa que segue o mouse
const spotlight = e => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <SectionHead
          eyebrow="// Serviços"
          title={<>Tudo que sua marca precisa <span className="grad">para dominar o digital.</span></>}
          text="Do primeiro rascunho ao site no ar: design, desenvolvimento e otimização em um só lugar, com um único responsável pelo resultado."
        />
        <div className="services">
          {services.map((s, i) => (
            <article className="card service has-glass" key={s.title} onPointerMove={spotlight} data-reveal>
              <Glass radius={20} />
              <div className="service__top">
                <span className="service__icon"><Icon name={s.icon} /></span>
                <span className="service__num">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="tags">
                {s.tags.map(t => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
