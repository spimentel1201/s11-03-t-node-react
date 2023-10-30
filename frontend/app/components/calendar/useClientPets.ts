import { useState, useEffect } from 'react'
import { clientPetsService } from '../../_api/clientPets'

const useClientPets = (token: string) => {
  const [clientPets, setClientPets] = useState<null | any>(null)
  const [clientData, setClientData] = useState<null | any>(null)

  useEffect(() => {
    const fetchData = async (_token: string) => {
      try {
        if (_token) {
          const response: any = await clientPetsService(_token)
          setClientData(response.data)
          setClientPets(response.data.data.pets)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData(token)
  }, [token])

  return { clientData, clientPets }
}

export default useClientPets
