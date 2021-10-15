import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/global.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthContextProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ToastContainer />
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
