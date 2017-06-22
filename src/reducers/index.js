import { combineReducers } from 'redux';
import { reducer as formReducer, blur, focus } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { getIn, updateIn } from 'zaphod/compat';

import { transformFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';
import checkedReducer from 'src/reducers/checkedReducer';

const blurType = blur().type;
const focusType = focus().type;

const applyFormReducer = (state, action={}) => {
  if (action.type !== blurType && action.type !== focusType) {
    return state;
  }

  const fieldName = getIn(action, ['meta', 'field']);
  return updateIn(state, ['values', fieldName], transformFieldEntry(fieldName, action.type));
};

export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  checked: checkedReducer,
  form: formReducer.plugin({
    apply: applyFormReducer,
  }),
});
