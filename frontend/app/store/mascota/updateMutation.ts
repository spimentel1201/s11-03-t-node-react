import {create} from "zustand"

type State = {
    updateMutations: boolean
}
type Action = {
    setUpdateMutations: (updateMutations: boolean) => void
}

export const useUpdateMutations = create<State & Action>((set) => ({
    updateMutations: false,
    setUpdateMutations: (updateMutations) => set({updateMutations})
}))