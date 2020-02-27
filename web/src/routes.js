import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import CreateTeam from './pages/CreateTeam';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>  
                <Route path='/login' exact component={Login} />
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/team' exact component={Team} />
                <Route path='/create_team' exact component={CreateTeam} />
                
                <Redirect from='*' to='/dashboard' />
            </Switch>
        </BrowserRouter>
    )
}