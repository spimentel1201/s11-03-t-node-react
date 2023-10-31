"use client"
import { useRouter } from "next/navigation"
import { useToken } from "../store/token"
import {useEffect} from "react"
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useState } from "react";

interface TokenData extends JwtPayload {
  clientId: string;
}

export default function UseToken(){
    
    const token = useToken((state) => state.token)
    const setToken = useToken((state) => state.setToken)
    const router = useRouter();
    const [data, setData] = useState<TokenData | null>();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          const Storedtoken = localStorage.getItem('token')
          setToken(Storedtoken)
          if(Storedtoken){
            setData(jwtDecode<TokenData>(Storedtoken))
          }
        }
      }, [setToken]);
     
    const handleUpdateToken = () => {
      if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token')
        setToken(null)
        setData(null);
        router.refresh()
      }    
    }
    
    return{token, data, setToken, handleUpdateToken}
}
