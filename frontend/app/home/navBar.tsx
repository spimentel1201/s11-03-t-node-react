"use client";
import Link from "next/link";
import { HamburgerIcon, VetcareIcon, SignIcon } from "./icons";
import { useState } from "react";
import { useRouter,usePathname } from 'next/navigation';


export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

 const handleClick = ()=> {
  if(pathname === "/home/modal"){
  router.back()
  }
 }

  return (
    <nav className="p-5 bg-secondary shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
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
        <span className="text-3xl cursor-pointer mx-2 md:hidden">
          <HamburgerIcon />
        </span>
      </div>

      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <Link href="/" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link href="/servicios" className="text-xl hover:text-cyan-500 duration-500">
            SERVICE
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            CONTACT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link href="/servicios" className="text-xl hover:text-cyan-500 duration-500">
            BLOG
          </Link>
        </li>
        <li>
        <Link  href="/home/modal" className="mx-4 my-6 link " onClick={handleClick} >
          <SignIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );

  }