import { Card } from '../../components'
import './styles.scss'

export function SignUpLanguage () {
  return (
    <div className="container">
      <Card className="card">
        <form>
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="lingua-input">
            <h3>Nome da Língua</h3>
            <input placeholder="Guajá"></input>
          </div>
          <div>
            <h3>Localidade(s) da língua</h3>
            <input placeholder="-2.43274, -46.71387"></input>
            <label className="obs-localidade">
              O valor deve ser informado em coordenadas e possuir fomato [latitude],
            [longintude]
            </label>
          </div>
          <div>
            <h3>Família Linguística</h3>
            <input placeholder="familia"></input>
          </div>
          <button className="button-primary">{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
