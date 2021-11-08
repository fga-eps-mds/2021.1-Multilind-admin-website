import { apiContent } from '../../config'

export class ContentWordService {
  static async getAllWords (idLingua) {
    const response = await apiContent.get(`palavra/all/${idLingua}`)
    return response.data
  }

  static async createWord (body) {
    const response = await apiContent.post(`palavra/${body.id_lingua}`, body)
    return response.data
  }
}
