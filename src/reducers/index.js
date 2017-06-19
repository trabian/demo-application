import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { blur, focus } from 'redux-form';
import { blurFieldEntry, focusFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';

const blurType = blur().type;
const focusType = focus().type;

const applyFormReducer = (state, action) => {
  if(action.type === blurType) {
    return {
      ...state,
      values: {
        ...state.values,
        [action.meta.field]: blurFieldEntry(action.meta.field, action.payload)
      },
    };
  }
  else if(action.type === focusType){
    if(state.values){
      return{
        ...state,
        values:{
          ...state.values,
          [action.meta.field]: focusFieldEntry(action.meta.field, state.values[action.meta.field])
        }
      }
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
