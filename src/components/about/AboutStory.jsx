import { story } from '../../data/about.js'
import LemonSlice from '../ui/LemonSlice.jsx'
import Photo from '../ui/Photo.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import './AboutStory.css'

export default function AboutStory() {
  return (
    <section className="section">
      <div className="container about-story">
        {/* Overlapping two-photo collage with a small lemon slice tucked behind. */}
        <div className="about-story__collage">
          <LemonSlice className="about-story__lemon" />
          <div className="about-story__main">
            <Photo
              src={story.mainImage.image}
              alt={story.mainImage.alt}
              position={story.mainImage.position}
              label="Ingredients photo"
            />
          </div>
          <div className="about-story__inset">
            <Photo
              src={story.insetImage.image}
              alt={story.insetImage.alt}
              position={story.insetImage.position}
              label="Kitchen photo"
            />
          </div>
        </div>

        <div className="about-story__content">
          <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          {story.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
