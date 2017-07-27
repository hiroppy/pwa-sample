// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Routes from './Routes';
import './offline';

import 'normalize.css';

const root = document.getElementById('root');

const history = createHistory();
const render = () => {
  ReactDOM.render((
    <Router history={history}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </Router>
  ), root);
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
