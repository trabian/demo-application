import { getIn, set } from 'zaphod/compat';

import { SELECT, HOVER_IN, HOVER_OUT } from 'src/actions';

export const UNSELECTED = 'UNSELECTED';
export const SELECTED = 'SELECTED';
export const HOVERED = 'HOVERED';

// This is a state machine.
// First level is the action.
// Then it is the current state.
// The final value is the new state
const stateTransitions = {
  [SELECT]: {
    [UNSELECTED]: SELECTED,
    [SELECTED]: UNSELECTED,
    [HOVERED]: UNSELECTED,
  },
  [HOVER_IN]: {
    [UNSELECTED]: UNSELECTED,
    [SELECTED]: HOVERED,
    [HOVERED]: HOVERED,
  },
  [HOVER_OUT]: {
    [UNSELECTED]: UNSELECTED,
    [HOVERED]: SELECTED,
    [SELECTED]: SELECTED,
  },
};

const initialState = {
  savings: UNSELECTED,
  spending: UNSELECTED,
  credit: UNSELECTED,
};

export default (state=initialState, { id: cardId, type }) => {
  if(!cardId) {
    return state;
  }

  const currentCardState = state[cardId];
  const newCardState = getIn(stateTransitions, [type, currentCardState], state)
  return set(state, cardId, newCardState);
};
