import Hero from '../components/home/Hero.jsx'
import Intro from '../components/home/Intro.jsx'
import SignatureDishes from '../components/home/SignatureDishes.jsx'
import Features from '../components/home/Features.jsx'
import VisitUs from '../components/home/VisitUs.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SignatureDishes />
      <Features />
      <VisitUs />
      <CtaBanner />
    </>
  )
}
