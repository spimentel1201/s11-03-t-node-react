import {create} from "zustand"

type State = {
    imageMascota: string|null
}
type Action = {
    setImageMascota: (image: string | null) => void
}

export const useImageMascota = create<State & Action>((set) => ({
    imageMascota: null,
    setImageMascota: (image) => set({imageMascota: image})
}))