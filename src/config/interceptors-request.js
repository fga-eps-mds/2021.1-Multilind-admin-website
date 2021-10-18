/* eslint-disable camelcase */
import jwt from 'jsonwebtoken'
import { OfflineStorageService, AuthService } from '../services'
import { AUTH_USER_KEY } from '../utils'

const interceptorRequestInstances = {}

export const setUpInterceptorRequest = (apiInstance) => {
  const interceptorId = apiInstance.interceptors.request.use(
    async (request) => {
      const user = OfflineStorageService.getItem(AUTH_USER_KEY)
      const { token, refresh_token } = user

      if (!token) return request

      let authToken = token

      const payload = jwt.decode(token)
      const expirationTimeInSeconds = payload.exp
      const nowInSeconds = Math.floor(Date.now() / 1000)

      if (expirationTimeInSeconds < nowInSeconds) {
        const { token: newToken } = await AuthService.refresh({ refresh_token })
        const newUser = { ...user, token: newToken }
        OfflineStorageService.setItem(AUTH_USER_KEY, newUser)
        authToken = newToken
      }

      request.headers.authorization = authToken
      return request
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  interceptorRequestInstances[apiInstance] = interceptorId
}

export const removeInterceptorRequest = (apiInstance) => {
  if (interceptorRequestInstances[apiInstance] !== undefined) {
    const interceptorId = interceptorRequestInstances[apiInstance]
    apiInstance.interceptors.request.eject(interceptorId)
    interceptorRequestInstances[apiInstance] = undefined
  }
}
