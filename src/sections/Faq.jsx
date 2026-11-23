import { useState } from 'react'
import { faq } from '../data'
import Icon from '../components/Icons'
import SectionHead from './SectionHead'
import Glass from '../components/Glass'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <SectionHead
          eyebrow="// Dúvidas frequentes"
          title={<>Perguntas <span className="grad">frequentes.</span></>}
          text="Não encontrou o que procurava? Me chame no WhatsApp — respondo em até 24 horas."
        />
        <div className="faq">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item has-glass ${isOpen ? 'is-open' : ''}`} key={item.q} data-reveal>
                <Glass radius={16} refract />
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <Icon name="plus" size={20} />
                </button>
                <div className="faq__a" id={`faq-${i}`} role="region">
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
