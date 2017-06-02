import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';
import IndexPage from './components/product_select/ProductSelect';
import NotFound from './components/NotFound';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware));

const CoreRouter = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route exact path='/apply' component={IndexPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default CoreRouter;
