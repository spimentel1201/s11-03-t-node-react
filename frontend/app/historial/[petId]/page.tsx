import Image from "next/image";
import HistoryCardsContainer from "./components/HistoryCardsContainer";
import { getPetById } from "../services/getPetById";
import Footer from "@/app/components/footer/footer";
import Link from "next/link";

async function fetchPet(id: string) {
  return await getPetById(id);
}

export default async function Historial({
  params,
}: {
  params: { petId: string };
}) {
  const pet = await fetchPet(params.petId);

  return (
    <>
      <div className="flex flex-col items-center py-4 md:py-8 gap-2 md:gap-6">
        <div className="left-16 top-36 absolute hidden md:block">
          <Link href="/">
            <Image
              src="/icons/arrow-left-square.svg"
              width={30}
              height={30}
              alt="Go back icon"
            />
          </Link>
        </div>
        <h3 className="text-[24px] md:text-[32px] text-[#062D3E]">HISTORIAL</h3>
        <div className="flex items-center px-8 py-2 gap-8 h-20 shadow-[1px_1px_8px_0px_rgba(102,102,102,0.1)]">
          <div className="relative flex items-center justify-center rounded-full overflow-y-hidden bg-gray-500 h-[63px] w-[63px]">
            <Image fill src={pet.data.photo_url} alt="pet picture" />
          </div>
          <span className="text-[20px] md:text-[28px] font-medium font-inter text-[#2F2D53]">
            {pet.data.name}
          </span>
        </div>
      </div>
      <HistoryCardsContainer appointments={pet.data.appointments} />
      <Footer />
    </>
  );
}
