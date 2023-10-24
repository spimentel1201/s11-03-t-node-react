import { useState, useEffect } from 'react'
import { vetDataService } from '../../_api/vetData'

const useVetData = (vetId: string) => {
  const [appointments, setAppointments] = useState(null)

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        if (id) {
          const response: any = await vetDataService(id)
          const apps = response.data.data.appointments
          setAppointments(apps)
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
