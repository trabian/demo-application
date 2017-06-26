import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { IntlProvider } from 'react-intl';
import createHistory from 'history/createBrowserHistory';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import registerServiceWorker from 'src/registerServiceWorker';
import 'src/index.css';
import reducers from 'src/reducers';
import ApplicationPage from 'src/components/ApplicationPage';
import { trabian } from 'src/utils/devTools';

injectTapEventPlugin(); //needed for material-ui

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  reducers,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// set up the Trabian dev tools
window.trabian = trabian(store);

const Root = () => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <IntlProvider locale="en">
          <ApplicationPage history={history} />
        </IntlProvider>
      </Provider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
