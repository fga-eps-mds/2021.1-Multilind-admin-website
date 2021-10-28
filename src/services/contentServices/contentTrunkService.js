import { apiContent } from '../../config'

export class ContentTrunkService {
  static async create (body) {
    const response = await apiContent.post('tronco', body)
    return response.data
  }

  static async getAllFamily () {
    const response = await apiContent.get('tronco')
    return response.data
  }
}
