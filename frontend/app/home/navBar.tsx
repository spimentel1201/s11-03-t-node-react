"use client";
import Link from "next/link";
import { HamburgerIcon, VetcareIcon, SignIcon } from "./icons";
import { useState } from "react";
import { useRouter,usePathname } from 'next/navigation';
import DropDown from "./dropdown";
import NavLink from "./navLink";
import DropDownMobile from "./dropDownMobile";


export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false);


  return (
    <nav className="px-5 bg-secondary shadow md:flex md:items-center md:justify-between md:h-[98px] h-[55px]">
      <div className="flex justify-between items-center h-[55px]">
        <span className="text-2xl font-[Poppins] cursor-pointer md:hidden">
          <VetcareIcon />
        </span>
        <span className="hidden md:block text-accent text-sm font-normal">
          Vet
        </span>
        <span className="hidden md:block">
          <VetcareIcon />
        </span>
        <span className="hidden md:block text-accent text-sm font-normal">
          care
        </span>
        <div className="dropdown dropdown-end">
        <span className="text-3xl cursor-pointer mx-2 md:hidden">
          <DropDownMobile />
          
        </span>
        </div>
      </div>

      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-secondary w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <NavLink href="/" >
            Home
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink href="/servicios" >
            Servicios
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink href="/adopta" >
            Adopta
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink href="/nosotros" >
            Nosotros
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink href="/contacto">
            Contacto
          </NavLink>
        </li>
        <li>
        <span className="mx-4 my-6 link " >
          <DropDown />
          </span>
        </li>
      </ul>
    </nav>
  );

  }