import axios from 'axios'

const baseApi = axios.create({
    baseURL: 'https://krystal-production.up.railway.app//api/v1/',
})

export default baseApi
