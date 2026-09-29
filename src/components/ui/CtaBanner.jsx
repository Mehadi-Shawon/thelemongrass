import { Link } from 'react-router-dom'
import { cta } from '../../data/home.js'
import { site } from '../../data/site.js'
import { mapsHref, telHref } from '../../utils/links.js'
import BrushEdge from './BrushEdge.jsx'
import Icon from './Icon.jsx'
import LemonSlice from './LemonSlice.jsx'
import './CtaBanner.css'

// Wraps the highlighted word of the title in a marker-pen style span.
function Title({ text, highlight }) {
  const at = highlight ? text.lastIndexOf(highlight) : -1
  if (at < 0) return text
  return (
    <>
      {text.slice(0, at)}
      <span className="cta__highlight">{highlight}</span>
      {text.slice(at + highlight.length)}
    </>
  )
}

// A large tappable action: icon, small label, big value, arrow.
function ActionTile({ to, href, icon, label, value, variant = 'light', ...linkProps }) {
  const className = `cta-tile cta-tile--${variant}`
  const content = (
    <>
      <span className="cta-tile__icon">
        <Icon name={icon} size={22} />
      </span>
      <span className="cta-tile__text">
        <span className="cta-tile__label">{label}</span>
        <span className="cta-tile__value">{value}</span>
      </span>
      <Icon name="arrow" size={20} className="cta-tile__arrow" />
    </>
  )

  return to ? (
    <Link to={to} className={className} {...linkProps}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className} {...linkProps}>
      {content}
    </a>
  )
}

// The booking banner that closes every page — identical everywhere: call to book and
// directions. `edgeAbove` is the colour of the section above it, which the torn top
// edge blends into.
export default function CtaBanner({ edgeAbove = 'var(--color-bg)' }) {
  const [mainPhone, ...otherPhones] = site.phones

  return (
    <section className="cta">
      <BrushEdge position="top" color={edgeAbove} />
      <LemonSlice className="cta__art" />

      <div className="container cta__inner">
        <div className="cta__content" data-reveal>
          {cta.eyebrow && <span className="cta__eyebrow">{cta.eyebrow}</span>}
          <h2 className="cta__title">
            <Title text={cta.title} highlight={cta.highlight} />
          </h2>
          <p className="cta__text">{cta.text}</p>
        </div>

        <div className="cta__actions" data-reveal style={{ '--reveal-delay': '150ms' }}>
          <ActionTile
            href={telHref(mainPhone)}
            icon="phone"
            label="Call to book or order"
            value={mainPhone}
            variant="dark"
          />
          <ActionTile
            href={site.mapUrl || mapsHref(site.address)}
            icon="pin"
            label={`Find us in ${site.locality}`}
            value="Get directions"
            target="_blank"
            rel="noreferrer"
          />
          {otherPhones.length > 0 && (
            <p className="cta__alt">
              Also on{' '}
              {otherPhones.map((phone, i) => (
                <span key={phone}>
                  {i > 0 && ', '}
                  <a href={telHref(phone)}>{phone}</a>
                </span>
              ))}
            </p>
          )}
        </div>
      </div>

      <BrushEdge color="var(--color-dark)" />
    </section>
  )
}
