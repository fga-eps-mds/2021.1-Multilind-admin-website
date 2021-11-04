import { apiFiles } from '../../config/files-api'

export class ImageService {
  static async create (idPalavra, formData) {
    console.log(idPalavra, formData)
    const response = await apiFiles.post(`/api/files/${idPalavra}`, formData)
    return response
  }
}
