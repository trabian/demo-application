import { combineReducers } from 'redux';
import selection_reducer from './selection_reducer.js';

export default combineReducers({
  selected: selection_reducer
});
