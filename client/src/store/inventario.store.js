import { create } from 'zustand'


const inventarioStore = create((set) => ({
    inventario: [],
    setInventario: (data) => set(() => ({ inventario: data })),
    updateElement: (data) => set(state => ({ inventario: state.inventario.map(element => element.id === data.id ? data : element) })),
    removeElement: (id) => set(state => ({ inventario: state.inventario.filter(element => element.id !== id) })),
    destroyInventario: () => set(() => ({ inventario: [] }))
}))

export default inventarioStore