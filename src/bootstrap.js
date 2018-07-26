import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.defToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

//import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';

import Layout from './components/layout';

import history from './history';
import requireAuth from './components/requireAuth';
import Dashboard from './components/dashboard'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path = '/signin' exact component={Signin}/>
            <Route path = '/' exact component={Signin}/>            
            <Route path = '/signup' component={Signup}/>

            <Route path = '/dashboard' component={requireAuth(Dashboard)}/>

          </Layout>

        </Switch>

      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
