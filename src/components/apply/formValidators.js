import React from 'react';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import { required, email } from 'redux-form-validators';

const validationMsg = (message) => (
  <FormattedMessage id='form.error' defaultMessage={message} />
);

const requiredInput = required({msg: validationMsg('Required')});
const validations = {
  firstName: [requiredInput],
  lastName:[requiredInput],
  middleInitial: [requiredInput],
  soc:[requiredInput],
  dob:[requiredInput],
  phoneNumber: [requiredInput],
  phoneNumberType:[requiredInput],
  emailAddress:[requiredInput, email({msg: validationMsg('Invalid Email')})],
  address:[requiredInput],
  city: [requiredInput],
  state:[requiredInput],
  zipCode:[requiredInput]
};

// Applies all the validator functions to the input, returning the value of the first rejection
// or `undefined`.
const applyValidators = (validators, value, values) => _.find(_.map(validators, validator => validator(value, values)));

/* This function is adapted from code from redux-form-validators
   that runs redux-form inputs through their corresponding
   validators and adds an error message to the errors
   object if one of the validators fails. (returns
   error message from first validator to error).
*/
export const validate = values => {
  return _.reduce(values, (acc, val, key) => {
    const errorMsg = validations[key] && applyValidators(validations[key], val, values);
    if(errorMsg) {
      return {...acc, [key]: errorMsg};
    } else {
      return acc;
    }
  }, {});
};
