import {create} from 'zustand'

const sesionStore = create((set) => ({
    PAT: null,
    RAT: null,
    isLogged: false,
    loading: false,
    userData: null,
    timer: 0,
    setTokens: (data) => set(() => ({PAT: data.access, RAT: data.refresh, isLogged: true})),
    setPAT: (data) => set(() => ({PAT: data, timer: 0})),
    setUserData: (data) => set(() => ({userData: data})),
    alterLoading: (status) => set(() => ({loading: status})),
    incrementTimer: () => set((state) => ({timer: state.timer + 1})),
    clearStore: () => set(() => ({PAT: null, RAT: null, isLogged: false, userData: {}, timer: 0})),
}))

export default sesionStore
