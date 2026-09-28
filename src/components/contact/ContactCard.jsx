import Icon from '../ui/Icon.jsx'

// A white card with an icon badge beside its heading, and its content below at full width.
export default function ContactCard({ icon, title, className = '', children }) {
  return (
    <article className={`contact-card ${className}`.trim()}>
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
