"use client"
import { useRouter } from "next/navigation";
import { Close } from "../icons";
import FormContent from "./formContent";
import {  useRef } from "react";

export default function EditarPerfilPage(){
 
  const buttonRef = useRef<HTMLButtonElement | null >(null)
    const route = useRouter()
   const handleGoBackToProfile = () => {

    if(buttonRef.current){
      buttonRef.current.click()
     
      route.push('/perfil',{scroll:false})
    }
  }
    
   
  
    return (
<dialog id="my_modal_9" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog" className="flex justify-end">
          <button ref={buttonRef} onClick={handleGoBackToProfile}  >
              <Close />
          </button>
        </form>
        <div className="flex flex-col">
          <FormContent onClick={handleGoBackToProfile} />
        </div>
      </div>
      <div className="modal-action"></div>
    </dialog>
    )
}