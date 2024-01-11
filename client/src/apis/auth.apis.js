import baseApi from "./base.api";

export const getTokens = (data) => {
    return baseApi.post('jwt/create/', data)
}

export const createUser = (data) => {
    return baseApi.post('users/', data)
}