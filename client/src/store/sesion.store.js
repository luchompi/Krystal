import { create } from 'zustand'

const SesionStore = create((set) => ({
    PAT: null,
    RAT: null,
    userData: [],
    isAuth: false,
    setTokens: (data) => set({ PAT: data.access, RAT: data.refresh, isAuth: true }),
    destroySesion: () => set({ PAT: null, RAT: null, isAuth: false }),
}))

export default SesionStore