import { apiContent } from '../../config'

export class ContentLanguageService {
  static async getAllLanguages () {
    const response = await apiContent.get('lingua')
    return response.data
  }

  static async createLanguage () {
    const response = await apiContent.post('lingua')
    return response.data
  }

  static async getAllEthnicityByLanguage (idLingua) {
    const response = await apiContent.get(`dialeto/lingua/${idLingua}`)
    return response.data
  }
}
