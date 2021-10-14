import { createContext, useContext } from 'react'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export function AuthContextProvider ({ children }) {
  return (
        <AuthContext.Provider value={{ isLogged: true }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
