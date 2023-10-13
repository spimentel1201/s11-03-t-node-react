import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './home/navBar'
import NuestrasCaracteristicas from './home/nuestrasCaracteristicas'
import NuestroTeam from './home/nuestroTeam'

export default function Home() {
  return (
    <main >
      <NuestrasCaracteristicas /> 
      <NuestroTeam />
    </main>
  )
}
