import { aboutHero } from '../data/about.js'
import AboutSharing from '../components/about/AboutSharing.jsx'
import AboutStats from '../components/about/AboutStats.jsx'
import AboutStory from '../components/about/AboutStory.jsx'
import AboutValues from '../components/about/AboutValues.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import PageHero from '../components/ui/PageHero.jsx'

export default function About() {
  return (
    <>
      <PageHero eyebrow={aboutHero.eyebrow} title={aboutHero.title} text={aboutHero.text} flipEdge />
      <AboutStory />
      <AboutSharing />
      <AboutValues />
      <AboutStats />
      <CtaBanner edgeAbove="var(--color-dark)" />
    </>
  )
}
