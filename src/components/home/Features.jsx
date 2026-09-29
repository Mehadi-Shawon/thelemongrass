import { features } from '../../data/home.js'
import BrushEdge from '../ui/BrushEdge.jsx'
import Icon from '../ui/Icon.jsx'
import './Features.css'

export default function Features() {
  return (
    <section className="features">
      <BrushEdge position="top" color="var(--color-bg-alt)" />
      <div className="container features__grid">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="feature"
            data-reveal
            style={{ '--reveal-delay': `${i * 140}ms` }}
          >
            <span className="feature__icon">
              <Icon name={feature.icon} size={28} />
            </span>
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__text">{feature.text}</p>
          </div>
        ))}
      </div>
      <BrushEdge color="var(--color-bg)" />
    </section>
  )
}
