import { Link } from 'react-router-dom'
import { site, navLinks } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'
import { telHref } from '../../utils/links.js'
import Logo from './Logo.jsx'
import './Footer.css'

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url)
  const { street, area, city } = site.address

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>Fresh, flavour-packed food made from scratch every day.</p>
          {socials.length > 0 && (
            <div className="footer__social">
              {socials.map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
                  <Icon name={name} size={20} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="footer__heading">Explore</h3>
          <ul className="footer__list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Visit</h3>
          <ul className="footer__list">
            <li>
              {street}
              <br />
              {area}, {city}
            </li>
            {site.phones.map((phone) => (
              <li key={phone}>
                <a href={telHref(phone)}>{phone}</a>
              </li>
            ))}
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Hours</h3>
          <ul className="footer__list footer__hours">
            {site.hours.map((row) => (
              <li key={row.days}>
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed &amp; developed by{' '}
            <a href="https://qraftdigital.com" target="_blank" rel="noopener">
              QraftDigital.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
