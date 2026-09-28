import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import './Logo.css'

// Lemon-slice mark based on the brand logo — swap for the real logo file once provided.
function LemonMark() {
  return (
    <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 12C19 7 16.5 3.5 13 2c2.5 3 4 6.5 4.6 10.5M20 12c.8-4.5 3-8 6.5-10-2 3.2-3.2 6.8-3.8 10.6" fill="#2f9e44" />
      <circle cx="20" cy="24" r="15" fill="#f6e03c" />
      <circle cx="20" cy="24" r="15" fill="none" stroke="#f39200" strokeWidth="2" />
      <path d="M20 24V39M20 24 7 31.5M20 24l13 7.5M20 24 7 16.5M20 24l13-7.5" stroke="#1d1d1b" strokeWidth="1.6" />
      <circle cx="20" cy="24" r="2.2" fill="#1d1d1b" />
    </svg>
  )
}

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label={`${site.name} home`}>
      <LemonMark />
      <span className="logo__text">
        <span className="logo__name">{site.name}</span>
        {site.tagline && <span className="logo__tagline">{site.tagline}</span>}
      </span>
    </Link>
  )
}
