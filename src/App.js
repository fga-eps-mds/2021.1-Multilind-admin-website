import { useEffect } from 'react'
import { Routes } from './routes'
import { useAuth } from './context'
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
    setUpInterceptorResponse(apiAuth, 'apiAuth')
    return () => removeInterceptorResponse(apiAuth, 'apiAuth')
  }, [])

  useEffect(() => {
    if (isLogged) {
      setUpInterceptorResponse(apiContent, 'apiContent')
      setUpInterceptorRequest(apiContent, 'apiContent')
    } else {
      removeInterceptorResponse(apiContent, 'apiContent')
      removeInterceptorRequest(apiContent, 'apiContent')
    }
  }, [isLogged])

  return (
      <Routes />
  )
}

export default App
