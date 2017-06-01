import { select } from '../action_types.js';

export const selectAction = (cardTitle)=>{
  return {
    type: select,
    title: cardTitle
  };
};
