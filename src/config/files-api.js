import axios from 'axios'

export const apiFiles = axios.create({
  baseURL: process.env.REACT_APP_FILES_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
