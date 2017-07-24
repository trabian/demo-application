import { combineReducers } from 'redux';
import { reducer as formReducer, blur, focus } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import _ from 'lodash';
import { getIn, updateIn } from 'zaphod/compat';

import { transformFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';
import { selectedApplicantReducer } from 'src/reducers/selectedApplicant';
import { REMOVE_JOINT_APPLICATION } from 'src/actions/formActions';
const blurType = blur().type;
const focusType = focus().type;

/**
 * Removes the dot-and-bracket notation from the name fields, returning the index of the field in the applicants `FieldArray`
 * and the actual name of the field.
 *
 * For example, it converts 'applicants[0].firstName' into {index: 0, field: 'firstName'}.
 */
const stripFieldNamePrefix = name => ({
  field: _.last(_.split(name, '.')),
  index: _.split(name, /[[\]]/g)[1],
});

const applyFormReducer = (state, action={}) => {

  if(action.type === REMOVE_JOINT_APPLICATION){
    const index = action.payload;
    const removeEntry = arr => {
      const splicedArray = [...arr];
      splicedArray.splice(index, 1);
      return splicedArray;
    }
    return updateIn(state, ['values', 'applications'], removeEntry);
  }

  if (action.type !== blurType && action.type !== focusType) {
    return state;
  }

  const nestedField = getIn(action, ['meta', 'field']);
  const {index, field} = stripFieldNamePrefix(nestedField);
  return updateIn(state, ['values', 'applications', index, field], transformFieldEntry(field, action.type));
};

export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  form: formReducer.plugin({
    apply: applyFormReducer,
  }),
  selectedApplicant: selectedApplicantReducer.build(), // Creates a reducer function out of the Simr reducer
});
