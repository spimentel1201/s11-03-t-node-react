"use client "
import Link from "next/link";
import { Profile } from "../icons";
import { useRouter } from "next/navigation";

export default function DropDownWithLogin(){

const router = useRouter()

  const handleClick = () => {
    localStorage.removeItem("token")

    router.refresh()
  }
  return (
    <>
      <div className="dropdown dropdown-end">
        <span tabIndex={0} className="">
          <Profile />
        </span>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-secondary rounded-box w-52 mt-11 -mr-[18px]"
        >
          <li>
            <Link href={"#"}>Mi Perfil</Link>
          </li>
          <li>
            <Link href={"#"}>Historial de turnos</Link>
          </li>
          <li >
            <Link href={"#"} onClick={handleClick}>Cerrar sesion</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
