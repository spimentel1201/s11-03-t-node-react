"use client";

import Footer from "@/app/components/footer/footer";
import HistorySection from "./components/HistorySection";
import { getPetById } from "../services/getPetById";
import Image from "next/image";
import { useRouter } from "next/navigation";

async function fetchPet(id: string) {
  return await getPetById(id);
}

export default async function Historial({
  params,
}: {
  params: { petId: string };
}) {
  const router = useRouter();
  const response: any = await fetchPet(params.petId);

  return (
    <div className="relative flex flex-col">
      <div className="left-16 top-12 absolute hidden md:block">
        <Image
          src="/icons/arrow-left-square.svg"
          width={30}
          height={30}
          alt="Go back icon"
          className="hover:scale-105 active:scale-95"
          onClick={() => router.back()}
        />
      </div>
      <HistorySection
        petData={response?.data?.pet}
        petAppointments={response?.data?.appointmentss}
      />
      <Footer />
    </div>
  );
}
