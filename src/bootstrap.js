import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.defToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

//import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';

import Layout from './components/layout';



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path = '/signin' exact component={Signin}/>
            <Route path = '/' exact component={Signin}/>            
            <Route path = '/signup' component={Signup}/>
          </Layout>

        </Switch>

      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
