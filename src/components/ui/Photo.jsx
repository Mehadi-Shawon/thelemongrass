import Icon from './Icon.jsx'
import './Photo.css'

// Shows the photo when `src` is set, otherwise a styled placeholder labelled with
// what should go there — so layouts can be designed before photos arrive.
// `position` is the CSS object-position that keeps the subject in frame when cropped —
// a string, or { narrow, wide } when phone and desktop crops need different framing.
export default function Photo({ src, alt = '', label, position, className = '' }) {
  if (src) {
    const { narrow, wide } = typeof position === 'object' ? position : { narrow: position, wide: position }
    return (
      <img
        src={src}
        alt={alt}
        className={`photo ${className}`.trim()}
        style={position ? { '--position': narrow, '--position-wide': wide } : undefined}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <div className={`photo photo--placeholder ${className}`.trim()} role="img" aria-label={alt || label}>
      <Icon name="leaf" size={28} />
      {label && <span>{label}</span>}
    </div>
  )
}
