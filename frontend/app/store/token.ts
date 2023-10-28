import {create} from "zustand"


type State = {
    token:string| null
}
type Action = {
    setToken:(token:string | null) => void
}

export const useToken = create<State & Action>()(
    (set) => ({
        token: null,
        setToken: (token:string | null) => set({token})
    }),
    
)