import {create} from "zustand"

type State = {
    imageMascota: string|null
    imageId: number|null
}
type Action = {
    setImageMascota: (image: string | null) => void
    setImageId: (image: number | null) => void
}

export const useImageMascota = create<State & Action>((set) => ({
    imageMascota: null,
    setImageMascota: (image) => set({imageMascota: image}),
    imageId: null,
    setImageId: (image) => set({imageId: image})
}))