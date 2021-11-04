import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/global.scss'
import { ContentProvider } from './helpers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthContextProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContentProvider>
            <ToastContainer />
            <App />
      </ContentProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
