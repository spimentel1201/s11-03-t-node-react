import Image from "next/image";

export default function HistoryCard() {
  return (
    <div className="flex flex-col md:flex-row w-4/5 py-4 px-8 justify-between gap-6 rounded-[10px] shadow-[1px_1px_8px_0px_rgba(102,102,102,0.1)]">
      <div className="flex flex-col gap-4">
        <h3 className="text-[18px] md:text-[26px] xl:text-[32px] text-[#062D3E] line-clamp-1">
          Cathy J. Gomez - Veterinaria Clínica
        </h3>
        <div className="text-[14px] md:text-[24px] xl:text-[28px] text-[#667085]">
          <p className="font-semibold md:line-clamp-1">Motivo de la cita: 
          <samp className="font-medium font-inter"> Problemas en la piel y pelaje.</samp></p>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between items-center pt-1 gap-4 text-[14px] md:text-[24px] xl:text-[28px] text-[#000000]">
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
          <span className="min-w-full">Hora: 17hs.</span>
        </span>
      </div>
    </div>
  );
}
