import { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { Card, NavBar, FeedbackRegistration } from '../../components'
import { useHistory, useLocation } from 'react-router-dom'
import { useEthnicity } from '../../context'
import Styles from './styles/customStylesSelect'
import createLanguage from './ServicesLanguage'
import './styles/styles.scss'
import './styles/stylesEth.scss'

export function EthnicityLanguage () {
  const history = useHistory()
  const location = useLocation()
  const formId = 'something'
  const [selectedEth, setSelectedEth] = useState(null)
  const [popUp, setPopUp] = useState(false)
  const { Ethnicity } = useEthnicity()
  const navigate = () => history.goBack()
  const data = location.state

  const handleSubmit = async (e) => {
    e.preventDefault()
    data.ethnicities = selectedEth
    await createLanguage(data)
    setPopUp(true)
  }
  const list = Ethnicity.map(eth => ({ value: eth.id_etnia, label: eth.nome }))
  return (
      <div className="container">
        <NavBar lang={true}/>
        {!popUp
          ? <Card className="card-language">
          <form className="form" id={formId} onSubmit={handleSubmit}>
            <div className="dot-container">
              <div className="dot-cinza" onClick={navigate}></div>
              <div className="dot"></div>
            </div>
            <h2 className="Header-screen">Cadastro Língua</h2>
            <div className="input-language-fields select-go">
              <label className="label-class-language">{`Etnia(s) que falam ${data.lingua}`}</label>
              <CreatableSelect
                isClearable
                onChange={setSelectedEth}
                placeholder=""
                className="select-search space-between-components"
                options={list}
                styles={Styles}
                isMulti
              />
            </div>
            <button type="submit" form={formId} className="button-next-page button-primary button-go">{'Salvar'}</button>
          </form>
        </Card>
          : <FeedbackRegistration
              dataProps={{ type: 'língua', nome: data.lingua }}
              trigger={popUp} setTrigger={setPopUp}
            />
        }
        </div>
  )
}
