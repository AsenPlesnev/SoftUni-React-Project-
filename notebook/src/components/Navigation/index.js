import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Register from '../Register';
import Login from '../Login';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;