import { site } from '../../data/site.js'
import { mapEmbedHref, mapsHref } from '../../utils/links.js'
import Icon from '../ui/Icon.jsx'

// Google map in the site's offset-orange-frame style, with a label strip underneath
// (kept off the map itself so it never hides the pin or Google's controls).
export default function ContactMap() {
  return (
    <div className="contact-map">
      <div className="contact-map__frame">
        <iframe
          className="contact-map__iframe"
          src={site.mapEmbedUrl || mapEmbedHref(site.address, site.mapCenter)}
          title={`Map showing ${site.name} in ${site.locality}, ${site.address.city}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a className="contact-map__label" href={site.mapUrl || mapsHref(site.address)} target="_blank" rel="noreferrer">
          <span className="contact-map__name">{site.name}</span>
          <span className="contact-map__place">
            {site.locality}, {site.address.city}
          </span>
          <span className="contact-map__open">
            Open in Google Maps <Icon name="arrow" size={16} />
          </span>
        </a>
      </div>
    </div>
  )
}
