import { useEffect } from 'react'
import { Routes } from './routes'
import { useAuth } from './context'
import { useUpdateEffect } from './hooks'
import { apiAuth, apiContent, setUpInterceptor, removeAxiosInterceptor } from './config'

function App () {
  const { isLogged } = useAuth()

  useEffect(() => {
    setUpInterceptor(apiAuth)
    setUpInterceptor(apiContent)
  }, [])

  useUpdateEffect(() => {
    if (!isLogged) {
      removeAxiosInterceptor(apiAuth)
      removeAxiosInterceptor(apiContent)
    }
  }, [isLogged])

  return (
      <Routes />
  )
}

export default App
