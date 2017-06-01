import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin(); //needed for material-ui

const Root = ()=>{
  return(
    //<Provider store={createStore(/* reducers */)}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    //</Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
