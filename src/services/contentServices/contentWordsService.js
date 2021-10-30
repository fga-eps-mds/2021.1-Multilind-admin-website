import { apiContent } from '../../config'

export class ContentWordService {
    static async getAllWords () {
        const response = await apiContent.get('palavra')
        return response.data
    }
    
    static async createWord (body) {
        const response = await apiContent.post('palavra', body)
        return response.data
    }
    
}