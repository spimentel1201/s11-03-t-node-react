import Image from "next/image";
import { Message, Phone, Location } from "../home/contacto/icons";
import ServicesCardsContainer from "./components/ServicesCardsContainer";

export default function Servicios() {
  return (
    <div >
      <div className="flex flex-col items-center bg-[#f8f0ee] py-5">
        <div className="flex gap-1 pt-12">
          <Image src="/foot.svg" width={19} height={16} alt="foot icon" />
          <p className="font-inter font-bold text-accent">Servicios</p>
        </div>
        <h1 className="font-secular text-[20px] md:text-[40px] pb-12">
          Nuestros servicios
        </h1>
        <ServicesCardsContainer />
      </div>
      <section className="bg-background h-[320px] md:h-[186px] bg-cover mb-[76px] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 lg:gap-36 font-medium text-[#475467] text-sm lg:text-xl ">
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 bg-[#FF5B2E] rounded-full justify-center items-center inline-flex">
            <Phone />
          </span>
          +1 234 567 890
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 bg-[#FF5B2E] rounded-full justify-center items-center inline-flex">
            <Message />
          </span>
          petcare@gmail.com
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 bg-[#FF5B2E] rounded-full justify-center items-center inline-flex">
            <Location />
          </span>
          Urquiza 1234, CABA
        </div>
      </section>
    </div>
  );
}
