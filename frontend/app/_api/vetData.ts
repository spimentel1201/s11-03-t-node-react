import axios from 'axios'
const BASE_URL = 'https://s11-03-react-node-production.up.railway.app/api/v1'
// const BASE_URL = 'localhost:3001/api/v1'

const api = axios.create({
  baseURL: BASE_URL,
})

export const vetDataService = async (id: string | string[] | undefined) => {
  try {
    const res = await api.get('/veterinarians/' + id)
    return res
  } catch (error) {
    return error
  }
}
