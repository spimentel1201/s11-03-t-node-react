import ContactSection from '../components/ContactInfo/ContactSection'
import Footer from '../components/footer/footer'
import NuestroTeam from '../home/nuestroTeam'

export default function Team() {
  return (
    <>      
      <NuestroTeam rows={2} />
      <ContactSection />
      <Footer />
    </>
  )
}
