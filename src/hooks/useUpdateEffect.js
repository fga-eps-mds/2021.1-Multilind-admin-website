import { useEffect, useRef } from 'react'

export function useUpdateEffect (action, deps = []) {
  const isFirstRender = useRef(true)
  console.log('isFirstRender', isFirstRender.current)
  useEffect(() => {
    if (!isFirstRender.current) {
      console.log('here')
      action()
    } else {
      isFirstRender.current = false
    }
  }, [...deps])
}
