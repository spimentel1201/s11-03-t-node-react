import Image from "next/image";
import { AppointmentData } from "../../models/appointmentData.model";
import { formatDate, extractTimeFromDate } from "../../utils/dateUtils";
import { getInfoById } from "@/app/components/agenda/agendaCitasListado";

interface Props {
  appointment: AppointmentData;
}

export default function HistoryCard({ appointment }: Props) {

  const veterinarian = appointment.veterinarianId;

  return (
    <div className="flex flex-col md:flex-row w-10/12 py-4 px-8 justify-between gap-6 rounded-[10px] shadow-[1px_1px_8px_0px_rgba(102,102,102,0.1)]">
      <div className="flex flex-col w-100 md:w-3/4">
        <h3 className="text-[18px] md:text-[26px] xl:text-[32px] text-[#062D3E] line-clamp-1">
          {veterinarian?.fullname + " - " + veterinarian?.speciality}
        </h3>
        <div className="text-[14px] md:text-[24px] xl:text-[28px] text-[#667085]">
          <p className="font-semibold md:line-clamp-1">Motivo de la cita: 
          <samp className="font-medium font-inter"> {appointment.reason}</samp></p>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between items-start w-auto text-[14px] md:text-[24px] xl:text-[28px] text-[#000000]">
        <span className="flex items-center gap-4">
          <Image
            src="/icons/calendar-week.svg"
            width={19}
            height={16}
            alt="sveltia"
          />
          <h4 className="leading-6">{formatDate(appointment.date)}</h4>
        </span>
        <span className="flex items-center gap-4">
          <Image
            src="/icons/alarm-fill.svg"
            width={19}
            height={16}
            alt="alarm fill"
          />
          <span className="min-w-full">{`Hora: ${extractTimeFromDate(appointment.start_time)}hs.`}</span>
        </span>
      </div>
    </div>
  );
}
