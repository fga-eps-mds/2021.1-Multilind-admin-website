import { toast } from 'react-toastify'
const interceptorResponseInstances = {}

export const setUpInterceptor = (apiInstance) => {
  const interceptorId = apiInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      toast.error(error.response.data?.message || 'Algo está errado, tente novamente mais tarde', { theme: 'colored' })
      return Promise.reject(error)
    }
  )

  interceptorResponseInstances[apiInstance] = interceptorId
}

export const removeAxiosInterceptor = (apiInstance) => {
  if (interceptorResponseInstances[apiInstance] !== undefined) {
    const interceptorId = interceptorResponseInstances[apiInstance]
    apiInstance.interceptors.response.eject(interceptorId)
    interceptorResponseInstances[apiInstance] = undefined
  }
}
