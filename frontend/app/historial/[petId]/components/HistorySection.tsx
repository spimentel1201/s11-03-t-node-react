import Image from "next/image";
import HistoryCardsContainer from "../components/HistoryCardsContainer";
import UseToken from "@/app/hooks/useToken";
import { PetData } from "../../models/petData.model";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AppointmentData } from "../../models/appointmentData.model";
import { Loader } from "@/app/components/loader";
import { useLoader } from "@/app/hooks/useLoader";

interface Props {
  petData: PetData;
  petAppointments: AppointmentData[];
}

export default function HistorySection({ petData, petAppointments }: Props) {
  const { data } = UseToken();
  const router = useRouter();
  const {isLoading, openLoader} = useLoader();

  useEffect(() => {
    if (!petData) {
      router.push("/");
    } else {
      if (data) {
        if (data.clientId === petData.clientId) {
          openLoader();
        } else {
          router.push("/");
        }
      } else {
        if (data === null) {
          router.push("/");
        }
      }
    }
  }, [data]);

  return !isLoading ? (
    <div className="relative min-h-[80vh] flex justify-center items-center"><Loader isLoading={!isLoading}/></div>
  ) : (
    <div className="min-h-[80vh] md:min-h-[60vh]">
      <div className="relative flex flex-col items-center py-4 md:py-8 gap-2 md:gap-6">
        <h3 className="text-[24px] md:text-[32px] text-[#062D3E]">HISTORIAL</h3>
        <div className="flex items-center px-8 py-2 gap-8 h-20 shadow-[1px_1px_8px_0px_rgba(102,102,102,0.1)]">
          <div className="relative flex items-center justify-center rounded-full overflow-y-hidden bg-gray-500 h-[63px] w-[63px]">
            <Image fill src={petData.photo_url} alt="pet picture" />
          </div>
          <span className="text-[20px] md:text-[28px] font-medium font-inter text-[#2F2D53]">
            {petData.name}
          </span>
        </div>
      </div>
      <HistoryCardsContainer appointments={petAppointments} />
    </div>
  );
}
