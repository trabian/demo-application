export const SELECT = 'select';
export const HOVER_IN = 'hoverIn';
export const HOVER_OUT = 'hoverOut'

export const ADD_APPLICANT = 'add_applicant';
export const REMOVE_APPLICANT = 'remove_applicant';
export const SELECT_APPLICANT = 'select_applicant';

export const selectAction = (cardId) => {
  return {
    type: SELECT,
    id: cardId
  };
};

export const hoverInAction = (cardId) => {
  return {
    type: HOVER_IN,
    id: cardId
  };
};

export const hoverOutAction = (cardId) => {
  return {
    type: HOVER_OUT,
    id: cardId
  };
};
