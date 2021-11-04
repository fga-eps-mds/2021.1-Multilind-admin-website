import { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { Card } from '../../components'
import Styles from './styles/customStylesSelect'
import { useLanguage } from '../../context'
import submitWord from './ServiceWord'
import './styles.scss'

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
          alert('Palavra já adicionada')
        }
        event.preventDefault()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const palavras = value.map((item) => {
      item = item.value.split(',', 1)[0]
      return item.includes(' ') ? item.replaceAll(' ', '') : item
    })
    const significados = value.map((item) => {
      item = item.value.split(',', 2)[1]
      return item.includes(' ') ? item.replaceAll(' ', '') : item
    })

    const data = { palavra: [...palavras], significado: [...significados], idLingua: selected.value }
    palavras.forEach(async (item, index) => {
      await submitWord({ palavra: data.palavra[index], significado: data.significado[index], idLingua: data.idLingua })
    })
    alert('Palavra adicionada com sucesso')
    setValue([])
    setSelected(null)
  }

  return (
    <div className='container label'>
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
            <label className='obs-palavra'>{'Inserir palavra seguido de uma vírgula e seu significado. Exemplo: "palavra, significado"'}</label>
          </div>
          <button type='submit' form={formId} className='button-next-page button-primary button-go'>{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
