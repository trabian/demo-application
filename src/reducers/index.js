import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import selectionReducer from './selectionReducer';

export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
});
