import logo from '../../assets/logo.png'
import logout from '../../assets/logout.png'
import { useAuth } from '../../context'
import { AuthService } from '../../services'
import { useHistory } from 'react-router-dom'
import './styles.scss'

export function NavBar (props) {
  const history = useHistory()
  const { user, signOut } = useAuth()
  const logoutUser = async () => {
    setTimeout(() => history.push('/login'), 3000)
    await AuthService.logout({ refresh_token: user.refresh_token })
    signOut()
  }
  return (
        <div className="nav-bar">
          <img src={logo} alt="logo" className="logo-nav-bar" onClick={() => history.push('/')}/>
          { !props.home && !props.lang
            ? <h1 className="links-nav-bar" onClick={() => history.push('/lang')}>Cadastrar Lingua</h1>
            : null
          }
          {!props.home && !props.word
            ? <h1 className="links-nav-bar" onClick={() => history.push('/word')}>Cadastrar Palavra</h1>
            : null
          }
          {!props.home && !props.image
            ? <h1 className="links-nav-bar" onClick={() => history.push('/image')}>Cadastrar Imagem</h1>
            : null
          }
          <img src={logout} alt="logo" className="logout-nav-bar" onClick={() => logoutUser()}/>
        </div>
  )
}
