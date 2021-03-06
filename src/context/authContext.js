import { createContext, useContext } from 'react'
import { usePersistentState } from '../hooks'
import { AuthService } from '../services'
import { nomalizeAuthRespose } from '../helpers'
import { AUTH_USER_KEY } from '../utils'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export function AuthContextProvider ({ children }) {
  const [user, setUser, checkUser] = usePersistentState(AUTH_USER_KEY, null)

  const signIn = async (userCredentials) => {
    const response = await AuthService.login(userCredentials)
    setUser(nomalizeAuthRespose(response))
  }
  const signOut = () => {
    setUser(null)
  }
  return (
        <AuthContext.Provider value={{ user, isLogged: checkUser(), signIn, signOut }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
