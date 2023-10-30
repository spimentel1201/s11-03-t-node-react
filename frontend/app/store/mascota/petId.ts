import { create } from "zustand"

type State = {
    petId: string | string[];
}
type Action = {
    setPetId: (petId: string | string[]) => void
}

export const usePetId = create<State & Action>((set) => ({
    petId: "",
    setPetId: (petId) => set({ petId })
}));
