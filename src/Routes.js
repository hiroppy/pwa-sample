import React from 'react';
import { Route } from 'react-router';
import LazyRoute from 'lazy-route';
import App from './components/App';

// we can not use Switch...
// https://github.com/mhaagens/lazy-route/issues/4

const Routes = () => (
  <App>
    <Route
      exact
      path="/"
      render={() =>
        <LazyRoute
          component={
            import(/* webpackChunkName: 'List.content' */ './components/contents/List')
          }
        />
      }
    />
    <Route
      path="/argon"
      render={() =>
        <LazyRoute
          component={
            import(/* webpackChunkName: 'Argon.content' */ './components/contents/Argon')
          }
        />
      }
    />
    <Route
      path="/boron"
      render={() =>
        <LazyRoute
          component={
            import(/* webpackChunkName: 'Boron.content' */ './components/contents/Boron')
          }
        />
      }
    />
    <Route
      path="/carbon"
      render={() =>
        <LazyRoute
          component={
            import(/* webpackChunkName: 'Carbon.content' */ './components/contents/Carbon')
          }
        />
      }
    />
  </App>
);

export default Routes;
