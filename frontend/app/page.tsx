import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './home/navBar/navBar'
import NuestrasCaracteristicas from './home/nuestrasCaracteristicas'
import NuestroTeam from './home/nuestroTeam'
import AgendarTurnoSection from './home/agendarTurno/agendarTurnoSection'
import Mascotas from './home/mascotas/mascotas'
import SobreNosotros from './home/sobrenosostros/sobreNosotros'
import NuestrosServicios from './home/nuestrosServicios'
import Contacto from './home/contacto/contacto'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <main>
      <AgendarTurnoSection />
      <Mascotas />
      <SobreNosotros />
      <NuestrosServicios />
      <NuestrasCaracteristicas /> 
      <NuestroTeam />
      <Contacto />
      <Footer />
    </main>
  )
}
