// Product select actions
export const SELECT = 'select';
export const HOVER_IN = 'hoverIn';
export const HOVER_OUT = 'hoverOut'

// Joint applicant actions
export const ADD_APPLICANT = 'add_applicant';
export const REMOVE_APPLICANT = 'remove_applicant';
export const SELECT_APPLICANT = 'select_applicant';

export const selectAction = (cardId) => ({
  type: SELECT,
  id: cardId
});

export const hoverInAction = (cardId) => ({
  type: HOVER_IN,
  id: cardId
});

export const hoverOutAction = (cardId) => ({
  type: HOVER_OUT,
  id: cardId
});

export const addJointApplicant = () => ({
  type: ADD_APPLICANT,
});

export const removeJointApplicant = () => ({
  type: REMOVE_APPLICANT,
});

export const selectJointApplicant = id => ({
  type: SELECT_APPLICANT,
  payload: id,
})
