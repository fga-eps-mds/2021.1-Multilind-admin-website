import { toast } from 'react-toastify'
const interceptorResponseInstances = {}

export const setUpInterceptorResponse = (apiInstance) => {
  const interceptorId = apiInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      toast.error(error.response.data?.message || 'Oops, algo deu errado', { theme: 'colored' })
      return Promise.reject(error)
    }
  )

  interceptorResponseInstances[apiInstance] = interceptorId
}

export const removeInterceptorResponse = (apiInstance) => {
  if (interceptorResponseInstances[apiInstance] !== undefined) {
    const interceptorId = interceptorResponseInstances[apiInstance]
    apiInstance.interceptors.response.eject(interceptorId)
    interceptorResponseInstances[apiInstance] = undefined
  }
}
