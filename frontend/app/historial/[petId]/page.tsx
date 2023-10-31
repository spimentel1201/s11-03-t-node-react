import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/footer/footer";
import HistorySection from "./components/HistorySection";
import { getPetById } from "../services/getPetById";

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
    <div className="relative flex flex-col h-[100vh]">
      <HistorySection pet={pet?.data} />
      <Footer />
    </div>
  );
}
