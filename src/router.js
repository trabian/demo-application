import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter} from 'react-router-redux';

import IndexPage from 'src/components/product_select/ProductSelect';
import Apply from 'src/components/apply/Apply';
import NotFound from 'src/components/NotFound';
const Placeholder = () => (<p> Welcome to a placeholder page.</p>);

export const PRODUCT_SELECT = '/';
export const APPLY = '/apply';
export const DISCLOSURES = '/disclosures';

export const CoreRouter = ({history}) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={PRODUCT_SELECT} component={IndexPage} />
      <Route exact path={APPLY} component={Apply} />
      <Route exact path={DISCLOSURES} component={Placeholder} />
      <Route path='*' component={NotFound} />
    </Switch>
  </ConnectedRouter>
);
