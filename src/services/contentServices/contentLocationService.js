import { apiContent } from '../../config'

export class ContentLocationService {
  static async createManyLocation (body) {
    const response = await apiContent.post('localidade/many', body)
    return response.data
  }
}
