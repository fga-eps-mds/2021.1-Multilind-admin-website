import { apiAuth } from '../config'

export class AuthService {
  static async login (userCredentials) {
    const response = await apiAuth.post('/login', userCredentials)
    return response.data
  }

  static async logout (params) {
    const respose = await apiAuth.delete('/logout', { data: params })
    return respose.data
  }

  static async register (userCredentials) {
    return apiAuth.post('/create', userCredentials)
  }

  static async refresh (data) {
    const reponse = await apiAuth.post('/refresh', data)
    return reponse.data
  }
}
