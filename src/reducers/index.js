import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { blur } from 'redux-form';
import { blurFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';

const blurType = blur().type;
const applyFormReducer = (state, action) => {
  if(action.type === blurType) {
    return {
      ...state,
      values: {
        ...state.values,
        [action.meta.field]: blurFieldEntry( action.meta.field, action.payload )
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
