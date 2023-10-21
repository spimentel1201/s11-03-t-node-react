"use client"
import { addConsulta } from "@/app/_api/consulta";
import toast from 'react-hot-toast';
import {useState} from "react"

const notify = (msg:string) => toast.success(msg);

export function useConsultas(){

  const initialState = {
    fullname:"",
    email:"",
    message:""  
   }
   const [state, setState] = useState(initialState);
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget
        const formData = new FormData(form)
        const fullname = formData.get("fullname") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
    
        try {
          const data = await addConsulta(fullname, email, message);
          if (data.status === "success") {
            notify(data.message);
          }
          if (data.errors) {
            setState({
              fullname: data.errors.fullname ? data.errors.fullname[0] : "",
          email: data.errors.email ? data.errors.email[0] : "",
          message: data.errors.message ? data.errors.message[0] : "",
            });
           
          } else {
            form.reset();
            setState(initialState);
          }
        } catch (error) {
          error
        }
    
      }
      return {state, handleSubmit}
}


