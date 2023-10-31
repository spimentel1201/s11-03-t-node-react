import { useState, useEffect } from 'react'
import useClientPets from '../calendar/useClientPets'
import useClientById from '../calendar/useClientById'
import CalendarUserCitas from './agendaCitasListado'

type Props = {
  token: string
  filtro: undefined | boolean
}

const AgendaCitas = ({ token, filtro }: Props) => {
  const [id, setId] = useState<string>('')
  const { clientData } = useClientPets(token)
  const [updateAppointments, setUpdateAppointments] = useState<boolean>(false)
  const { appointmentsByPets } = useClientById(token, id, updateAppointments)

  useEffect(() => {
    if (clientData) setId(clientData.data._id)
  }, [clientData])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20">       
        Citas Agendados
      </h1>      
      <h2 className="text-sm mb-4 text-center">
        {clientData && clientData?.data && clientData?.data?.fullname}
      </h2>
      {appointmentsByPets &&
        appointmentsByPets?.length > 0 &&
        appointmentsByPets.map((p: any, index: number) => (
          <div key={index}>
            <CalendarUserCitas
              token={token}
              image={p.pet.photo_url}
              name={p.pet.name}
              appointments={p.appointments}
              updateAppointments={updateAppointments}
              setUpdateAppointments={setUpdateAppointments}
              filtro={filtro}
            />
          </div>
        ))}
    </div>
  )
}

export default AgendaCitas
