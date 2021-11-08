import { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { Card, NavBar } from '../../components'
import Styles from './styles/customStylesSelect'
import { useLanguage } from '../../context'
import submitWord from './ServiceWord'
import './styles.scss'
import { toast } from 'react-toastify'

export function Word () {
  const [value, setValue] = useState([])
  const [inputValue, setInputValue] = useState([])
  const [selected, setSelected] = useState(null)
  const formId = 'alguma coisa'
  const { languages } = useLanguage()
  const list = languages.map((lang) => ({ value: lang.id_lingua, label: lang.nome }))

  const createOption = (label) => ({
    label,
    value: label
  })

  const handleChange = (value) => {
    setValue(value)
  }

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue)
  }

  const handleKeyDown = (event) => {
    if (!inputValue) return
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setInputValue('')
        if (!value.map((item) => item.label).includes(inputValue)) {
          setValue([...value, createOption(inputValue)])
        } else {
          toast.warn('Palavra já adicionada')
        }
        event.preventDefault()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = value.map((item) => {
      const stringSplit = item.value.split(',')
      const object = {
        palavra: stringSplit[0].trim(),
        significado: stringSplit[1].trim(),
        idLingua: selected.value
      }
      if (stringSplit.length !== 2 || !object.palavra.length || !object.significado.length) {
        toast.warn(`Formato inválido ${item.value}`)
        return null
      }
      return object
    }).filter(wordOfData => wordOfData !== null)
    if (!data.length) {
      toast.warn('Não foi possível adicionar')
      setValue([])
      return
    }
    await Promise.all(data.map(async (item) => {
      submitWord(item)
    }))
    toast.success('Palavra adicionada com sucesso')
    setValue([])
  }

  return (
    <div className='container label'>
      <NavBar word={true}/>
      <Card className='card-language'>
        <form className='form' id={formId} onSubmit={handleSubmit} >
          <h2 className="Header-screen">Cadastro Palavra</h2>
          <div className='div-lingua'>
            <label className="label-class-language">Nome da Língua</label>
            <CreatableSelect
              isClearable
              onChange={setSelected}
              placeholder=""
              className="select-search space-between-components"
              options={list}
            />
            <p className="error"></p>
          </div>
          <div className='input-language-fields div-palavra'>
            <label className='label-class-language'>{'Palavras'}</label>
            <CreatableSelect
              inputValue={inputValue}
              value={value}
              components={{ DropdownIndicator: null }}
              onInputChange={handleInputChange}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              isClearable
              placeholder='Exemplo: Palavra, Significado'
              className='space-between-components'
              styles={Styles}
              menuIsOpen={false}
              isMulti
            />
            <div className='obs-palavra'>
              <label>{'- Inserir palavra seguido de uma vírgula e seu significado. Exemplo: "palavra, significado"'}</label>
              <br/>
              <label>{'- Pressione a tecla "enter" para adicionar'}</label>
            </div>
          </div>
          <button type='submit' form={formId} className='button-next-page button-primary button-go'>{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
