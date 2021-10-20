import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Home, SignUpLanguage } from '../pages'
import { PrivateRoute } from './routes-protected'

export function Routes () {
  return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute component={Home} exact path="/" />
                <Route component={SignUpLanguage} exact path="/lang" />
                <Route component={Login} path="/login" />
            </Switch>
        </BrowserRouter>
  )
}
