import Image from "next/image";
import ServiceCardsContainer from "./components/ServiceCardsContainer";
import ContactSection from "../components/ContactInfo/ContactSection";
import Footer from "../components/footer/footer";

export default function Servicios() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#f8f0ee] py-5">
        <div className="flex gap-1 pt-12">
          <Image src="/foot.svg" width={19} height={16} alt="foot icon" />
          <p className="font-inter font-bold text-accent">Servicios</p>
        </div>
        <h1 className="font-secular text-[20px] md:text-[40px] pb-12">
          Nuestros servicios
        </h1>
        <ServiceCardsContainer />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
