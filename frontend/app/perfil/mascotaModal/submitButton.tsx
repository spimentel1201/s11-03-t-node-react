"use client"
import { useRouter } from "next/navigation";

export default function SubmitButton({text}: {text: string}) {

  return (
    <section className="mt-[26px]">
      <div className="w-full h-[67px] mb-[23px] btn btn-accent bg-orange-500 rounded-md border border-orange-500 flex-col justify-center items-center inline-flex">
        <button
         
          type="submit"
          className="text-center text-white  leading-7"
        >
         {text}
        </button>
      </div>
    </section>
  );
}
 export function CancelarButton(){
  const router = useRouter();

  const handleGoBackPerfil =() => {
     router.push("/perfil",{scroll:false}) 
   

  }
  return (
    <form method="dialog" >
    <button
          className=" w-full h-[67px] bg-amber-300 rounded-md border border-amber-300 text-slate-800 text-base  font-medium font-inter"
          onClick={handleGoBackPerfil}
        >
          Cancelar
        </button>
        </form>
  )
 }