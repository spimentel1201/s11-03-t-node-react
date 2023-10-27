import Image from "next/image";
import fake from "../perfil/fake.svg";

export default function Historial() {
  return (
    <>
      <div className="flex flex-col items-center py-8 gap-6">
        <h3 className="text-[32px] text-[#062D3E]">HISTORIAL</h3>
        <div className="flex items-center px-4 py-2 gap-4 shadow-[1px_1px_8px_0px_rgba(102,102,102,0.1)]">
          <Image src={fake} width={63} height={60} alt="pet picture" />
          <span className="text-[28px] font-medium font-inter text-[#2F2D53]">
            Felix
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-4/5 py-4 px-6 justify-between rounded-[10px] shadow-[1px_1px_8px_0px_rgba(102,102,102,0.1)]">
          <div className="flex flex-col gap-4">
            <h3 className="text-[32px] text-[#062D3E]">
              Cathy J. Gomez - Veterinaria Clínica
            </h3>
            <div className="text-[28px] text-[#667085]">
              <span className="font-semibold">Motivo de la cita: </span>
              <span>Problemas en la piel y pelaje.</span>
            </div>
          </div>
          <div className="flex flex-col pt-1 gap-4 text-[28px] text-[#000000]">
            <span className="flex items-center gap-4">
              <Image
                src="/icons/calendar-week.svg"
                width={19}
                height={16}
                alt="sveltia"
              />
              <h4>16/11/2023</h4>
            </span>
            <span className="flex items-center gap-4">
              <Image
                src="/icons/alarm-fill.svg"
                width={19}
                height={16}
                alt="alarm fill"
              />
              Hora: 17hs.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
