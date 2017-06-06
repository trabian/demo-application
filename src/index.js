import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin(); //needed for material-ui

const Root = ()=>{
  return(
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
