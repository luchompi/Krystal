import baseApi from "./base.api";

export const getTokens = (data) => {
    return baseApi.post('jwt/create/', data)
}

export const createUser = (data) => {
    return baseApi.post('users/', data)
}

export const activateUser = (data) => {
    return baseApi.post('users/activation/', data)
}