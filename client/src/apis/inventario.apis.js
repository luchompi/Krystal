import sesionStore from "../stores/sesion.store";
import baseApi from "./base.api";

export const getInventario = async () => {
    const { PAT } = sesionStore.getState()
    return baseApi.get(`inventario/`, {
        headers: {
            Authorization: `JWT ${PAT}`
        }
    })
}

export const saveElement = (data) => {
    const { PAT } = sesionStore.getState()
    return baseApi.post(`inventario/`, data, {
        headers: {
            Authorization: `JWT ${PAT}`
        }
    })
}