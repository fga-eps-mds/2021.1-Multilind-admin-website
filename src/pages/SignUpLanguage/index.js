import * as yup from 'yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { WithContext as ReactTags } from 'react-tag-input'
import CreatableSelect from 'react-select/creatable'
import Styles from './styles/customStylesSelect'
import { Card, NavBar } from '../../components'
import { useTrunk } from '../../context'
import { useHistory } from 'react-router-dom'
import './styles/styles.scss'

const signUpSchema = yup
  .object({
    lingua: yup.string().required('campo obrigatório')
  })
  .required()
export function SignUpLanguage () {
  const { trunks } = useTrunk()
  const [selected, setSelected] = useState(null)
  const [tags, setTags] = useState([])
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })
  const onSubmit = async (data) => {
    data.familia = selected
    data.localidades = tags
    history.push('/langEth', data)
    reset()
  }

  const list = trunks.map((trunk) => ({ value: trunk.id_tronco, label: trunk.nome }))
  const handleDelete = i => {
    const result = tags.filter((tag, index) => index !== i)
    setTags(result)
  }
  const handleAddition = tag => {
    const cod = tag.text.split(',')
      .map(e => parseFloat(e.trim()))
      .filter(codFilter => codFilter % 1 !== 0)

    if (cod.length === 2) {
      const result = [...tags, tag]
      setTags(result)
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
      <NavBar lang={true}/>
      <Card className="card-language">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot-cinza"></div>
        </div>
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="input-language-fields">
            <label className="label-class-language">Nome da Língua</label>
            <input className="input-language-screen space-between-components" placeholder="Guajá" {...register('lingua')}></input>
            <p className="error">{errors.lingua?.message}</p>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Localidade(s) da língua</label>
            <div className="space-between-components row">
              <div className="infos">
              <ReactTags
                tags={tags}
                placeholder="-2.43274, -46.71387"
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                inputFieldPosition="top"
                autocomplete
              />
              </div>
            </div>
            <label className="obs-localidade">
              - O valor deve ser informado em coordenadas e possuir fomato [latitude],
            [longitude]
            </label>
            <br/>
            <label className='obs-palavra'>{'- Pressione a tecla "enter" para adicionar'}</label>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Família Linguística</label>
            <CreatableSelect
              isClearable
              onChange={setSelected}
              placeholder=""
              className="select-search space-between-components"
              options={list}
              styles={Styles}
            />
          </div>
          <button className="button-primary button-next-page">{isSubmitting ? 'Carregando...' : 'Próxima'}</button>
        </form>
      </Card>
    </div>
  )
}
