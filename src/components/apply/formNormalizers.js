import _ from 'lodash';

export const stripSocialSec = input => _.replace(input, new RegExp('-','g'), '');
const middleInitialRegEx = new RegExp('[a-zA-Z]?');

export const maxLengthNormalizer = len => (input, prevInput) => {
  if(input.length > len) {
    return prevInput;
  }
  return input;
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
