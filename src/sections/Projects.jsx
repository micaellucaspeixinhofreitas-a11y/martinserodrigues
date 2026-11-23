import { projects } from '../data'
import Icon from '../components/Icons'
import SectionHead from './SectionHead'
import Glass from '../components/Glass'

// leve inclinação 3D no hover
const tilt = e => {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  el.style.setProperty('--rx', `${y * -8}deg`)
  el.style.setProperty('--ry', `${x * 10}deg`)
}
const reset = e => {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

// Mockup gerado em CSS — troque por <img> com o print real do projeto
function Mock({ hue, title }) {
  return (
    <div className="mock" style={{ '--h': hue }}>
      <div className="mock__bar"><i /><i /><i /><span>{title.toLowerCase().replace(' ', '')}.com.br</span></div>
      <div className="mock__screen">
        <div className="mock__nav"><b /><span /><span /><span /></div>
        <div className="mock__hero">
          <div><b /><b /><span /><em /></div>
          <div className="mock__orb" />
        </div>
        <div className="mock__cards"><span /><span /><span /></div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <SectionHead
          eyebrow="// Projetos selecionados"
          title={<>Trabalhos que <span className="grad">falam por si.</span></>}
          text="Uma amostra de projetos recentes — cada um pensado do zero para os objetivos de quem confiou na Argus."
        />
        <div className="projects">
          {projects.map(p => (
            <a href="#contato" className="project has-glass" key={p.title} onPointerMove={tilt} onPointerLeave={reset} data-reveal data-hover>
              <Glass radius={26} refract />
              <Mock hue={p.hue} title={p.title} />
              <div className="project__info">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.category} · {p.year}</p>
                </div>
                <span className="project__go"><Icon name="arrow" size={20} /></span>
              </div>
              <span className="project__result">{p.result}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
