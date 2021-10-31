import { apiContent } from '../../config'

export class ContentIdiomaService {
  static async create (body) {
    const response = await apiContent.post('idioma', body)
    return response.data
  }
}
