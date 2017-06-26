import { combineReducers } from 'redux';
import { reducer as formReducer, blur, focus } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { getIn, updateIn } from 'zaphod/compat';

import { transformFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';
import { selectedApplicantReducer } from 'src/reducers/selectedApplicant';

const blurType = blur().type;
const focusType = focus().type;

console.log(selectedApplicantReducer);

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
  form: formReducer.plugin({
    apply: applyFormReducer,
  }),
  selectedApplicant: selectedApplicantReducer.build(), // Creates a reducer function out of the Simr reducer
});
