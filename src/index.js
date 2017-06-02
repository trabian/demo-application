import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './reducers';
import ApplicationPage from './components/ApplicationPage';

injectTapEventPlugin(); //needed for material-ui

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  reducers,
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = ()=>{
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <ApplicationPage history={history} />
      </Provider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
