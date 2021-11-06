import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Home, SignUpLanguage, EthnicityLanguage, Word } from '../pages'
import { PrivateRoute } from './routes-protected'

export function Routes () {
  return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute component={Home} exact path="/" />
                <Route component={EthnicityLanguage} path="/langEth"/>
                <Route component={SignUpLanguage} path="/lang" />
                <Route component={Login} path="/login" />
                <Route component={Word} path="/word" />
            </Switch>
        </BrowserRouter>
  )
}
