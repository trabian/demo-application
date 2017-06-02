import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import CoreRouter from './router';

injectTapEventPlugin(); //needed for material-ui

const Root = ()=>{
  return (
    <MuiThemeProvider>
      <CoreRouter />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
