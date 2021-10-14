import { createContext, useContext, useEffect } from 'react'
import { usePersistentState } from '../hooks'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export function AuthContextProvider ({ children }) {
  const [user, setUser] = usePersistentState('@auth:user', null)

  useEffect(() => {
    if (!user) {
      setUser({ teste: 'teste' })
    }
  }, [])

  return (
        <AuthContext.Provider value={{ isLogged: true }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
