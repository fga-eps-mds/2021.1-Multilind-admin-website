import axios from 'axios'

export const apiAuth = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL
})
