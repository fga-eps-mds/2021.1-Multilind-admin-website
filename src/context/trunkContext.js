import React, { createContext, useState, useEffect, useContext } from 'react'
import { ContentTrunkService } from '../services'

const TrunkContext = createContext()

export function TrunkContextProvider ({ children }) {
  const [trunks, setTrunks] = useState([])

  async function getAllFamily () {
    const response = await ContentTrunkService.getAllFamily()
    setTrunks(response)
  }
  useEffect(() => {
    getAllFamily()
  }, [])

  return (
    <TrunkContext.Provider value={{ trunks }}>
      {children}
    </TrunkContext.Provider>
  )
}

export const useTrunk = () => useContext(TrunkContext)
