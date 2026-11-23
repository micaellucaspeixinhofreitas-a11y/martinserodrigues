import { testimonials } from '../data'
import SectionHead from './SectionHead'
import Glass from '../components/Glass'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="// Depoimentos" title={<>Quem confiou, <span className="grad">recomenda.</span></>} />
        <div className="testimonials">
          {testimonials.map(t => (
            <figure className="card quote has-glass" key={t.name} data-reveal>
              <Glass radius={20} />
              <span className="quote__mark" aria-hidden="true">“</span>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <span className="quote__avatar" aria-hidden="true">{t.name.split(' ').map(n => n[0]).join('')}</span>
                <span><strong>{t.name}</strong><small>{t.role}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
