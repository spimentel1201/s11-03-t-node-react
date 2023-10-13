import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './home/navBar'
import NuestrasCaracteristicas from './home/nuestrasCaracteristicas'
import NuestroTeam from './home/nuestroTeam'
import AgendarTurnoSection from './home/agendarTurnoSection'

export default function Home() {
  return (
    <main>
      <AgendarTurnoSection />
      <NuestrasCaracteristicas /> 
      <NuestroTeam />
    </main>
  )
}
