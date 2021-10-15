import { useEffect } from 'react'
import { Routes } from './routes'
import { useAuth } from './context'
import { apiAuth, apiContent, removeAxiosInterceptor, setUpInterceptor } from './config'

function App () {
  const { isLogged } = useAuth()

  useEffect(() => {
    if (isLogged) {
      setUpInterceptor(apiAuth)
      setUpInterceptor(apiContent)
    } else {
      removeAxiosInterceptor(apiAuth)
      removeAxiosInterceptor(apiContent)
    }
  }, [isLogged])

  return (
      <Routes />
  )
}

export default App
