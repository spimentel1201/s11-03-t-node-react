import { useState, useEffect } from 'react'
import Image from 'next/image'
import useClientPets from './useClientPets'
import useClientById from './useClientById'
import CalendarUserCitas from './calendarUserCitas'

type Props = {
  token: string
}

const CalendarUser = ({ token }: Props) => {
  const [id, setId] = useState<string>('')
  const { clientData } = useClientPets(token)
  const { appointmentsByPets } = useClientById(token, id)

  console.log(appointmentsByPets)

  useEffect(() => {
    if (clientData) setId(clientData.data._id)
  }, [clientData])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20">
        {' '}
        Turnos Agendados
      </h1>
      <h2 className="text-sm text-center">
        cliente: {clientData && clientData?.data && clientData?.data?._id}
      </h2>
      <h2 className="text-sm mb-4 text-center">
        cliente: {clientData && clientData?.data && clientData?.data?.fullname}
      </h2>

      {appointmentsByPets &&
        appointmentsByPets?.length > 0 &&
        appointmentsByPets.map((p: any, index: number) => (
          <div key={index}>
            <CalendarUserCitas
              image={p.pet.photo_url}
              name={p.pet.name}
              appointments={p.appointments}
            />
          </div>
        ))}
      {appointmentsByPets && appointmentsByPets?.length == 0 && (
        <h2 className="text-sm mb-4 text-center">No hay citas agendadas</h2>
      )}
    </div>
  )
}

export default CalendarUser
