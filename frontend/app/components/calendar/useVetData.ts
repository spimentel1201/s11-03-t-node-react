import { useState, useEffect } from 'react'
import { vetDataService } from '../../_api/vetData'
import { verificarCitasEnHorarios } from './helper'

function crearFechaSinAjuste(fechaguardada: string) {
  const fechaOriginal = new Date(fechaguardada)

  const nuevaFecha = new Date(
    fechaOriginal.getUTCFullYear(),
    fechaOriginal.getUTCMonth(),
    fechaOriginal.getUTCDate(),
    fechaOriginal.getUTCHours(),
    fechaOriginal.getUTCMinutes(),
    fechaOriginal.getUTCSeconds(),
    fechaOriginal.getUTCMilliseconds(),
  )

  return nuevaFecha
}

const useVetData = (
  vetId: string | null,
  dia: number | null,
  mes: number,
  año: number,
  updateAppointments: boolean,
) => {
  const [appointments, setAppointments] = useState<any>(null)
  const [veterinarioData, setVeterinarioData] = useState<
    { fullname: string; speciality: string } | undefined
  >(undefined)

  function transformarCita(cita: {
    start_time: string | number | Date
    reason: any
    isActive: boolean
  }) {
    const fecha = crearFechaSinAjuste(cita.start_time.toString())

    return {
      dia: fecha.getDate(),
      mes: fecha.getMonth(), // Los meses comienzan desde 0 en JavaScript
      año: fecha.getFullYear(),
      hora: fecha.getHours(),
      minuto: fecha.getMinutes(),
      razon: cita.reason,
      isActive: cita.isActive,
    }
  }

  useEffect(() => {
    const fetchData = async (id: string | null) => {
      try {
        if (id) {
          const response: any = await vetDataService(id)
          const apps = response.data.data.appointments          
          const citasTransformed = apps.map(transformarCita)
          const resp: any = verificarCitasEnHorarios(
            citasTransformed,
            dia,
            mes - 1,
            año,
          )
          setAppointments(resp)
          setVeterinarioData({
            fullname: response?.data?.data?.fullname,
            speciality: response?.data?.data?.speciality,
          })
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(vetId)
  }, [vetId, dia, año, mes, updateAppointments])

  return { appointments, veterinarioData }
}

export default useVetData
