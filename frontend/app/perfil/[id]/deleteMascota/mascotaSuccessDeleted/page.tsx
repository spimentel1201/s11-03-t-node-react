"use client"
import { Close, Tick } from "@/app/perfil/icons";
import { useRouter } from "next/navigation";

export default function SuccessDeleted(){
    const route = useRouter()
    
    return<dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
    <div className="modal-box ">
      <form method="dialog" className="flex justify-end mb-[19px]">
        {/* if there is a button in form, it will close the modal */}
        <button>
          <Close />
        </button>
      </form>
      <div className="flex justify-center mb-[21px]">
      <span>
        
      <Tick />
      </span>
      </div>
      <div className="px-5 ">
        <h1 className="text-black text-2xl font-semibold text-center font-inter mb-[37px]">
        Ya se eliminó el registro de tu mascota.
        </h1>
        <form method="dialog" className="flex flex-col">
         
          <button onClick={() => {route.push("/perfil", {scroll:false})}} className="py-4 bg-accent rounded-md border border-accent text-center text-white text-base font-medium font-inter">
            Volver a mi perfil.
          </button>
        </form>
      </div>
      <div className="modal-action"></div>
    </div>
  </dialog>
}