import axios from 'axios'

const BASE_URL = 'https://s11-03-react-node-production.up.railway.app/api/v1'

const api = axios.create({
  baseURL: BASE_URL,
})

export const getPetsService = async () => {
  try {
    const res = await api.get('/pets?limit=20')
    return res.data
  } catch (error) {
    return error
  }
}
