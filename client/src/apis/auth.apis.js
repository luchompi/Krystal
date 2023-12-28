import apiv1 from "./base.api";
import sesionStore from "../store/sesion.store";

export const login = (data) => {
    return apiv1.post('jwt/create/', data)
}

export const obtenerDatosUsuario = () => {
    const {PAT} = sesionStore.getState()
    return apiv1.get('users/me/', {
        headers: {
            Authorization: `JWT ${PAT}`
        }
    })
}

export const crearUsuario = (data) => {
    return apiv1.post('users/', data)
}

export const activar = (data) => {
    return apiv1.post('users/activation/', data)
}

export const cambiarContrasena = (data) => {
    return apiv1.post('users/reset_password/', data)
}

export const confirmarCambioContrasena = (data) => {
    return apiv1.post('users/reset_password_confirm/', data)
}