import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import { FormattedMessage } from 'react-intl';
import { required, email, addValidator } from 'redux-form-validators';

const validationMsg = (message) => <FormattedMessage id='form.error' defaultMessage={message} />;

const dobValidation = addValidator({
  defaultMessage: validationMsg('Must be 18 years or older.'),
  validator: (options, value) => (moment().diff(value, 'years') >= 18),
});

const stripFormatting = input => _.replace(input, /[^0-9]+/g, '');

const numberValidationWithLength = addValidator({
  defaultMessage: validationMsg('Invalid Input'),
  validator: (options, value, allValues) => {
    return stripFormatting(value).length === options.length;
  },
});

const requiredInput = required({msg: validationMsg('Required')});
const validations = {
  firstName: [requiredInput],
  lastName:[requiredInput],
  soc:[requiredInput, numberValidationWithLength({length: 9})],
  dob:[requiredInput, dobValidation()],
  phoneNumber: [requiredInput, numberValidationWithLength({length: 10})],
  phoneNumberType:[requiredInput],
  emailAddress:[requiredInput, email({msg: validationMsg('Invalid Email')})],
  address:[requiredInput],
  city: [requiredInput],
  state:[requiredInput],
  zipCode:[requiredInput, numberValidationWithLength({length: 5})],
};

// Applies all the validator functions to the input, returning the value of the first rejection
// or `undefined`.
const applyValidators = (validators, value, values) =>
  _.find(_.map(validators, validator => validator(value, values)));

/**
 * This function is adapted from code from redux-form-validators
 * that runs redux-form inputs through their corresponding
 * validators and adds an error message to the errors
 * object if one of the validators fails. (returns
 * error message from first validator to error).
 */
export const validate = values => {
  const validated = _.mapValues(values, (val, key) => {
    return validations[key] && applyValidators(validations[key], val, values);
  });
  return _.omitBy(validated, _.isUndefined);
};
