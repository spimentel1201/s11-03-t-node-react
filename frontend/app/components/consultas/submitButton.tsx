"use client"

import { Toaster } from "react-hot-toast"


// import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export default function SubmitButton() {
    // const { pending } = useFormStatus()
  
   
    return (
      <div className="flex flex-col items-center md:items-start mt-[28px]">
          <button
            type="submit"
            className="w-[182px] h-[62px]  bg-accent 
        rounded-md border border-accent text-primary text-center"
        // aria-disabled={pending}
       
          >
            Enviar
          </button>
        </div>
    )
  }