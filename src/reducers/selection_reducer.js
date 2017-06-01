import {SavingsCard, SpendingCard, CreditCard} from '../cards.js';

export default (state, action)=>{
  if(action.type === 'select'){  //all action types will be exported as constants in another file.
    switch(action.payload){
      case SavingsCard:

      case SpendingCard:

      case CreditCard:
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
