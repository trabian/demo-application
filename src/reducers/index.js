import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import selectionReducer from 'src/reducers/selectionReducer';

export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  form: formReducer,
});
