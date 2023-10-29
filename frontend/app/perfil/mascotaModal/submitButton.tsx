"use client";
import { useUpdateMutations } from "@/app/store/mascota/updateMutation";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function SubmitButton() {

  const updateMutations = useUpdateMutations((state) => state.updateMutations)
  const router = useRouter();
  const handleMascotaCreada = () => {
    
        const modal = document.getElementById("my_modal_7") as HTMLDialogElement;
        modal?.showModal();
        
    
      
  };
  // const handleMascotaCreada = async () => {
  //   try {
  //     // Assuming updateMutations is set to true when the data is successfully sent
  //     if (updateMutations) {
  //       console.log("Data submitted successfully");

  //       // Move the navigation inside the try block
  //       await router.push("/perfil/mascotaModal/mascotaCreada", { scroll: false });

  //       // Show the modal after navigation
  //       const modal = document.getElementById("my_modal_7") as HTMLDialogElement;
  //       modal?.showModal();
  //     } else {
  //       // Handle the case where data submission fails
  //       console.error("Data submission failed", error);
  //     }
  //   } catch (error) {
  //     console.error("Error while processing data submission", error);
  //   }
  // };
  
  return (
    <section className="mt-[26px]">
      <div className="w-full h-[67px] mb-[23px] bg-orange-500 rounded-md border border-orange-500 flex-col justify-center items-center inline-flex">
        <button
          onClick={handleMascotaCreada}
          type="submit"
          className="text-center text-white  leading-7"
        >
          Agregar Mascota
        </button>
      </div>
      
        <button
          className=" w-full h-[67px] bg-amber-300 rounded-md border border-amber-300 text-slate-800 text-base  font-medium font-inter"
          onClick={() => router.push("/perfil")}
        >
          Cancelar
        </button>
    </section>
  );
}
