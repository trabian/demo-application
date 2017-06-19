import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { blur, focus } from 'redux-form';
import { transformFieldEntry } from 'src/reducers/formHelpers';
import selectionReducer from 'src/reducers/selectionReducer';

const blurType = blur().type;
const focusType = focus().type;

const getEventData = (state, action) => ({
  [blurType]: {eventType: 'blur', payload: action.payload},
  [focusType]: {eventType: 'focus', payload: state && state.values && state.values[action.meta.field]},
}[action.type]);

const applyFormReducer = (state, action) => {
  const eventData = getEventData(state, action);

  if(eventData) {
    return {
      ...state,
      values: {
        ...state.values,
        [action.meta.field]: transformFieldEntry(action.meta.field, eventData.eventType, eventData.payload)
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
