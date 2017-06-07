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
