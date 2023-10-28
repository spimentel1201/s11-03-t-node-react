import Image from "next/image";
import fake from "../../perfil/fake.svg";
import HistoryCardsContainer from "./components/HistoryCardsContainer";

export default function Historial() {
  return (
    <>
      <div className="flex flex-col items-center py-4 md:py-8 gap-2 md:gap-6">
        <div className="left-16 top-36 absolute hidden md:block">
         <Image src="/icons/arrow-left-square.svg" width={30} height={30} alt="Go back icon" />
        </div>
        <h3 className="text-[24px] md:text-[32px] text-[#062D3E]">HISTORIAL</h3>
        <div className="flex items-center px-4 py-2 gap-4 shadow-[1px_1px_8px_0px_rgba(102,102,102,0.1)]">
          <Image src={fake} width={63} height={60} alt="pet picture" />
          <span className="text-[20px] md:text-[28px] font-medium font-inter text-[#2F2D53]">
            Felix
          </span>
        </div>
      </div>
      <HistoryCardsContainer />
    </>
  );
}
