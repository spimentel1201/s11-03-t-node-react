import { useState, useEffect } from 'react'
import { vetDataService } from '../../_api/vetData'
import { verificarCitasEnHorarios } from './helper'

function crearFechaSinAjuste(fechaguardada: string) {
  const fechaOriginal = new Date(fechaguardada);

  const nuevaFecha = new Date(
    fechaOriginal.getUTCFullYear(),
    fechaOriginal.getUTCMonth(),
    fechaOriginal.getUTCDate(),
    fechaOriginal.getUTCHours(),
    fechaOriginal.getUTCMinutes(),
    fechaOriginal.getUTCSeconds(),
    fechaOriginal.getUTCMilliseconds()
  );

  return nuevaFecha;
}

const useVetData = (vetId: string, dia: number, mes: number, año: number, updateAppointments: boolean) => {
  const [appointments, setAppointments] = useState(null)

  function transformarCita(cita: {
    start_time: string | number | Date
    reason: any
  }) {
    
    const fecha = crearFechaSinAjuste(cita.start_time.toString())
    // console.log(fecha)

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
          // console.log(apps)
          const citasTransformed = apps.map(transformarCita)
          // console.log(citasTransformed)
          const resp: any = verificarCitasEnHorarios(
            citasTransformed,
            dia,
            mes - 1,
            año,
          )
          setAppointments(resp)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(vetId)
  }, [vetId, dia, año, mes, updateAppointments])

  // console.log(appointments)

  return { appointments }
}

export default useVetData
