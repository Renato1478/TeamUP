import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/team' component={Team} />
            </Switch>
        </BrowserRouter>
    )
}