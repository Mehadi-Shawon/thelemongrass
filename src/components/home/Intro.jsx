import { Link } from 'react-router-dom'
import { intro } from '../../data/home.js'
import Icon from '../ui/Icon.jsx'
import Photo from '../ui/Photo.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import './Intro.css'

export default function Intro() {
  return (
    <section className="section">
      <div className="container intro">
        <div className="intro__media" data-reveal="left">
          <Photo src={intro.image} alt={intro.imageAlt} position={intro.imagePosition} label="Restaurant photo" />
        </div>

        <div className="intro__content" data-reveal style={{ '--reveal-delay': '150ms' }}>
          <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />
          {intro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link to="/about" className="text-link">
            Read our story <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
