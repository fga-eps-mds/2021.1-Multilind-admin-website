import { createContext, useContext, useEffect } from 'react'
import { usePersistentState } from '../hooks'
import { AuthService } from '../services'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export function AuthContextProvider ({ children }) {
  const [user, setUser] = usePersistentState('@auth:user', null)

  useEffect(() => {
    if (!user) {
      setUser({ teste: 'teste' })
    }
  }, [])

  const signIn = async (userCredentials) => {
    const response = await AuthService.login(userCredentials)
    console.log(response)
  }

  return (
        <AuthContext.Provider value={{ isLogged: false, signIn }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
