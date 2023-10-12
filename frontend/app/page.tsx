import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './home/navBar'
import NuestrasCaracteristicas from './home/nuestrasCaracteristicas'

export default function Home() {
  return (
    <main >
      <NuestrasCaracteristicas />
    </main>
  )
}
