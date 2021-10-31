import { ContentWordService } from '../../../services'

const createWord = async (data) => {
  const { palavra, lingua } = data

  if (palavra) {
    if (palavra.__isNew__) {
      ContentWordService.create(lingua.id_lingua, { nome: palavra.nome, significado: palavra.significado })
    }
  }
}

export default createWord
