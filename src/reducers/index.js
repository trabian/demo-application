import { combineReducers } from 'redux';
import { reducer as formReducer, blur, focus } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { transformFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';

const blurType = blur().type;
const focusType = focus().type;

const applyFormReducer = (state, action) => {
  const payload = {
    [blurType]: action.payload,
    [focusType]: state && state.values && state.values[action.meta.field],
  }[action.type];

  if(payload) {
    return {
      ...state,
      values: {
        ...state.values,
        [action.meta.field]: transformFieldEntry(action.meta.field, action.type, payload),
      },
    };
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
