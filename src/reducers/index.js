import { combineReducers } from 'redux';
import { reducer as formReducer, blur, focus } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { getIn } from 'zaphod/compat';

import { transformFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';

const blurType = blur().type;
const focusType = focus().type;

const applyFormReducer = (state, action={}) => {
  if(action.type === blurType || action.type === focusType){
      const fieldName = getIn(action, ['meta', 'field']);
      const payload = getIn(state, ['values', fieldName]);
      if(payload) {
        return {
          ...state,
          values: {
            ...state.values,
            [fieldName]: transformFieldEntry(fieldName, action.type, payload),
          },
        };
      }
  }
  return state;
};

export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  form: formReducer.plugin({
    apply: applyFormReducer,
  }),
});
