import { tech } from '../data'

export default function Marquee() {
  const items = [...tech, ...tech]
  return (
    <div className="marquee" aria-label="Tecnologias que utilizo">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span key={i} className="marquee__item" aria-hidden={i >= tech.length}>
            {t} <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
