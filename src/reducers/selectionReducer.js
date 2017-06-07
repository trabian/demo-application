import { SELECT, HOVER_IN, HOVER_OUT } from '../actions';

export const UNSELECTED = 0;
export const SELECTED = 1;
export const HOVERED = 2;

const initialState = {
  savings: UNSELECTED,
  spending: UNSELECTED,
  credit: UNSELECTED,
};

const selectTransformations = {
  [UNSELECTED]: SELECTED,
  [SELECTED]: UNSELECTED,
  [HOVERED]: UNSELECTED,
};

const hoverOutTransformations = {
  [HOVERED]: SELECTED,
  [UNSELECTED]: UNSELECTED,
  [SELECTED]: SELECTED
};

const hoverInTransformations = {
  [UNSELECTED]: UNSELECTED,
  [SELECTED] : HOVERED,
  [HOVERED]:HOVERED
};

const selectHandler = (state, cardId) => {
  const newState = selectTransformations[state[cardId]];
  return { [cardId]: newState };
};

const hoverInHandler = (state, cardId) => {
  const newState = hoverInTransformations[state[cardId]];
  return { [cardId]: newState };
};

const hoverOutHandler = (state, cardId) => {
  const newState = hoverOutTransformations[state[cardId]];
  return { [cardId]: newState };
};

const actionHandlers = {
  [SELECT]: selectHandler,
  [HOVER_IN]: hoverInHandler,
  [HOVER_OUT]: hoverOutHandler
};

export default (state=initialState, action) => {
  const handlerFunction = actionHandlers[action.type];
  if(!handlerFunction){
    return state;
  }
  return {...state, ...handlerFunction(state,action.id)};
};
