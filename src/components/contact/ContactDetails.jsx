import { site } from '../../data/site.js'
import { mapsHref, telHref } from '../../utils/links.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import ContactCard from './ContactCard.jsx'

// Call, find and opening-hours cards. Email and social links appear automatically
// once they're filled in in site.js.
export default function ContactDetails() {
  const { street, area, city } = site.address
  const today = new Date().getDay()
  const socials = Object.entries(site.social).filter(([, url]) => url)

  return (
    <div className="contact__details">
      <ContactCard icon="phone" title="Call us">
        <p className="contact-card__note">To book a table or order takeaway.</p>
        <ul className="contact-card__phones">
          {site.phones.map((phone) => (
            <li key={phone}>
              <a href={telHref(phone)} className="contact-phone">
                <span className="contact-phone__icon">
                  <Icon name="phone" size={18} />
                </span>
                <span className="contact-phone__number">{phone}</span>
                <Icon name="arrow" size={18} className="contact-phone__arrow" />
              </a>
            </li>
          ))}
        </ul>
        {site.email && (
          <a className="contact-card__email" href={`mailto:${site.email}`}>
            <Icon name="mail" size={18} /> {site.email}
          </a>
        )}
      </ContactCard>

      <ContactCard icon="pin" title="Find us">
        <address className="contact-card__address">
          {street}
          <br />
          {area.replace(/ (?=Ltd\.)/, '\u00a0')}
          <br />
          {city}
        </address>
        <Button href={site.mapUrl || mapsHref(site.address)} variant="dark" target="_blank" rel="noreferrer">
          <Icon name="pin" size={18} /> Get Directions
        </Button>
      </ContactCard>

      <ContactCard icon="clock" title="Opening hours" className="contact-card--hours">
        <ul className="contact-hours">
          {site.hours.map((row) => {
            const isToday = row.weekdays?.includes(today)
            return (
              <li key={row.days} className={isToday ? 'contact-hours__row is-today' : 'contact-hours__row'}>
                <span className="contact-hours__days">
                  <span className="contact-hours__days-long">{row.days}</span>
                  <span className="contact-hours__days-short">{row.short ?? row.days}</span>
                  {isToday && <span className="contact-hours__today">Today</span>}
                </span>
                {/* Leader and time stay together, so if they wrap they move as one. */}
                <span className="contact-hours__value">
                  <span className="contact-hours__dots" aria-hidden="true" />
                  <span className="contact-hours__time">{row.time}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </ContactCard>

      {socials.length > 0 && (
        <ContactCard icon="users" title="Follow us">
          <ul className="contact-card__socials">
            {socials.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer">
                  <Icon name={name} size={20} /> {name[0].toUpperCase() + name.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </ContactCard>
      )}
    </div>
  )
}
