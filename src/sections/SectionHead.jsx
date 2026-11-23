export default function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={`section-head ${center ? 'is-center' : ''}`}>
      <p className="eyebrow" data-reveal>{eyebrow}</p>
      <h2 className="section-title" data-reveal>{title}</h2>
      {text && <p className="section-text" data-reveal>{text}</p>}
    </div>
  )
}
