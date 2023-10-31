"use client"
import axios from "axios";
import MascotaImage from "../mascotaModal/mascotaImage";
import SubmitButton, { CancelarButton } from "../mascotaModal/submitButton";
import UserData from "@/app/hooks/perfil/userData";
import UseToken from "@/app/hooks/useToken";


export async function updateDtaUser({ id,token,data}: { id: number | null, token:string|null, data:any }) {

  return await axios.put(
    `https://s11-03-react-node-production.up.railway.app/api/v1/clients/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}


export default function FormContent(){
  const {userId} = UserData()
  const {token} = UseToken()
  
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const formData = {
      fullname: e.target.fullname?.value,
      phone: e.target.phone?.value,
      email: e.target.email?.value,
      password: e.target.password?.value,
    };
  const data = await updateDtaUser({id:userId,token:token, data:formData})
  console.log(data)
  }

  
    return(
      <div>
        <form onSubmit={handleSubmit}>
      <MascotaImage />
      <label
        htmlFor="ingrese el nombre"
        className="text-slate-800 text-base font-medium font-inter leading-none mb-[3px]"
      >
        Nombre y apellido
      </label>
      <input
        type="text"
        placeholder="Ingresa tu nombre y apellido"
        className="w-full
      h-[62px] px-[23px] py-[21px] bg-gray-100 rounded-md border
       border-gray-200 text-gray-500  md:w-full mb-4"
        name="fullname"
      />
      {/* <label className='text-error'>{state?.fullname}</label> */}
      <label
        htmlFor=""
        className="text-slate-800 text-base font-medium 
      font-inter leading-none mb-[3px] mt-7"
      >
        Telefono
      </label>
    
      <input
        type="number"
        placeholder="Ej: +54 9 11 1234-5678"
        className="w-full 
      h-[62px] px-[23px] py-[21px] bg-gray-100 rounded-md border
       border-gray-200 text-gray-500  md:w-full mb-4"
        name="phone"
      />
      <label
        htmlFor="ingrese el nombre"
        className="text-slate-800 text-base font-medium font-inter leading-none mb-[3px]"
      >
        Correo Electronico
      </label>
      <input
        type="text"
        placeholder="vetcarefamily@gmail.com"
        className="w-full
      h-[62px] px-[23px] py-[21px] bg-gray-100 rounded-md border
       border-gray-200 text-gray-500  md:w-full mb-4"
        name="fullname"
      />
      {/* <label className='text-error'>{state?.fullname}</label> */}
      <label
        htmlFor=""
        className="text-slate-800 text-base font-medium 
      font-inter leading-none mb-[3px] mt-7"
      >
       Contraseña
      </label>
    
      <input
        type="password"
        placeholder="************"
        className="w-full 
      h-[62px] px-[23px] py-[21px] bg-gray-100 rounded-md border
       border-gray-200 text-gray-500  md:w-full"
        name="password"
      />
      <SubmitButton text="Confirmar cambios" />
    </form>
    <CancelarButton />
    </div>
    )
}