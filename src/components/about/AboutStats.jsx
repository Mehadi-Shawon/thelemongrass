import { stats } from '../../data/about.js'
import BrushEdge from '../ui/BrushEdge.jsx'
import './AboutStats.css'

// "The menu in numbers" — every figure is counted from menu.js.
export default function AboutStats() {
  return (
    <section className="stats" aria-label="The menu in numbers">
      <BrushEdge position="top" color="var(--color-bg-alt)" flip />
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
