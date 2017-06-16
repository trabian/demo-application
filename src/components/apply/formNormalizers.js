import _ from 'lodash';

export const stripPhoneNumber = input => _.replace(input, new RegExp('[^0-9]+', 'g'), '');
export const stripSocialSec = input => _.replace(input, new RegExp('-','g'), '');
const middleInitialRegEx = new RegExp('[a-zA-Z]?');

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
};

export const normalizePhoneNumber = (input, prevInput='') => {
  const chars = stripPhoneNumber(input).split('');
  // handle backspacing with formatting characters
  if(input.length < prevInput.length && _.replace(_.last(prevInput), /[^0-9]+/, '') === '') {
    return formatPhoneNumber(_.initial(chars));
  }
  return formatPhoneNumber(chars);
};

export const normalizeMiddleInitial = (input, prevInput='')=>{
    if( input.match(middleInitialRegEx) && input.length <= 1 ){
        return input;
    }
    return prevInput;
};

export const normalizeSocialSecurity = (input, prevInput='') => {
  if( isNaN(input) || input.length > 9 ){
      return prevInput;
  }
  /*
  else if( (input.length % 3 === 0) && input.length !== 9 && input.length > prevInput.length ){
    return input+'-';
  }*/
  return input;
};

export const normalizeZipCode = (input, prevInput) => {
  if( input.length > 5 ){
    return prevInput;
  }
  return input;
};
