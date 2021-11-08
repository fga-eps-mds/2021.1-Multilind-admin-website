import { toast } from 'react-toastify'
const interceptorResponseInstances = {}

export const setUpInterceptorResponse = (apiInstance, instanceName) => {
  const interceptorId = apiInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      toast.error(error.response?.data?.error || error.response?.data?.message || 'Oops, algo deu errado', { theme: 'colored' })
      return Promise.reject(error)
    }
  )

  interceptorResponseInstances[instanceName] = interceptorId
}

export const removeInterceptorResponse = (apiInstance, instanceName) => {
  console.log(interceptorResponseInstances)
  if (interceptorResponseInstances[instanceName] !== undefined) {
    const interceptorId = interceptorResponseInstances[instanceName]
    apiInstance.interceptors.response.eject(interceptorId)
    interceptorResponseInstances[instanceName] = undefined
  }
}
