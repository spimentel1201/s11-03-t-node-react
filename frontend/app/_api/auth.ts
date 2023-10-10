import axios from 'axios'
const BASE_URL = 'https://s11-03-react-node-production.up.railway.app/api/v1'
// const BASE_URL = 'localhost:3001/api/v1'

const api = axios.create({
  baseURL: BASE_URL,
})

export const login = async (email: string, password: string) => {
  try {
    const res = await api.post('/auth/login', {
      email: email,
      password: password,
    })
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
