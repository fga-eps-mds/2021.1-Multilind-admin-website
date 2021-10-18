import { useEffect, useState } from 'react'
import { OfflineStorageService } from '../services'
export function usePersistentState (key, initalValue) {
  const [value, setValue] = useState(initalValue)

  useEffect(() => {
    const storagedValue = OfflineStorageService.getItem(key)
    if (storagedValue) {
      setValue(storagedValue)
    }
  }, [])

  const setPersistentState = (newValue) => {
    OfflineStorageService.setItem(key, newValue)
    setValue(newValue)
  }

  const checkPersistentState = () => {
    const storagedValue = OfflineStorageService.getItem(key)
    if (storagedValue) {
      return true
    }
    return false
  }

  return [value, setPersistentState, checkPersistentState]
}
