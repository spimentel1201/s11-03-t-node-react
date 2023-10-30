import Image from 'next/image'
import petsHome from '../../assets/petsHome-big.png'
import Link from 'next/link'
import { FingerPrint, BiggerFingerprint } from '../icons'
import Balancer from 'react-wrap-balancer'

export default function agendarTurnoSection() {
  return (
    <div className="flex items-center justify-center px-10 bg-secondary-content">
      <div className="relative w-full max-w-[90rem]">
        <section
          className="relative bg-secondary-content flex flex-col 
    items-center justify-center px-[21px]  pb-8 md:items-start md:pl-28 md:h-[650px]"
        >
          <span className="absolute top-[80px] left-[20px]  md:top-[630px]  md:left-32">
            <FingerPrint />
          </span>
          <span className=" hidden md:block md:absolute md:top-[150px] md:right-[20px]">
            <FingerPrint />
          </span>
          <span className="hidden md:block md:absolute md:bottom-[190px] md:right-0">
            <BiggerFingerprint />
          </span>
          <Image
            src={petsHome}
            alt="Pets Home"
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            className="w-[25rem] md:w-[25rem] lg:w-[40rem] 2xl:w-[50rem] h-auto md:absolute md:bottom-[-8px] md:right-[70px] bg-cover"
          />
          <h1
            className="text-[#062D3E] text-[20px] leading-[26px] 
      font-normal text-center mt-5 md:text-6xl md:text-left max-w-3xl"
          ><Balancer> No hay nada más importante para nosotros que tu mascota</Balancer>
          </h1>
          <p
            className="text-center text-gray-500 
      text-sm font-normal font-inter leading-relaxed mt-5 mb-[25px] md:text-left"
          >
            Las mascotas son humanizantes. Nos <br className="md:hidden" />{' '}
            recuerdan que <br className="hidden md:block" />
            tenemos la obligación y la <br className="md:hidden" />{' '}
            responsabilidad de
            <br />
            preservar, nutrir y cuidar toda la vida.
          </p>
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
    </div>
  )
}
