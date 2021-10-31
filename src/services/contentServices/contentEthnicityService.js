import { apiContent } from '../../config'

export class ContentEthnicityService {
  static async create (body) {
    const response = await apiContent.post('etnia', body)
    return response.data
  }

  static async getAllEthnicity () {
    const response = await apiContent.get('etnia')
    return response.data
  }
}
