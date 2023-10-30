import Image from 'next/image'
import petsHome from '../../assets/petsHome-big.png'
import Link from 'next/link'
import { FingerPrint, BiggerFingerprint } from '../icons'
import Balancer from 'react-wrap-balancer'

export default function agendarTurnoSection() {
  return (
    <div className="flex flex-col">
      <section className="flex items-center justify-center">
        <Image
          src={petsHome}
          alt="Pets Home"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
          className="w-[25rem] h-auto md:bottom-[-8px] md:right-[70px] bg-cover"
        />
      </section>
      <section className="flex flex-col items-center justify-center pb-8">
        <Link href="/servicios" className="">
          <div
            className="btn btn-accent w-[188px] h-[62px] flex-col justify-center 
      items-center inline-flex px-[31px] py-[17px] capitalize text-md"
          >
            agendar cita
          </div>
        </Link>
      </section>
    </div>
  )
}
