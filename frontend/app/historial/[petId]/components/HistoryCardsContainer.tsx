import HistoryCard from "./HisoryCard";
import { AppointmentData } from '../../models/appointmentData.model'

interface Props {
  appointments: AppointmentData[];
}

export default function HistoryCardsContainer({ appointments }: Props) {

  const filterAppointments = appointments.filter((a) => a.isActive === true);

  return (
    <div className="flex flex-col items-center gap-12 pt-22 pb-32">
      {filterAppointments.map(appointment => <HistoryCard key={appointment._id} appointment={appointment}/>)}
    </div>
  );
}
