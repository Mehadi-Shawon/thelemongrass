import { site } from '../data/site.js'
import ContactDetails from '../components/contact/ContactDetails.jsx'
import ContactMap from '../components/contact/ContactMap.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Visit or call us"
        text={`Book a table, order takeaway or ask about the menu — we're a phone call away in ${site.locality}.`}
      />

      <section className="section">
        <div className="container contact">
          <ContactDetails />
          <ContactMap />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
