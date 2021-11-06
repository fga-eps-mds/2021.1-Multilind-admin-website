import { Card } from '../Card'
import check from '../../assets/check.png'
import { useHistory } from 'react-router-dom'
import './styles.scss'

export function FeedbackRegistration ({ dataProps, setTrigger, trigger }) {
  const history = useHistory()
  return trigger
    ? (
    <Card className="container-popup-registration">
      <img src={check} alt="logo" className="check-popup" onClick={() => history.push('/')} />
      <h1 className="popup-header-title">{`Cadastro de ${dataProps.type ?? 'lingua'} concluído com sucesso!`}</h1>
      <h1 className="popup-header-sub-title">{`${dataProps.type ?? 'lingua'} ${dataProps.nome ?? 'text'} cadastrada no aplicativo Multilind.`}</h1>
      <button
        onClick={() => history.push('/')}
        className="button-primary"
      >Concluir</button>
    </Card>
      )
    : null
}
