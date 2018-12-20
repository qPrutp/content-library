import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('isLoaded')
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
);

export default SecretRoute;
