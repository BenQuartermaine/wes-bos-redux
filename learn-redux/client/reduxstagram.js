// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// Routing dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const root = document.getElementById('root');

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, root)

