import { hero } from '../../data/home.js'
import { site } from '../../data/site.js'
import { telHref } from '../../utils/links.js'
import BrushEdge from '../ui/BrushEdge.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import HeroArt from './HeroArt.jsx'
import './Hero.css'

const srcSet = (files) => files.map(([src, width]) => `${src} ${width}w`).join(', ')

export default function Hero() {
  const phone = site.phones[0]
  const image = hero.image
  // "The Lemon Grass" breaks as "The / Lemon Grass", never splitting the name.
  const [firstWord, ...restOfTitle] = hero.title.split(' ')
  const hours = site.hours[0]

  return (
    <section className={`hero ${hero.image ? 'hero--photo' : ''}`.trim()}>
      <div className="hero__media">
        {image ? (
          // The photo covers the whole hero, so on screens narrower than the photo's
          // shape it's scaled to the screen height: `sizes` tells the browser that width.
          <picture>
            {image.portrait && (
              <source
                media="(max-aspect-ratio: 4/5)"
                srcSet={srcSet(image.portrait)}
                sizes="(max-aspect-ratio: 2/3) 67vh, 100vw"
              />
            )}
            <img
              src={image.landscape.at(-1)[0]}
              srcSet={srcSet(image.landscape)}
              sizes="(max-aspect-ratio: 3/2) 151vh, 100vw"
              alt=""
              className="hero__image"
              style={{ '--position': image.position, '--position-portrait': image.portraitPosition }}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        ) : (
          <HeroArt className="hero__art" />
        )}
      </div>

      <div className="container hero__content">
        <span className="hero__eyebrow">{hero.eyebrow}</span>
        <h1 className="hero__title">
          {firstWord} <span className="hero__title-keep">{restOfTitle.join(' ')}</span>
        </h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__actions">
          <Button to="/menu">View Our Menu</Button>
          <Button href={telHref(phone)} variant="outline-light">
            Book a Table
          </Button>
        </div>
      </div>

      <div className="container">
        <ul className="hero__info">
          <li>
            <Icon name="pin" size={20} />
            <span>
              {site.address.street}
              <span className="hero__area-full">, {site.address.area}</span>
              <span className="hero__area-short">, {site.locality}</span>
            </span>
          </li>
          <li>
            <Icon name="phone" size={20} />
            <a href={telHref(phone)} className="hero__nowrap">
              {phone}
            </a>
          </li>
          <li>
            <Icon name="clock" size={20} />
            <a href="#visit">
              {hours ? (
                <>
                  {hours.short ?? hours.days} <span className="hero__nowrap">{hours.time}</span>
                </>
              ) : (
                'Opening hours'
              )}
            </a>
          </li>
        </ul>
      </div>

      <BrushEdge color="var(--color-bg)" />
    </section>
  )
}
