export const SELECT = 'select';
export const HOVER_IN = 'hoverIn';
export const HOVER_OUT = 'hoverOut'

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

//Form action creators
export const REMOVE_JOINT_APPLICATION = 'REMOVE_JOINT_APPLICATION';
export const removeJointApplicant = (index) => {
  return {
    type: REMOVE_JOINT_APPLICATION,
    payload: index
  }
};
