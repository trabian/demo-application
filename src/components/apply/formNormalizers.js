import _ from 'lodash';

export const maxLengthNormalizer = len => (input, prevInput) => {
  if(input.length > len) {
    return prevInput;
  }
  return input;
};

/**
 * Returns true if none of the validators reject the input.
 */
const applyValidators = (validators, input) => _.isUndefined(_.find(validators, validator => !validator(input)));

const simpleNormalizer = validators => (input, prevInput) => {
  if(applyValidators(validators, input)) {
    return input;
  }
  return prevInput;
}

const applyValidators = (input, validators) => _.map()

const numericalNormalizer = input => /[0-9]*/.test(input);

const stringNormalizer = input => /[A-z]*/.test(input);

export const normalizeSocialSecurity = (input, prevInput='') => {
  if( isNaN(input) || input.length > 9 ){
    return prevInput;
  }
  return input;
};
