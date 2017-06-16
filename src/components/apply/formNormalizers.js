import _ from 'lodash';

// pred is a function that accepts a value and returns true if it's valid and false otherwise.
export const simpleNormalizer = pred => (input, prevInput) => pred(input) || input === '' ? input : prevInput;

export const maxLengthValidator = len => input => input.length <= len;

export const numericalValidator = input => !/[^0-9]/.test(input);

export const stringValidator = input => !/[^A-z]/.test(input);

// Returns a function that true if none of the validators reject the input.
export const combineValidators = validators => input => _.isUndefined(_.find(validators, validator => !validator(input)));

// Applies each of the validators one after another, returning the new input if none reject and the old input if any of them do.
export const validatorNormalizer = validators => simpleNormalizer(combineValidators(validators));
