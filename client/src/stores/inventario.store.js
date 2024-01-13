import { create } from 'zustand'

const inventarioStore = create((set) => ({
    inventario: [],
    setInventario: (inventario) => set({ inventario }),
    addInventario: (inventario) => set(state => ({ inventario: [...state.inventario, inventario] })),
    removeInventario: (id) => set(state => ({ inventario: state.inventario.filter(inventario => inventario.id !== id) })),
    updateInventario: (id, inventario) => set(state => ({ inventario: state.inventario.map(inventario => inventario.id === id ? inventario = inventario : inventario) }))
}))

export default inventarioStore