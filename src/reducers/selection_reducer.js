import { SavingsCard, SpendingCard, CreditCard } from '../cards.js';
import { select } from '../action_types.js';

export default (state={}, action)=>{
  if(action.type === select){
    switch(action.payload){
      case SavingsCard:
      break;

      case SpendingCard:
      break;

      case CreditCard:
      break;

      default:
      return state;
    }
  }

  return state;

};


/*
INITIAL STATE:

state = {
  SavingsCard: unseleted_button,
  SpendingCard: unseleted_button,
  CreditCard: unseleted_button
}

Questions:
-Should I use state['SavingsCard'] or should I just hardcode the initial values
ex: state = {savingsCard: ... , spendingCard ...}
*/
