import React, { Component } from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// import Login from '../containers/LoginContainer'

import DefaultLayout from '../containers/DefaultLayout'


var history = createBrowserHistory()
// const Login = React.lazy(() => import('../components/Pages/Login'));
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem("userdata") ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

function AppNavigator() {
    return (

        <HashRouter basename="/">
            <React.Suspense >
                <Switch>
                    {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} /> */}

                    <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
                </Switch>
            </React.Suspense>
        </HashRouter>
    )
}
export default AppNavigator

