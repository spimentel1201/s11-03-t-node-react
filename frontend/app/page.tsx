import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './home/navBar'
import NuestrasCaracteristicas from './home/nuestrasCaracteristicas'
import NuestroTeam from './home/nuestroTeam'
import AgendarTurnoSection from './home/agendarTurnoSection'
import Mascotas from './home/mascotas/mascotas'
import SobreNosotros from './home/sobreNosotros'
import NuestrosServicios from './home/nuestrosServicios'
import Contacto from './home/contacto/contacto'
import GaleriaProductos from './home/galeriaProductos'

export default function Home() {
  return (
    <main>
       <AgendarTurnoSection />
      <Mascotas />
      <SobreNosotros />
      <NuestrosServicios />
      <NuestrasCaracteristicas /> 
      <NuestroTeam />
      <GaleriaProductos />
      <Contacto />
    </main>
  )
}
