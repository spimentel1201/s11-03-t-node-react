"use client"
import { useRouter } from "next/navigation";
import { Close } from "../icons";
import FormContent from "./formContent";

export default function MascotaModal() {
  const router = useRouter()
  return (

    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog" className="flex justify-end">
          <button>
            <span onClick={() => router.push("/perfil", {scroll:false})}>
              <Close />
            </span>
          </button>
        </form>
        <div className="flex flex-col">
          <FormContent />
        </div>
      </div>
      {/* <label className='text-error'>{state?.email}</label> */}
      <div className="modal-action"></div>
    </dialog>
  );
}
