import { useState, useEffect } from 'react'
import { vetDataService } from '../../_api/vetData'
import { verificarCitasEnHorarios } from './helper'

const useVetData = (vetId: string) => {
  const [appointments, setAppointments] = useState(null)

  function transformarCita(cita) {
    const fecha = new Date(cita.start_time)
    return {
      dia: fecha.getDate(),
      mes: fecha.getMonth(), // Los meses comienzan desde 0 en JavaScript
      año: fecha.getFullYear(),
      hora: fecha.getHours(),
      minuto: fecha.getMinutes(),
      razon: cita.reason,
    }
  }

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        if (id) {
          const response: any = await vetDataService(id)
          const apps = response.data.data.appointments
          const citasTransformed = apps.map(transformarCita)
          setAppointments(citasTransformed)
          const resp = verificarCitasEnHorarios(citasTransformed, 21, 9, 2023)
          console.log(citasTransformed)
          console.log(resp)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(vetId)
  }, [vetId])

  return { appointments }
}

export default useVetData
