import { select } from '../action_types.js';
export const select = (cardTitle)=>{
  return {
    type: select,
    payload: cardTitle
  };
};
