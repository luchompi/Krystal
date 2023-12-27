import {create} from 'zustand'

const sesionStore = create((set) => ({
    PAT: null,
    RAT: null,
    isLogged: false,
    userData: {},
    counter: 0,
    isLoading: false,
    setTokens: (data) => set(() => ({PAT: data.access, RAT: data.refresh, isLogged: true})),
    setUserData: (data) => set(() => ({userData: data})),
    incrementCounter: () => set(state => ({counter: state.counter + 1})),
    resetCounter: () => set(() => ({counter: 0})),
    alterLoading: (status) => set(() => ({isLoading: status})),
    destroySesion: () => set(() => ({PAT: null, RAT: null, isLogged: false, userData: [], counter: 0}))
}))

export default sesionStore