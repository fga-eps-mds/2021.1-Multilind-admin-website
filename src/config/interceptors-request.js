const interceptorRequestInstances = {}

export const setUpInterceptorResponse = (apiInstance) => {
  const interceptorId = apiInstance.interceptors.request.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  interceptorRequestInstances[apiInstance] = interceptorId
}

export const removeInterceptorResponse = (apiInstance) => {
  if (interceptorRequestInstances[apiInstance] !== undefined) {
    const interceptorId = interceptorRequestInstances[apiInstance]
    apiInstance.interceptors.request.eject(interceptorId)
    interceptorRequestInstances[apiInstance] = undefined
  }
}
