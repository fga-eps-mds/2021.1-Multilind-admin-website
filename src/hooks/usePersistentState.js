import { useEffect, useState } from 'react'

export function usePersistentState (key, initalValue) {
  const [value, setValue] = useState(initalValue)

  useEffect(() => {
    const storagedValue = localStorage.getItem(key)
    if (storagedValue) {
      setValue(JSON.parse(storagedValue))
    }
  }, [])

  const setPersistentState = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  const checkPersistentState = () => {
    const storagedValue = localStorage.getItem(key)
    if (storagedValue) {
      return true
    }
    return false
  }

  return [value, setPersistentState, checkPersistentState]
}
