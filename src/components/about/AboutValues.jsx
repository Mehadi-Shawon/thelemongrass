import { values } from '../../data/about.js'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import './AboutValues.css'

export default function AboutValues() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="What we're about" title="Simple promises we keep" align="center" reveal />

        <div className="values">
          {values.map((value, i) => (
            // The wrapper carries the reveal, so the card's own hover lift is untouched.
            <div
              key={value.title}
              className="value-reveal"
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <article className="value">
                <span className="value__icon">
                  <Icon name={value.icon} size={24} />
                </span>
                <h3 className="value__title">{value.title}</h3>
                <p className="value__text">{value.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
