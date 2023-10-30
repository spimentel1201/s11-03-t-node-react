"use client";

import { useRouter } from "next/navigation";

export default function ButtonLogic({petId}) {
  const route = useRouter()

  const handleGoHistorial = (e) => {
    e.preventDefault();
    e.stopPropagation();
    route.push(`/historial/${petId}`);
  }
  return (
 
      <button
        className=" h-[62px] w-[164px] mt-[22px] text-center text-slate-800 text-base 
          font-medium font-inter leading-7 bg-amber-300 rounded-md border border-amber-300"
          onClick={handleGoHistorial}
      >
        Historial
      </button>
    
  );
}
