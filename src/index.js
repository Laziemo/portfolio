import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import Db from './components/Db';
import Crypto from './components/Crypto';
import Auth from './components/Auth';
import Header from './components/Header';

import './index.css';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path='/' exact render = {() => <Header><Home /></Header>} />
            <Route path='/db'            render = {() => <Header><Db /></Header>} />
            <Route path='/auth'          render = {() => <Header><Auth /></Header>} />
            <Route path='/crypto'        render = {() => <Header><Crypto /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
