import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import IndexPage from './components/product_select/ProductSelect';
import NotFound from './components/NotFound';

const history = createHistory();

const CoreRouter = () => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route path='/' component={IndexPage} />
        <Route path='*' component={NotFound} />
      </div>
    </ConnectedRouter>
  );
};

export default CoreRouter;
