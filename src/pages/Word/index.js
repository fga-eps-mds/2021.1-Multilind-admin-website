import { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { Card } from '../../components'
// import { useHistory, useLocation } from 'react-router-dom'
// import { useEthnicity } from '../../context'
import Styles from './styles/customStylesSelect'
// import createLanguage from './ServicesLanguage'
// import './styles/styles.scss'
import './styles.scss'

export function Word () {
  const [value, setValue] = useState([])
  const [inputValue, setInputValue] = useState([])

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
          console.log(value.labe)
          setValue([...value, createOption(inputValue)])
        } else {
          alert('Palavra já adicionada')
        }
        event.preventDefault()
    }
  }

  return (
    <div className='container label'>
      <Card className='card-language'>
        <form className='form'>
          <h2 className="Header-screen">Cadastro Palavra</h2>
          <div className='div-lingua'>
            <label className="label-class-language">Nome da Língua</label>
            <input className="space-between-components" />
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
              placeholder='Palavra, Significado'
              className='space-between-components'
              styles={Styles}
              menuIsOpen={false}
              isMulti
            />
          </div>
          <button type='submit' className='button-next-page button-primary button-go'>{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
