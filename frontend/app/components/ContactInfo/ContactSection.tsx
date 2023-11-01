import { Message, Phone, Location } from '../../home/contacto/icons'

function ContactSection() {
  return (
    <section className="bg-background h-[320px] md:h-[186px] bg-cover mb-[76px] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 lg:gap-36 font-medium text-[#475467] text-sm lg:text-xl ">
      <div className="flex gap-6 items-center">
        <span className="w-10 h-10 bg-[#FF5B2E] rounded-full justify-center items-center inline-flex">
          <Phone />
        </span>
        +1 234 567 890
      </div>
      <div className="flex gap-6 items-center">
        <span className="w-10 h-10 bg-[#FF5B2E] rounded-full justify-center items-center inline-flex">
          <Message />
        </span>
        vetcarefamily@gmail.com
      </div>
      <div className="flex gap-6 items-center">
        <span className="w-10 h-10 bg-[#FF5B2E] rounded-full justify-center items-center inline-flex">
          <Location />
        </span>
        Urquiza 1234, CABA
      </div>
    </section>
  )
}

export default ContactSection
