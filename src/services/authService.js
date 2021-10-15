import { apiAuth } from '../config'

export class AuthService {
  static async login (userCredentials) {
    const response = await apiAuth.post('/login', userCredentials)
    return response.data
  }

  static async logout () {
    const respose = await apiAuth.delete('/logout')
    return respose.data
  }

  static async register (userCredentials) {
    return apiAuth.post('/create', userCredentials)
  }

  static async refresh () {
    return apiAuth.post('/refresh')
  }
}
