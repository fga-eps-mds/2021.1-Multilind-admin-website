import * as yup from 'yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { WithContext as ReactTags } from 'react-tag-input'
import Fuse from 'fuse.js'
import SelectSearch from 'react-select-search'
import { Card } from '../../components'
import { useLanguage } from '../../context'
import './styles.scss'

const signUpSchema = yup
  .object({
    lingua: yup.string().required('campo obrigatório'),
    password: yup.string().required('campo obrigatório')
  })
  .required()

export function SignUpLanguage () {
  const { languages } = useLanguage()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })
  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }
  const onError = (e) => console.log(e)
  const list = languages
    .map((language) => ({ name: language.nome, value: language.id_lingua }))
  const [tags, setTags] = useState([])
  const handleDelete = i => setTags(tags.filter((tag, index) => index !== i))
  const handleAddition = tag => {
    const cod = tag.text.split(',')
      .map(e => parseFloat(e.trim()))
      .filter(cod => cod % 1 !== 0)

    if (cod.length === 2) {
      setTags([...tags, tag])
    }
  }
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice()
    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    setTags(newTags)
  }
  return (
    <div className="container">
      <Card className="card">
        <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="input-language-fields">
            <label className="label-class-language">Nome da Língua</label>
            <input className="input-language-screen" placeholder="Guajá" {...register('lingua')}></input>
            <p className="error">{errors.lingua?.message}</p>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Localidade(s) da língua</label>
            <ReactTags
              tags={tags}
              placeholder="-2.43274, -46.71387"
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              inputFieldPosition="top"
              autocomplete
            />
            <label className="obs-localidade">
              O valor deve ser informado em coordenadas e possuir fomato [latitude],
            [longitude]
            </label>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Família Linguística</label>
            <SelectSearch
              options={list}
              search
              filterOptions={
                (options) => {
                  const fuse = new Fuse(options, {
                    keys: ['name', 'groupName', 'items.name'],
                    threshold: 0.3
                  })
                  return (value) => {
                    if (!value.length) {
                      return options
                    }
                    return fuse.search(value)
                  }
                }
              }
              className="select-search"
            />
          </div>
          <button className="button-primary">{isSubmitting ? 'Carregando...' : 'Próxima'}</button>
        </form>
      </Card>
    </div>
  )
}
