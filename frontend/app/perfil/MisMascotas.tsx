"use client";
import Link from "next/link";
import { AddIcon, DeleteIcon } from "./icons";
import { useRouter } from "next/navigation";


export default function MisMascostas() {
  const router = useRouter();

  const handleClick = () => {
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    modal?.showModal();
  
    router.push("/perfil/mascotaModal", {scroll:false});
  };

  return (
    <section
      className=" flex justify-between pl-[119px] 
    md:pl-[611px] pr-[19px] md:pr-[81px] mt-[26px] md:mt-[79px]"
    >
      <div className="flex justify-center ">
        <h1 className="md:text-[32px] text-xl">Mis Mascostas</h1>
      </div>
      <div className="flex justify-end gap-x-[7px] ">
        <span
          onClick={handleClick}
          className="cursor-pointer"
        >
          <AddIcon />
        </span>
        <span className="cursor-pointer">
          <DeleteIcon />
        </span>
      </div>
    </section>
  );
}
