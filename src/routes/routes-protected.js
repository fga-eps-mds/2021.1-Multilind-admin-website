import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context'

export function PrivateRoute (props) {
  const { isLogged } = useAuth()

  if (!isLogged) {
    return <Redirect to="/login"/>
  }

  return <Route {...props} />
}
