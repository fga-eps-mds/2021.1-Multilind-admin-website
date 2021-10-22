import { apiContent } from '../../config'

export class ContentLanguageService {
  static async getAllLanguages () {
    const response = await apiContent.get('lingua')
    return response.data
  }
}
