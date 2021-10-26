// import Select from 'react-select'
import Fuse from 'fuse.js'
import SelectSearch from 'react-select-search'
import { Card } from '../../components'
import { useLanguage } from '../../context'
// import { useState } from 'react'
import './styles.scss'

export function SignUpLanguage () {
  const { languages } = useLanguage()
  // const [input, setInput] = useState('')
  console.log(languages)

  const list = languages
    .map((language) => ({ name: language.nome, value: language.id_lingua }))

  return (
    <div className="container">
      <Card className="card">
        <form className="form">
          <div className="pageOfRegister">
            <span className="dot"/>
            <span className="dot"/>
          </div>
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="input-language-fields">
            <label className="label-class-language">Nome da Língua</label>
            <input className="input-language-screen" placeholder="Guajá"></input>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Localidade(s) da língua</label>
            <input className="input-language-screen" placeholder="-2.43274, -46.71387"></input>
            <label className="obs-localidade">
              O valor deve ser informado em coordenadas e possuir fomato [latitude],
            [longintude]
            </label>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Família Linguística</label>
            {/* <Select
              className="input-language-screen"
              classNamePrefix="input-language-screen"
              isSearchable={() => true}
              name="color"
              options={list}
            /> */}
            <SelectSearch
              options={list}
              placeholder="Choose your language"
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
              // className="searchbar-styles"
            />
          </div>
          <button className="button-next-page button-primary">{'Próxima'}</button>
        </form>
      </Card>
    </div>
  )
}
