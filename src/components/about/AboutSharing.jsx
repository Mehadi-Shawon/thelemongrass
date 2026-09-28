import { sharing } from '../../data/about.js'
import BrushEdge from '../ui/BrushEdge.jsx'
import Button from '../ui/Button.jsx'
import Photo from '../ui/Photo.jsx'
import './AboutSharing.css'

// Full-width photo band linking to the shareable parts of the menu.
export default function AboutSharing() {
  return (
    <section className={`sharing ${sharing.image ? 'sharing--photo' : ''}`.trim()}>
      <div className="sharing__media">
        <Photo src={sharing.image} alt={sharing.imageAlt} position={sharing.imagePosition} label="Sharing photo" />
      </div>
      <BrushEdge position="top" color="var(--color-bg)" flip />

      <div className="container sharing__content">
        <span className="sharing__eyebrow">{sharing.eyebrow}</span>
        <h2 className="sharing__title">{sharing.title}</h2>
        <p className="sharing__text">{sharing.text}</p>
        <div className="sharing__actions">
          <Button to="/menu#set-menu">See the Set Menus</Button>
          <Button to="/menu#for-3-persons" variant="outline-light">
            Dishes for Three
          </Button>
        </div>
      </div>

      <BrushEdge color="var(--color-bg-alt)" flip />
    </section>
  )
}
