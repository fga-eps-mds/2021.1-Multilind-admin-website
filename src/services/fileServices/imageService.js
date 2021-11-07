import { apiFiles } from '../../config/files-api'

export class ImageService {
  static async create (idPalavra, formData) {
    return await apiFiles.post(`/api/files/${idPalavra}`, formData)
  }
}
