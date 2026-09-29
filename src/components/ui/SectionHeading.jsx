import './SectionHeading.css'

// `reveal` eases the heading in as it scrolls into view (see useScrollReveal).
export default function SectionHeading({ eyebrow, title, text, align = 'left', reveal = false }) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal={reveal ? 'up' : undefined}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  )
}
