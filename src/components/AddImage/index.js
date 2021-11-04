import { Card } from '../Card'
import './styles.scss'

export function AddImages ({ children, className: customClass }) {
  return (
    <div className="cardContainerMaster">
    <Card className='containerImage'>

      <h1 className="titleContainerImage">Deseja adicionar imagem a palavra</h1>
      <div className="labelContainerImage">
        <label className="nameImageContainer">Imagem Relativa</label>
        <input type='file' className="input textContainerImage"></input>
      </div>
      <div className="buttomContainerImage">
        <button className="button-primary-outlined buttom">Cancelar</button>
        <button className="button-primary buttom">Salvar</button>
      </div>
    </Card>
    </div>
  )
}
