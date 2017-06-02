import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import selection_reducer from './selection_reducer.js';

export default combineReducers({
  selected: selection_reducer,
  router: routerReducer,
});
