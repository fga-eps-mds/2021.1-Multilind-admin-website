import { apiContent } from '../../config'

export class ContentLocationService {
  static async create (body) {
    const response = await apiContent.post('localidade', body)
    return response.data
  }
}
