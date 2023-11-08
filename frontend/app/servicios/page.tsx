import Image from "next/image";
import ServiceCardsContainer from "./components/ServiceCardsContainer";
import ContactSection from "../components/ContactInfo/ContactSection";
import Footer from "../components/footer/footer";
import NuestroTeam from "../home/nuestroTeam";
import Whatsapp from './../components/whatsapp/whatsapp'

export default function Servicios() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#f8f0ee] pt-0 md:pt-8">
        <div className="flex flex-col items-center py-16 gap-8 md:gap-1">
          <div className="flex gap-1">
            <Image src="/foot.svg" width={19} height={16} alt="foot icon" />
            <p className="font-inter font-bold text-accent">Servicios</p>
          </div>
          <h1 className="font-secular text-[20px] md:text-[40px]">
            Nuestros servicios
          </h1>
        </div>
        <ServiceCardsContainer />
      </div>
      <NuestroTeam rows={2} />
      <ContactSection />
      <Whatsapp />
      <Footer />
    </>
  );
}
