import axios from 'axios'
import App from 'next/app'
const BASE_URL = 'https://s11-03-react-node-production.up.railway.app/api/v1'

const api = axios.create({
  baseURL: BASE_URL,
})

type Appointment = {
  date: Date
  start_time: Date
  end_time: Date
  reason: string
  notes: string
  petId: string
  veterinarianId: string
}

type Data = {
  appointment: Appointment
  token: string
}

export const createAppointment = async (
  appointment: Appointment,
  token: string,
  petSelected: string,
  motivoCita: string,
) => {
  try {
    const res = await api.post(
      '/appointments',
      {
        ...appointment,
        petId: petSelected, // ID de la mascota
        reason: motivoCita, // Motivo de la cita
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return res
  } catch (error: any) {
    console.log(error)
    return error
  }
}

// export const createAppointment = async (
//   appointment: Appointment,
//   token: string,
// ) => {
//   try {
//     const res = await api.post(
//       '/appointments',
//       {
//         date: appointment.date,
//         start_time: appointment.start_time,
//         end_time: appointment.end_time,
//         reason: appointment.reason,
//         notes: appointment.notes,
//         petId: appointment.petId,
//         veterinarianId: appointment.veterinarianId,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     )
//     return res
//   } catch (error) {
//     return error
//   }
// }
