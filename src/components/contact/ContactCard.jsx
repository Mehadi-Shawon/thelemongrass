import Icon from '../ui/Icon.jsx'

// A white card with an icon badge beside its heading, and its content below at full width.
// It eases in as it scrolls into view, `revealDelay` later (to stagger a row of cards).
export default function ContactCard({ icon, title, className = '', revealDelay = '0ms', children }) {
  return (
    <article className={`contact-card ${className}`.trim()} data-reveal style={{ '--reveal-delay': revealDelay }}>
      <header className="contact-card__header">
        <span className="contact-card__icon">
          <Icon name={icon} size={22} />
        </span>
        <h2 className="contact-card__title">{title}</h2>
      </header>
      {children}
    </article>
  )
}
