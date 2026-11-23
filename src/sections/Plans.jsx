import { plans } from '../data'
import Icon from '../components/Icons'
import Magnetic from '../components/Magnetic'
import SectionHead from './SectionHead'
import Glass from '../components/Glass'

export default function Plans() {
  return (
    <section className="section" id="planos">
      <div className="container">
        <SectionHead
          center
          eyebrow="// Planos"
          title={<>Investimento claro, <span className="grad">sem surpresas.</span></>}
          text="Escolha o ponto de partida ideal. Todo projeto recebe uma proposta detalhada antes de começar."
        />
        <div className="plans">
          {plans.map(p => (
            <article className={`card plan has-glass ${p.featured ? 'is-featured' : ''}`} key={p.name} data-reveal>
              <Glass radius={20} />
              {p.featured && <span className="plan__badge">Mais escolhido</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__desc">{p.desc}</p>
              <div className="plan__price">
                <strong>{p.price}</strong>
                <span>{p.note}</span>
              </div>
              <ul className="plan__list">
                {p.features.map(f => (
                  <li key={f}><Icon name="check" size={18} /> {f}</li>
                ))}
              </ul>
              <Magnetic strength={0.2}>
                <a href="#contato" className={`btn ${p.featured ? 'btn--primary' : 'btn--ghost has-glass'} btn--block`}>
                  {!p.featured && <Glass radius={27} refract />}
                  {p.cta}
                </a>
              </Magnetic>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
