import React from 'react';
import _ from 'lodash';

import { FormattedMessage } from 'react-intl';
import { required, email, addValidator } from 'redux-form-validators';

const validationMsg = (message) => (
  <FormattedMessage id='form.error' defaultMessage={message} />
);

const dobValidation = addValidator({
  defaultMessage: validationMsg('Must be 18 years or older.'),
  validator: (options, value) => {
    let ageMs = Date.now() - new Date(value).getTime();
    return (new Date(ageMs).getUTCFullYear() - 1970) >= 18;
  }
});

const validationWithLength = addValidator({
  defaultMessage: validationMsg('Invalid Input'),
  validator: (options, value, allValues) =>{
    return value.length === options.length;
  }
});

const requiredInput = required({msg: validationMsg('Required')});
const validations = {
  firstName: [requiredInput],
  lastName:[requiredInput],
  middleInitial: [requiredInput],
  soc:[requiredInput, validationWithLength({length: 11})],
  dob:[requiredInput, dobValidation()],
  phoneNumber: [requiredInput, validationWithLength({length: 14})],
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
