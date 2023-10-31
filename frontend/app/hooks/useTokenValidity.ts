'use client'
import { useToken } from '../store/token'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'

export default function UseTokenValidity(token: string | null) {
  const setToken = useToken((state) => state.setToken)
  const [expired, setExpired] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    let result = false
    if (token) {
      let decodedToken = jwtDecode(token)
      //   console.log('Decoded Token', decodedToken)
      let currentDate = new Date()
      // JWT exp is in seconds
      if (
        decodedToken &&
        decodedToken.exp &&
        decodedToken.exp * 1000 < currentDate.getTime()
      ) {
        // console.log('Token expired.')
      } else {
        // console.log(currentDate.getTime() / 1000)
        // console.log('Valid token')
        result = true
      }
      if (result === false) {
        localStorage.removeItem('token')
        setExpired(true)
        setToken(null)
        router.push('/')
      }
    }
  }, [token, setToken])

  return expired
}
