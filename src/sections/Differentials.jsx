import { differentials } from '../data'
import Icon from '../components/Icons'
import ElectricLogo from '../components/ElectricLogo'
import SectionHead from './SectionHead'
import Glass from '../components/Glass'

export default function Differentials() {
  return (
    <section className="section diff">
      <div className="container">
        {/* Logo da Argus "eletrificado" — reage ao mouse e solta descargas ao clicar */}
        <div className="diff__electric">
          <ElectricLogo
            src={`${import.meta.env.BASE_URL}argus-white.webp`}
            color="#ecc7ff"
            glowColor="#ad6dff"
            scale={0.7}
            strands={4}
            bend={0.6}
            crackle={1.5}
            arcs={1}
            speed={2.5}
            interactive
            intensity={1}
            glow={1}
            thickness={1.5}
            flicker={0.6}
            fill={0}
            cursorIntensity={0.75}
            cursorRadius={100}
          />
          <span className="diff__hint" aria-hidden="true">[ passe o mouse · clique ]</span>
        </div>

        <SectionHead
          center
          eyebrow="// Por que a Argus"
          title={<>Cem olhos em cada <span className="grad">detalhe.</span></>}
        />
        <div className="diff__grid has-glass">
          <Glass radius={20} refract />
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
