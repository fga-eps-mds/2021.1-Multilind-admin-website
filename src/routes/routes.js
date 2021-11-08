import { Route, Switch, HashRouter } from 'react-router-dom'
import { Login, Home, SignUpLanguage, EthnicityLanguage, Word, AddImages } from '../pages'
import { PrivateRoute } from './routes-protected'

export function Routes () {
  return (
        <HashRouter>
            <Switch>
                <PrivateRoute component={Home} exact path="/" />
                <PrivateRoute component={EthnicityLanguage} path="/langEth"/>
                <PrivateRoute component={SignUpLanguage} path="/lang" />
                <Route component={Login} path="/login" />
                <PrivateRoute component={Word} path="/word" />
                <PrivateRoute component={AddImages} path="/image" />
            </Switch>
        </HashRouter>
  )
}
