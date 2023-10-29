import { useState, useEffect } from 'react'
import { clientByIdService } from '../../_api/clientById'

const useClientById = (token: string, id: string) => {
  const [clientAppointments, setClientAppointments] = useState<null | any>(null)
  const [clientPetsFromClient, setClientPetsFromClient] = useState<null | any>(
    null,
  )
  const [appointmentsByPets, setAppointmentsByPets] = useState<null | any>(null)

  useEffect(() => {
    const fetchData = async (_token: string) => {
      try {
        if (_token && id) {
          const response: any = await clientByIdService(_token, id)
          setClientAppointments(response.data.data.appointments)
          setClientPetsFromClient(
            response.data.data.pets.filter(
              (pet: { isActive: boolean }) => pet.isActive == true,
            ),
          )
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData(token)
  }, [token, id])

  useEffect(() => {
    if (clientAppointments) {
      const array: any = []
      clientPetsFromClient.forEach((pet: { _id: string }) => {
        array.push({
          pet: pet,
          appointments: clientAppointments.filter(
            (appointment: { petId: string }) => appointment.petId == pet._id,
          ),
        })
      })
      setAppointmentsByPets(array)
    }
  }, [clientAppointments, clientPetsFromClient])

  return { appointmentsByPets }
}

export default useClientById
