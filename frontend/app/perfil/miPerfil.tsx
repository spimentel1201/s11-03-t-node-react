"use client";
import Image from "next/image";
import UserData from "../hooks/perfil/userData";
import { useRouter } from "next/navigation";
import UseToken from '@/app/hooks/useToken'
import UseTokenValidity from '@/app/hooks/useTokenValidity'
import { useEffect } from 'react'
import { useLoader } from "../hooks/useLoader";
import { Loader } from "../components/loader";

export default function MiPerfil() {
  const { data } = UserData();
  const route = useRouter()
  const { isLoading, closeLoader } = useLoader(true)
  const handleClickGoToEditProfile = () =>{
    const modal = document.getElementById("my_modal_9") as HTMLDialogElement;
        modal?.showModal();
        route.push('/perfil/editarPerfil',{scroll:false})
  }  
  const { token } = UseToken()
  UseTokenValidity(token)
  useEffect(() => {
    !token && route.push('/')
    if(data){
      closeLoader()
    }
  }, [token,data])

 

 

  return (
    <section className="md:px-[82px] px-[19px]">
      
      <h1 className="md:mt-[68px] mt-[27px] mb-4 md:text-[32px] text-xl font-normal text-center">
        MI PERFIL
      </h1>
      <div
        className=" bg-amber-300 rounded-bl-[100px] shadow md:mt-[35px] 
       flex flex-col justify-center items-center ju md:flex-row 
      md:px-[264px] md:gap-x-[79px] py-[22px] "
      >
        <Image
          src={
            data?.data.photo_url ||
            'https://res.cloudinary.com/dxq0pypxu/image/upload/v1696476957/nn12qmebo7v6qhbwbkdf.png'
          }
          width={90}
          height={90}
          priority
          className="rounded-full bg-primary w-[90px] h-[90px]  md:w-[305px]  md:h-[295px]"
          alt="userImage"
        />

        <div className=" flex flex-col  md:gap-y-[29px] gap-y-[14px]">
        <Loader isLoading={isLoading} />
          <h2 className="md:text-[32px] text-center md:text-left font-semibold">
            {data?.data.fullname}
          </h2>
          <span className="md:text-3xl font-normal font-inter">
            {data?.data.email}
          </span>
          <button onClick={handleClickGoToEditProfile} className=" md:h-[62px] h-[33px] btn btn-accent capitalize text-primary rounded-md border bg-accent border-accent">
            Editar Perfil
          </button>
        </div>
      </div>
    </section>
  )
}
