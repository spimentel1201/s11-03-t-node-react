import { Message, Phone, Location } from "../home/contacto/icons";
export default function VetcareInformation() {
  return (
    <section className=" bg-background md:py-[73px] h-[176px] md:w-[1440px] pt-[30px] mt-[92px] ">
      <div className="flex flex-col md:flex-row   md:justify-between md:px-[190px] pl-[64px] pb-[25px]">
        <div className="flex flex-row items-center gap-x-[11px]  mb-[9px]">
          <span
            className="w-10 h-10 bg-orange-500 rounded-[20px] 
        justify-center items-center inline-flex"
          >
            <Phone />
          </span>
          <h2 className="text-slate-600 text-lg font-medium font-inter leading-7">
            +1 234 567 890
          </h2>
        </div>
        <div className="flex flex-row items-center   mb-[9px] gap-x-5">
          <span
            className="w-10 h-10  bg-orange-500 rounded-[20px] 
        justify-center items-center inline-flex"
          >
            <Message />
          </span>
          <h3 className="text-slate-600 text-lg font-medium font-inter leading-7">
            vetcarefamily@gmail.com
          </h3>
        </div>
        <div className="flex flex-row items-center  gap-x-5">
          <span
            className="w-10 h-10  bg-orange-500 rounded-[20px] 
        justify-center items-center inline-flex"
          >
            <Location />
          </span>
          <h3 className="text-slate-600 text-lg font-medium font-inter leading-7">
            Urquiza 1234, CABA
          </h3>
        </div>
      </div>
    </section>
  );
}
