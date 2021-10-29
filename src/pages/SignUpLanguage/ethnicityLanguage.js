import Fuse from 'fuse.js'
import { useState } from 'react'
import SelectSearch from 'react-select-search'
import { Card } from '../../components'
import { useHistory, useLocation } from 'react-router-dom'
import {
  // ContentEthnicityService,
  ContentLanguageService,
  // ContentLocationService,
  ContentTrunkService
} from '../../services'
import { useEthnicity } from '../../context'
import './styles.scss'
import './stylesEth.scss'

export function EthnicityLanguage () {
  const history = useHistory()
  const location = useLocation()
  const formId = 'something'
  const [selectedEth, setSelectedEth] = useState(null)
  const { Ethnicity } = useEthnicity()
  const navigate = () => history.goBack()
  const data = location.state

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data, selectedEth)
    const { lingua } = data
    await ContentLanguageService.createLanguage({ nome: lingua })
    await ContentTrunkService.create()
  }
  const list = Ethnicity.map(eth => ({ name: eth.nome, value: eth.id_etnia }))
  return (
    <div className="container">
      <Card className="card-language">
        <form className="form" id={formId} onSubmit={handleSubmit}>
          <div className="dot-container">
            <div className="dot-cinza" onClick={navigate}></div>
            <div className="dot"></div>
          </div>
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="input-language-fields select-go">
            <label className="label-class-language">{`Etnia(s) que falam ${'qlq'}`}</label>
            <SelectSearch
              multiple
              options={list}
              search
              closeOnSelect
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
              placeholder="Selecione as etnias"
              printOptions="on-focus"
              className="select-search"
              onChange={setSelectedEth}
            />
          </div>
          <button type="submit" form={formId} className="button-next-page button-primary button-go">{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
