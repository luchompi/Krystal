import baseApi from "./base.api";
import sesionStore from "../stores/sesion.store";

export const getTokens = (data) => {
    return baseApi.post('jwt/create/', data)
}

export const createUser = (data) => {
    return baseApi.post('users/', data)
}

export const activateUser = (data) => {
    return baseApi.post('users/activation/', data)
}

export const resetPassword = (data) => {
    return baseApi.post('users/reset_password/', data)
}

export const resetPasswordConfirm = (data) => {
    return baseApi.post('users/reset_password_confirm/', data)
}

export const refreshToken = (data) => {
    return baseApi.post('jwt/refresh/', data)
}

export const getUserData = () => {
    const {PAT} = sesionStore.getState()
    return baseApi.get('users/me/', {
        headers: {
            'Authorization': `JWT ${PAT}`
        }
    })

}