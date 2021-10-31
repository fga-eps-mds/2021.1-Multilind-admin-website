import { apiContent } from '../../config'

export class ContentDialetoService {
  static async create (body) {
    const response = await apiContent.post('dialeto', body)
    return response.data
  }
}
