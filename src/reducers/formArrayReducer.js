import { ADD_APPLICANT, REMOVE_APPLICANT, SELECT_APPLICANT } from 'src/actions';

const initialState = {
  cursor: 0,
  forms: [{}],
};

export default (state = initialState, action) => {
  switch(action.type) {
  case ADD_APPLICANT:
    return {...state, forms: [...state.forms, {}]};
  case REMOVE_APPLICANT:
    return {...state, forms: state.forms.splice(action.payload, 1)};
  case SELECT_APPLICANT:
    const {curValues, newId} = action;
    // TODO: Fix mutation
    state.forms[state.cursor] = curValues;

    return {
      ...state,
      cursor: newId,
      forms: [...state.forms],
    };
  default:
    return state;
  }
};
