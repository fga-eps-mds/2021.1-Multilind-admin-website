import { useEffect } from 'react'
import { Routes } from './routes'
import { useAuth } from './context'
import { useUpdateEffect } from './hooks'
import {
  apiAuth,
  apiContent,
  setUpInterceptorResponse,
  removeInterceptorResponse,
  removeInterceptorRequest,
  setUpInterceptorRequest
} from './config'

function App () {
  const { isLogged } = useAuth()

  useEffect(() => {
    setUpInterceptorResponse(apiAuth)
    setUpInterceptorResponse(apiContent)
    setUpInterceptorRequest(apiContent)
  }, [])

  useUpdateEffect(() => {
    if (!isLogged) {
      removeInterceptorResponse(apiAuth)
      removeInterceptorResponse(apiContent)
      removeInterceptorRequest(apiContent)
    }
  }, [isLogged])

  return (
      <Routes />
  )
}

export default App
