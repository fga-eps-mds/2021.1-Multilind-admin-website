import { ContentWordService } from '../../../services'

const submitWord = async (data) => {
  const { palavra, significado, idLingua } = data
  if (palavra) {
    await ContentWordService.createWord({ id_lingua: idLingua, nome: palavra, significado })
  }
}

export default submitWord
