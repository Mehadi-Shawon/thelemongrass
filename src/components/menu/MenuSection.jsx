import { menuPhotos } from '../../data/menuPhotos.js'
import Photo from '../ui/Photo.jsx'
import MenuItem from './MenuItem.jsx'
import './MenuSection.css'

export default function MenuSection({ section }) {
  const labels = section.priceLabels.length > 1 ? section.priceLabels : null
  const photo = menuPhotos[section.id]

  // Two columns that each read top to bottom, like the printed menu.
  const half = Math.ceil(section.items.length / 2)
  const columns = [section.items.slice(0, half), section.items.slice(half)].filter((items) => items.length)

  return (
    <section id={section.id} className="menu-section">
      <header className={`menu-section__header ${photo ? 'menu-section__header--photo' : ''}`.trim()} data-reveal>
        <div className="menu-section__heading">
          <h2 className="menu-section__title">{section.name}</h2>
          {section.note && <p className="menu-section__note">{section.note}</p>}
        </div>
        {photo && (
          <div className="menu-section__photo">
            <Photo src={photo.image} alt={photo.alt} position={photo.position} />
          </div>
        )}
      </header>

      <div className="menu-section__columns" data-reveal style={{ '--reveal-delay': '120ms' }}>
        {columns.map((items, i) => (
          <div key={i} className="menu-section__column">
            {labels && (
              <div
                className={`menu-section__labels ${i > 0 ? 'menu-section__labels--repeat' : ''}`.trim()}
                aria-hidden="true"
              >
                {labels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            )}
            <ul className="menu-section__items" role="list">
              {items.map((item) => (
                <MenuItem key={item.id} item={item} labels={labels} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
