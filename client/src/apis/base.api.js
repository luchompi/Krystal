import axios from 'axios'

const apiv1 = axios.create({
    baseURL: 'http://localhost:8000/api/v1/'
})

export default apiv1