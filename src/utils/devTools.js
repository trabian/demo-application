/**
 * Defines a global object containing functions for manipulating the application to aid in development and debugging
 * in both development and production.
 */

import { initialize } from 'redux-form';

import { applyFormValues } from 'src/data/completedApplication';

if(process.env.NODE_ENV === 'development') {
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
}

// Function that takes one argument, the global Redux store, and returns an object designed to be injected into
// the application's global scope and be made accessible to developers.
const devTools = store => ({
  fillOutLoanApplication: () => {
    const initializeAction = initialize('apply', applyFormValues);
    store.dispatch(initializeAction);
  },
});

export const trabian = store => ({ devTools: devTools(store) });
