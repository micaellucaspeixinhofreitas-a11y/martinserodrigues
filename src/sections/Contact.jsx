import { useState } from 'react'
import { contact } from '../data'
import Icon from '../components/Icons'
import Magnetic from '../components/Magnetic'
import Glass from '../components/Glass'

const types = ['Landing page', 'Site institucional', 'E-commerce', 'Sistema / web app', 'Redesign', 'Outro']
const budgets = ['Até R$ 2 mil', 'R$ 2–5 mil', 'R$ 5–10 mil', 'Acima de R$ 10 mil']

// Sem back-end: o formulário monta a mensagem e abre o WhatsApp.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: types[0], budget: budgets[1], message: '' })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = e => {
    e.preventDefault()
    const text = [
      'Olá, Argus! Quero iniciar um projeto.',
      `Nome: ${form.name}`,
      `Contato: ${form.email}`,
      `Tipo: ${form.type}`,
      `Investimento: ${form.budget}`,
      form.message && `Sobre o projeto: ${form.message}`,
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <section className="section contact" id="contato">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="eyebrow" data-reveal>// Vamos conversar</p>
          <h2 className="section-title contact__title" data-reveal>
            Seu próximo site <span className="grad">começa aqui.</span>
          </h2>
          <p className="section-text" data-reveal>
            Conte um pouco sobre o seu projeto. Em até 24 horas você recebe um retorno com os próximos passos e uma
            proposta personalizada — sem compromisso.
          </p>
          <ul className="contact__links" data-reveal>
            <li><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20} /> WhatsApp</a></li>
            <li><a href={`mailto:${contact.email}`}><Icon name="mail" size={20} /> {contact.email}</a></li>
            <li><a href={contact.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" size={20} /> Instagram</a></li>
          </ul>
        </div>

        <form className="card form has-glass" onSubmit={submit} data-reveal>
          <Glass radius={20} />
          <div className="form__row">
            <label className="field">
              <span>Seu nome</span>
              <input required value={form.name} onChange={e => set('name', e.target.value)} placeholder="Como posso te chamar?" />
            </label>
            <label className="field">
              <span>E-mail ou WhatsApp</span>
              <input required value={form.email} onChange={e => set('email', e.target.value)} placeholder="Para eu te responder" />
            </label>
          </div>

          <fieldset className="field">
            <legend>Tipo de projeto</legend>
            <div className="chips">
              {types.map(t => (
                <button type="button" key={t} className={`chip ${form.type === t ? 'is-on' : ''}`} aria-pressed={form.type === t} onClick={() => set('type', t)}>{t}</button>
              ))}
            </div>
          </fieldset>

          <fieldset className="field">
            <legend>Investimento previsto</legend>
            <div className="chips">
              {budgets.map(b => (
                <button type="button" key={b} className={`chip ${form.budget === b ? 'is-on' : ''}`} aria-pressed={form.budget === b} onClick={() => set('budget', b)}>{b}</button>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span>Sobre o projeto</span>
            <textarea rows="4" value={form.message} onChange={e => set('message', e.target.value)} placeholder="Objetivo, referências, prazo..." />
          </label>

          <Magnetic strength={0.15}>
            <button className="btn btn--primary btn--block" type="submit">
              Enviar pelo WhatsApp <Icon name="arrow" size={18} />
            </button>
          </Magnetic>
        </form>
      </div>
    </section>
  )
}
