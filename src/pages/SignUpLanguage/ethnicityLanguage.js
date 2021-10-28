import Fuse from 'fuse.js'
import SelectSearch from 'react-select-search'
import { Card } from '../../components'
import { useHistory, useLocation } from 'react-router-dom'
import { useEthnicity } from '../../context'
import './styles.scss'
import './stylesEth.scss'

export function EthnicityLanguage () {
  const history = useHistory()
  const location = useLocation()
  const { Ethnicity } = useEthnicity()
  const navigate = () => history.replace()
  const data = location.state
  const list = Ethnicity.map(eth => ({ name: eth.nome, value: eth.id_etnia }))
  return (
    <div className="container">
      <Card className="card-language">
        <form className="form">
          <div className="dot-container">
            <div className="dot-cinza" onClick={navigate}></div>
            <div className="dot"></div>
          </div>
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="input-language-fields select-go">
            <label className="label-class-language">{`Etnia(s) que falam ${data.lingua}`}</label>
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
              printOptions="on-focus"
              className="select-search"
            />
          </div>
          <button className="button-next-page button-primary button-go">{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
