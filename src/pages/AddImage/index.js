import React, { useState } from 'react'
import { Card, NavBar } from '../../components'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import './styles.scss'
import '../SignUpLanguage/styles/styles.scss'
import { useLanguage } from '../../context'
import { ImageService, ContentWordService } from '../../services'
import { toast } from 'react-toastify'

export function AddImages () {
  const { register, handleSubmit } = useForm()
  const { languages } = useLanguage()
  const list = languages.map((language) => ({ value: language.id_lingua, label: language.nome }))
  const [words, setWords] = useState([])
  const [selectedWord, setSelectedWord] = useState({})

  const getAllWord = async (idLingua) => {
    const response = await ContentWordService.getAllWords(idLingua.value)
    const wordsMap = response.palavras.map((word) => ({ value: word.id_palavra, label: word.nome }))
    setWords(wordsMap)
    setSelectedWord({})
  }

  const onSubmit = async (data) => {
    if (!selectedWord.value) {
      toast.error('Selecione uma palavra, para continuar!')
      return
    }
    if (!data.picture[0]) {
      toast.error('Selecione uma imagem, para continuar!')
      return
    }
    const formData = new FormData()
    formData.append('file', data.picture[0])
    const result = await ImageService.create(50000, formData)
    if (result.status === 200) {
      toast.success('Imagem adicionada com sucesso!')
    }
  }
  return (
    <div className="container">
      <NavBar image={true} />
      <Card className="card-language">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="titleContainerImage Header-screen">Cadastro Imagem</h1>
      <div className="labelContainerImage">
        <label className="nameImageContainer">Língua</label>
          <Select
            className="select-image-screen"
            onChange={getAllWord}
            options={list}
            isSearchable
            placeholder=""
          ></Select>
        <label className="nameImageContainer">Palavra</label>
          <Select
            className="select-image-screen"
            value={selectedWord}
            onChange={setSelectedWord}
            options={words}
            isSearchable
            placeholder=""
          ></Select>
        <label className="nameImageContainer">Imagem Relativa</label>
        <input
          {...register('picture')}
          type='file'
          className="input textContainerImage"
          name="picture"
          multiple
        />
        <button className="button-primary button-next-page" type="submit">Salvar</button>
      </div>
      </form>
      </Card>
    </div>
  )
}
