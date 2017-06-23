/**
 * Defines a global object containing functions for manipulating the application to aid in development and debugging
 * in both development and production.
 */

import { merge } from 'zaphod/compat';

import completedLoanApplication from 'src/data/completedApplication';

const trabianText = `
  ______           __    _               __
 /_  __/________ _/ /_  (_)___ _____   _/_/
  / / / ___/ __ \`/ __ \\/ / __ \`/ __ \\_/_/
 / / / /  / /_/ / /_/ / / /_/ / / / < <
/_/ /_/   \\__,_/_.___/_/\\__,_/_/ /_// /
                                    \\_\\

Access dev tools through the global \`trabian\` variable.
`;

console.log(trabianText);

const FILL_OUT_LOAN_APPLICATION = 'FILL_OUT_LOAN_APPLICATION';

export const devToolsReducer = (state, action) => {
  if(action.type === FILL_OUT_LOAN_APPLICATION) {
    return merge(state, completedLoanApplication);
  }

  return state;
};

// Function that takes one argument, the global Redux store, and returns an object designed to be injected into
// the application's global scope and be made accessible to developers.
const devTools = store => ({
  fillOutLoanApplication: () => {
    // merge the completed application state into the current state
    store.dispatch({type: FILL_OUT_LOAN_APPLICATION});
  },
});

export const trabian = store => ({ devTools: devTools(store) });
