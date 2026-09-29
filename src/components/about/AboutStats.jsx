import { stats } from '../../data/about.js'
import BrushEdge from '../ui/BrushEdge.jsx'
import CountUp from '../ui/CountUp.jsx'
import './AboutStats.css'

// "The menu in numbers" — every figure is counted from menu.js.
export default function AboutStats() {
  return (
    <section className="stats" aria-label="The menu in numbers">
      <BrushEdge position="top" color="var(--color-bg-alt)" flip />
      <div className="container stats__grid">
        {stats.map((stat, i) => (
          <div key={stat.label} className="stat" data-reveal style={{ '--reveal-delay': `${i * 120}ms` }}>
            <span className="stat__value">
              <CountUp value={stat.value} />
            </span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
