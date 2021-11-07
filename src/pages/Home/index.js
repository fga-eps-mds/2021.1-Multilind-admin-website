import React from 'react'
import { NavBar, Card } from '../../components'
import { useHistory } from 'react-router-dom'
import './styles.scss'

export function Home () {
  const history = useHistory()
  return <div>
    <NavBar home={true}/>
    <div className="home-div-container">
      <Card className="home-card-content">
        <h1 className="home-header-titler">Você está no Portal do Admin do Multilind 👋</h1>
        <h3 className="home-header-sub-titler">Por aqui é possível fazer cadastro de dados que irão alimentar base de dados do aplicativo Multilind.</h3>
        <div className="home-container-button">
          <button
            className="button-primary-outlined"
            onClick={() => history.push('/lang')}
          >Cadastrar Língua</button>
          <button
            className="button-primary-outlined"
            onClick={() => history.push('/word')}
          >Cadastrar Palavra</button>
          <button
            className="button-primary-outlined"
            onClick={() => history.push('/image')}
          >Cadastrar Imagem</button>
        </div>
      </Card>
    </div>
  </div>
}
