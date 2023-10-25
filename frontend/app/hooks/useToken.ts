"use client"
import { useRouter } from "next/navigation"
import { useToken } from "../store/token"
import {useEffect} from "react"


export default function useTokenHook(){
    
    const token = useToken((state) => state.token)
    const setToken = useToken((state) => state.setToken)
    const router = useRouter()
    
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          const Storedtoken = localStorage.getItem('token')
          setToken(Storedtoken)
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


