import _ from 'lodash';

export const stripPhoneNumber = input => _.replace(input, new RegExp('[\\(\\)\\-\\ ]', 'g'), '');
export const stripSocialSec = input => _.replace(input, new RegExp('-','g'), '');

const formatPhoneNumber = chars => {
  const flattened = _.flatten([
    chars.length !== 0 ? '(' : '',
    _.slice(chars, 0, 3),
    chars.length > 2 ? ') ' : '',
    _.slice(chars, 3, 6),
    chars.length > 5 ? '-' : '',
    _.slice(chars, 6, 10)
  ]);
  return _.join(flattened, '');
}

export const normalizePhoneNumber = (input, prevInput='') => {
  const chars = stripPhoneNumber(input).split('');
  // handle backspacing with formatting characters

  if(input.length < prevInput.length && _.replace(_.last(prevInput), stripPhoneNumber, '') === '') {
    return formatPhoneNumber(_.initial(chars));
  }

  return formatPhoneNumber(chars);
}

export const middleInitial = (input, prevInput)=>(input.length > 1 ? prevInput : input);


export const socialDash = (input, prevInput='') =>{

      if(input.length > 11){
          return prevInput;
      }
      if(isNaN(stripSocialSec(input))){
        return prevInput;
      }

      if(input.length < prevInput.length){
          return input;
      }
      if((input.length % 3 === 0) && input.length !== 9){
          return input+'-';
      }
      return input;
};
