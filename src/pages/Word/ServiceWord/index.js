import { ContentWordService } from '../../../services'

const submitWord = async (data) => {
  const { palavra, significado, idLingua } = data

  if (palavra) {
    if (palavra.__isNew__) {
      ContentWordService.createWord(idLingua, { nome: palavra, significado })
    }
  }
}

export default submitWord
