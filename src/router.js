import React from 'react';
import { Route } from 'react-router';
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
        <div>
          <Route path='/' component={IndexPage} />
          <Route path='*' component={NotFound} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default CoreRouter;
