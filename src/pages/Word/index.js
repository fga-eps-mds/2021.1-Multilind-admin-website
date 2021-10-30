// import { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { Card } from '../../components'
// import { useHistory, useLocation } from 'react-router-dom'
// import { useEthnicity } from '../../context'
import Styles from './styles/customStylesSelect'
// import createLanguage from './ServicesLanguage'
// import './styles/styles.scss'
import './styles.scss'

export function Word () {
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
              isClearable
              placeholder=''
              className='space-between-components'
              styles={Styles}
              isMulti
            />
          </div>
          <button type='submit' className='button-next-page button-primary button-go'>{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
