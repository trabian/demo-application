import { combineReducers } from 'redux';
import { reducer as formReducer, blur, focus } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { getIn, updateIn } from 'zaphod/compat';

import { transformFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';
import formArrayReducer from 'src/reducers/formArrayReducer';

const blurType = blur().type;
const focusType = focus().type;

const applyFormReducer = (state, action={}) => {
  switch(action.type) {
  case focusType:
  case blurType: {
    const fieldName = getIn(action, ['meta', 'field']);
    return updateIn(state, ['values', fieldName], transformFieldEntry(fieldName, action.type));
  }
  default:
    return state;
  }
};

export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  form: formReducer.plugin({
    apply: applyFormReducer,
  }),
  applicants: formArrayReducer,
});
