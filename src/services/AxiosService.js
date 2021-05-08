import Axios from 'axios'
// import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins/',
  timeout: 8000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}
