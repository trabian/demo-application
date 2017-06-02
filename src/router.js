import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter} from 'react-router-redux';

import IndexPage from './components/product_select/ProductSelect';
import Apply from './components/apply/Apply';
import NotFound from './components/NotFound';

export const PRODUCT_SELECT = '/';
export const APPLY = '/apply';

export const CoreRouter = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={PRODUCT_SELECT} component={IndexPage} />
        <Route exact path={APPLY} component={Apply} />
        <Route path='*' component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};
