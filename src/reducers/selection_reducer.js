import _ from 'lodash';
import { select } from '../action_types.js';

export default (state=[], action)=>{

  if(action.type === select){
    if(state.includes(action.title)){
      return _.filter(state, (card)=>{
        return card !== action.title;
      });
    }
    else{
      return [...state, action.title];
    }
  }
  return state;
};
