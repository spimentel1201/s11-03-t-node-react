

import Link from "next/link"

import { useState } from "react"
import { SignIcon } from "../icons"

export default function Modal(){
    return(
        <>
    <div className="relative w-[165px] h-[100px] bg-secondary">
      <div className="">
        <div className="flex flex-col absolute top-8 right-0 ">
        <Link href={"/login"} className="">Iniciar Sesion</Link>
        <Link href={"/register"} className="">Registrarse</Link>
        </div>
      </div>
    </div>
   
    </>

    )
}