'use client'

import { HamburgerIcon, VetcareIcon, SignIcon } from '../icons'
import DropDownMobile from './dropDownMobile'
import NavBarLogic from './navBarLogic'
import { useRouter } from 'next/navigation'
import DropdownMobileWithLogin from './dropdownMobileWithLogin'
import UseToken from '@/app/hooks/useToken'
import UseTokenValidity from '@/app/hooks/useTokenValidity'
import { Phone, Location } from '../../home/contacto/icons'

export default function NavBar() {
  const { token } = UseToken()
  UseTokenValidity(token)
  const router = useRouter()

  return (
    <>
    <div className="relative flex items-center gap-6 md:gap-8 w-screen pl-6 md:pl-20 py-2 bg-[#2F2D53] text-[#D9D9D9] font-500 text-[12px] md:text-[18px] font-medium">
      <span className='flex gap-2 items-center'>
        <Location />
        Urquiza 1234, CABA
      </span>
      <span className='flex gap-2 items-center'>
        <Phone />
        +1 234 567 890
      </span>
    </div>
    <nav className="md:pr-10 md:pl-20 px-5 bg-secondary shadow md:flex md:items-center md:justify-between md:h-[98px] h-[55px] ">
      <div className="flex justify-between items-center h-[55px] ">
        <div
          className="flex flex-row cursor-pointer"
          onClick={() => router.push('/')}
        >
          <span className="text-2xl font-[Poppins] cursor-pointer md:hidden">
            <VetcareIcon />
          </span>
          <div className="flex items-center">
          <span className="hidden md:block text-accent text-2xl leading-[38px] font-normal font-mochiy tracking-widest">
            Vet
          </span>
          <span className="hidden md:block ">
            <VetcareIcon />
          </span>
          <span className="hidden md:block text-accent text-2xl font-normal leading-[38px] font-mochiy tracking-widest">
            care
          </span>
          </div>
        </div>
        <span className="text-3xl cursor-pointer mx-2 md:hidden">
          {!token ? <DropDownMobile /> : <DropdownMobileWithLogin />}
        </span>
      </div>
      <NavBarLogic />
    </nav>
    </>
  )
}
