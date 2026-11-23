import { differentials } from '../data'
import Icon from '../components/Icons'
import SectionHead from './SectionHead'

export default function Differentials() {
  return (
    <section className="section diff">
      <div className="diff__eye" aria-hidden="true">
        <img src="/argus-white.webp" alt="" />
      </div>
      <div className="container">
        <SectionHead
          center
          eyebrow="// Por que a Argus"
          title={<>Cem olhos em cada <span className="grad">detalhe.</span></>}
        />
        <div className="diff__grid">
          {differentials.map((d, i) => (
            <div className="diff__item" key={d.title} data-reveal>
              <span className="diff__icon"><Icon name={i === 0 ? 'eye' : 'check'} size={22} /></span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
