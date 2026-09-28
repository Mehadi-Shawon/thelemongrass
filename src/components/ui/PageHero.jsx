import BrushEdge from './BrushEdge.jsx'
import './PageHero.css'

// Charcoal title banner for inner pages (Menu, About, Contact). `flipEdge` mirrors the
// torn bottom edge when the next band's edge would otherwise reflect it.
export default function PageHero({ eyebrow, title, text, flipEdge = false, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
        {children}
      </div>
      <BrushEdge color="var(--color-bg)" flip={flipEdge} />
    </section>
  )
}
