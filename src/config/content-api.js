import axios from 'axios'

export const apiContent = axios.create({
  baseURL: process.env.REACT_APP_CONTENT_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
