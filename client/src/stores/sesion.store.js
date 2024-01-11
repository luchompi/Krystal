import { create } from 'zustand'

const sesionStore = create((set) => ({
    PAT: null,
    RAT: null,
    isLogged: false,
    loading: false,
    userData: [],
    setTokens: (data) => set(() => ({ PAT: data.access, RAT: data.refresh, isLogged: true })),
    setPAT: (data) => set(() => ({ PAT: data })),
    setUserData: (data) => set(() => ({ userData: data })),
    alterLoading: (status) => set(() => ({ loading: status })),
    clearStore: () => set(() => ({ PAT: null, RAT: null, isLogged: false, userData: [] })),
}))

export default sesionStore
