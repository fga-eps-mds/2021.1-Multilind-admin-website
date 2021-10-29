import { LanguageContextProvider, TrunkContextProvider, EthnicityContextProvider, useAuth } from '../context'

export function ContentProvider ({ children }) {
  const { isLogged } = useAuth()

  console.log(isLogged)
  if (!isLogged) return children
  return (
      <EthnicityContextProvider>
        <TrunkContextProvider>
          <LanguageContextProvider>
            {children}
          </LanguageContextProvider>
        </TrunkContextProvider>
      </EthnicityContextProvider>
  )
}
