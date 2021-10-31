import React, { createContext, useState, useEffect, useContext } from 'react'
import { ContentEthnicityService } from '../services'

const EthnicityContext = createContext()

export function EthnicityContextProvider ({ children }) {
  const [Ethnicity, setEthnicities] = useState([])

  async function getAllEthnicity () {
    const response = await ContentEthnicityService.getAllEthnicity()
    setEthnicities(response)
  }
  useEffect(() => {
    getAllEthnicity()
  }, [])

  return (
    <EthnicityContext.Provider value={{ Ethnicity }}>
      {children}
    </EthnicityContext.Provider>
  )
}

export const useEthnicity = () => useContext(EthnicityContext)
