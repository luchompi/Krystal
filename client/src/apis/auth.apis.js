import apiv1 from "./base.api";
import sesionStore from "../store/sesion.store";

export const login = (data) => {
    return apiv1.post('jwt/create/', data)
}

export const obtenerDatosUsuario = () => {
    const { PAT } = sesionStore.getState()
    return apiv1.get('users/me/', {
        headers: {
            Authorization: `JWT ${PAT}`
        }
    })
}