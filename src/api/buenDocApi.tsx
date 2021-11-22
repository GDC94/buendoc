import axios from 'axios'

export const buenDocApi = axios.create({
    baseURL: 'http://challenge.radlena.com/api/v1'
});