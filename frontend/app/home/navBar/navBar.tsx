'use client'

import { HamburgerIcon, VetcareIcon, SignIcon } from '../icons'
import DropDownMobile from './dropDownMobile'
import NavBarLogic from './navBarLogic'
import { useRouter } from 'next/navigation'
import DropdownMobileWithLogin from './dropdownMobileWithLogin'
import UseToken from '@/app/hooks/useToken'
import UseTokenValidity from '@/app/hooks/useTokenValidity'

export default function NavBar() {
  const { token } = UseToken()
  UseTokenValidity(token)
  const router = useRouter()

  return (
    <nav className="md:pr-10 md:pl-20 px-5 bg-secondary shadow md:flex md:items-center md:justify-between md:h-[98px] h-[55px] ">
      <div className="flex justify-between items-center h-[55px] ">
        <div
          className="flex flex-row cursor-pointer"
          onClick={() => router.push('/')}
        >
          <span className="text-2xl font-[Poppins] cursor-pointer md:hidden">
            <VetcareIcon />
          </span>
          <span className="hidden md:block text-accent text-2xl leading-[38px] font-normal font-['Mochiy Pop One'] tracking-widest">
            Vet
          </span>
          <span className="hidden md:block ">
            <VetcareIcon />
          </span>
          <span className="hidden md:block text-accent text-2xl font-normal leading-[38px] font-['Mochiy Pop One'] tracking-widest">
            care
          </span>
        </div>
        <span className="text-3xl cursor-pointer mx-2 md:hidden">
          {!token ? <DropDownMobile /> : <DropdownMobileWithLogin />}
        </span>
      </div>
      <NavBarLogic />
    </nav>
  )
}
