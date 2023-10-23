"use client"
import { useRouter } from "next/navigation"
import { useToken } from "../store/token"
import { useEffect } from "react"

export default function UseToken(){
    const router = useRouter()
    const token = useToken((state) => state.token)
    const setToken = useToken((state) => state.setToken)
    
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          const token = localStorage.getItem('token')
          setToken(token)
        }
      }, [setToken]);
   
    const handleUpdateToken = () => {
      if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token')
        setToken(null)
        router.refresh()
      }    
    }
    
    return{token, setToken, handleUpdateToken}
}


