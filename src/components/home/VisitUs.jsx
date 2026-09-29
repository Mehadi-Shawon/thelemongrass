import { site } from '../../data/site.js'
import { mapsHref, telHref } from '../../utils/links.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import './VisitUs.css'

export default function VisitUs() {
  const { street, area, city } = site.address

  return (
    <section id="visit" className="section">
      <div className="container visit">
        <div data-reveal>
          <SectionHeading
            eyebrow="Visit Us"
            title="Come hungry, leave happy"
            text="Walk-ins are always welcome. For groups or busy weekend nights, give us a call and we will save you a table."
          />

          <ul className="visit__details">
            <li>
              <Icon name="pin" />
              <span>
                {street}
                <br />
                {area}, {city}
              </span>
            </li>
            <li>
              <Icon name="phone" />
              <span className="visit__phones">
                {site.phones.map((phone) => (
                  <a key={phone} href={telHref(phone)}>
                    {phone}
                  </a>
                ))}
              </span>
            </li>
            {site.email && (
              <li>
                <Icon name="mail" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
          </ul>

          <Button href={site.mapUrl || mapsHref(site.address)} variant="dark" target="_blank" rel="noreferrer">
            Get Directions
          </Button>
        </div>

        <div className="hours" data-reveal="right" style={{ '--reveal-delay': '150ms' }}>
          <div className="hours__header">
            <Icon name="clock" size={26} />
            <h3>Opening Hours</h3>
          </div>
          <ul className="hours__list">
            {site.hours.map((row) => (
              <li key={row.days}>
                <span>{row.days}</span>
                <span className="hours__dots" aria-hidden="true" />
                <span className={row.time === 'Closed' ? 'hours__closed' : ''}>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
