import { Metadata } from 'next/types'
import { Consultas } from '../components/consultas/consultas'
import Contactanos from './contactanos'
import ContactSection from '../components/ContactInfo/ContactSection'
import VetcareInformation from './vetcareInformation'
import Footer from '../components/footer/footer'
import Whatsapp from './../components/whatsapp/whatsapp'
export const metadata: Metadata = {
  title: 'Contacto',
}

export default function Contacto() {
  return (
    <main className="md:bg-secondary-content">
      <Contactanos />
      <div className="flex justify-center mb-16">
        <Consultas />
      </div>
      <ContactSection />
      <Footer />
      <Whatsapp />
    </main>
  )
}
