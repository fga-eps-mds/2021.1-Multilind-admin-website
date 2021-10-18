import { createContext, useContext } from 'react'
import { usePersistentState } from '../hooks'
import { AuthService } from '../services'
import { nomalizeAuthRespose } from '../helpers'
import { AUTH_USER_KEY } from '../utils'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export function AuthContextProvider ({ children }) {
  const [user, setUser] = usePersistentState(AUTH_USER_KEY, null)

  const signIn = async (userCredentials) => {
    const response = await AuthService.login(userCredentials)
    setUser(nomalizeAuthRespose(response))
  }

  return (
        <AuthContext.Provider value={{ user, isLogged: !!user, signIn }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
