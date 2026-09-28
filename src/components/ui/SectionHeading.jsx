import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  )
}
