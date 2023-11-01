import Icon from '@/app/utils/SvgIcon'

function ContactInfo() {
  return (
    <div className="bg-primary px-4 max-w-[1440px] m-auto">
      <section className="text-[12px] lg:text-[20px] text-[#667085] font-semibold lg:px-[220px] py-[24px]">
        <p>
          SI QUIERES ADOPTAR, PUEDES CONTACTARNOS POR LOS CANALES DE
          COMUNICACIÓN
        </p>
        <p> DISPONIBLES Y TE ADJUNTAREMOS LAS CONDICIONES DE ADOPCIÓN.</p>
      </section>
      <div className="flex flex-col md:flex-row gap-4 md:text-[18px] lg:px-[180px] lg:py-[61px] justify-center lg:gap-[120px]">
        <div className="flex items-center gap-[10px]">
          <Icon icon="phone" />
          <p>+1234 567 890</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <Icon icon="email" />
          <p>vetcarefamily@gmail.com</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <Icon icon="location" />
          <p>Urquiza 1234, CABA</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
