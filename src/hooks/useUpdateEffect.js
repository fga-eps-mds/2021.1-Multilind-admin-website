import { useEffect, useRef } from 'react'

export function useUpdateEffect (action, deps) {
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (!isFirstRender.current) {
      action()
    } else {
      isFirstRender.current = false
    }
  }, deps)
}
