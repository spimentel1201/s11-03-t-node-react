"use client"
import { useRouter } from "next/navigation";
export default function SubmitButton() {
    const router = useRouter();
  return (
    <section className="mt-[26px]">
      <div className="w-full h-[67px] px-[31px] py-[17px] bg-orange-500 rounded-md border border-orange-500 flex-col justify-center items-center inline-flex">
        <button type="submit" className="text-center text-white text-base font-medium font-['Inter'] leading-7">
          Agregar Mascota
        </button>
      </div>
      <div className="w-full mt-[23px] h-[67px] pl-[30.88px] pr-[30.51px] py-[17px] bg-amber-300 rounded-md border border-amber-300 flex-col justify-center items-center inline-flex">
        <button onClick={() => router.push("/perfil")} className="text-center text-slate-800 text-base font-medium font-inter leading-7">
          Cancelar
        </button>
      </div>
    </section>
  );
}
