import { Routes } from './routes'
import { AuthContextProvider } from './context'

function App () {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}

export default App
