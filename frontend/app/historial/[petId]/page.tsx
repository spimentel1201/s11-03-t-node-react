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
  const response:any = await fetchPet(params.petId);

  return (
    <div className="relative flex flex-col">
      <HistorySection pet={response?.data} />
      <Footer />
    </div>
  );
}
