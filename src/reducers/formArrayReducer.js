import { ADD_APPLICANT, REMOVE_APPLICANT, SELECT_APPLICANT } from 'src/actions';

const initialState = {
  cursor: 0,
  forms: []
};

export default (state = initialState, action) => {
  switch action.type{
    ADD_APPLICANT:
      return {...state, forms: state.forms.push(action.payload)};
    REMOVE_APPLICANT:
      return {...state, forms: state.forms.splice(action.payload, 1)};
    SELECT_APPLICANT:
      return {...state, cursor: action.payload};
    default:
      return state;
  }
};
