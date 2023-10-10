"use client"
import Link from "next/link";
import { HamburgerIcon, VetcareIcon } from "./icons";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="p-5 bg-primary shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <VetcareIcon />
        </span>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <HamburgerIcon />
        </span>
      </div>

      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            SERVICE
          </a>
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
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            BLOG
          </a>
        </li>
      </ul>
    </nav>
  );
}
