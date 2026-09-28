import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site, navLinks } from '../../data/site.js'
import useScrolled from '../../hooks/useScrolled.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { telHref } from '../../utils/links.js'
import Logo from './Logo.jsx'
import './Header.css'

export default function Header({ overlay = false }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)
  const transparent = overlay && !scrolled && !open
  const close = () => setOpen(false)

  const classes = ['header', transparent && 'header--transparent', open && 'header--open']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="container header__inner">
        <Logo onClick={close} />

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="main-nav" className="header__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="header__link"
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <Button href={telHref(site.phones[0])} className="header__cta">
            Book a Table
          </Button>
        </nav>
      </div>
    </header>
  )
}
