import React from 'react'
import { Card } from '../Card'
import { useForm } from 'react-hook-form'
import './styles.scss'
import { ImageService } from '../../services/fileServices'

export function AddImages ({ palavra }) {
  // const palavraTeste = {
  //   id_palavra: 50000,
  //   nome: 'Îagûara'
  // }
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('file', data.picture[0])
    const result = await ImageService.create(palavra.id_palavra, formData)
    if (result.status === 200) {
      alert('Imagem adicionada com sucesso!')
    }
  }
  return (
    <form className="cardContainerMaster" onSubmit={handleSubmit(onSubmit)}>
    <Card className='containerImage'>
      <h1 className="titleContainerImage">{ `Deseja adicionar imagem a palavra ${palavra.nome}`}</h1>
      <div className="labelContainerImage">
        <label className="nameImageContainer">Imagem Relativa</label>
        <input
          {...register('picture')}
          type='file'
          className="input textContainerImage"
          name="picture"
          multiple
        />
      </div>
      <div className="buttomContainerImage">
        <button className="button-primary-outlined buttom">Cancelar</button>
        <button className="button-primary buttom" type="submit">Salvar</button>
      </div>
    </Card>
    </form>
  )
}
