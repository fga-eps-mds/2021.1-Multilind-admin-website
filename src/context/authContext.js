import { createContext, useContext } from 'react'
import { usePersistentState } from '../hooks'
import { AuthService } from '../services'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export function AuthContextProvider ({ children }) {
  const [user, setUser] = usePersistentState('@auth:user', null)

  const signIn = async (userCredentials) => {
    const response = await AuthService.login(userCredentials)
    setUser(response)
  }

  return (
        <AuthContext.Provider value={{ user, isLogged: !!user, signIn }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
