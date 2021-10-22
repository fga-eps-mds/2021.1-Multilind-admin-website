import React, { createContext, useState, useEffect, useContext } from 'react'
import { ContentLanguageService } from '../services'

const LanguageContext = createContext()

export function LanguageContextProvider ({ children }) {
  const [languages, setLanguages] = useState([])

  async function getAllLanguages () {
    const response = await ContentLanguageService.getAllLanguages()
    setLanguages(response)
  }
  useEffect(() => {
    getAllLanguages()
  }, [])

  return (
    <LanguageContext.Provider value={{ languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
