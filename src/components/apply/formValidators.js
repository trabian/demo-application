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
const applyValidators = (validators, value) =>{
  return _.find(_.map(validators, validator => validator(value)));
}

const requiredContents = ['firstName', 'lastName', 'phoneNumber', 'phoneNumberType', 'emailAddress', 'city', 'state', 'zipCode',
                          'soc', 'dob', 'address'];

const requireFields = (application) => {
  return requiredContents.reduce((acc, val) => {
    if(!application[val]){
      return {...acc, [val]: 'Required'};
    }
    return acc;
  }, {});
};

export const validate = values => {
  const applicationErrors = _.reduce(values.applications,
      (result, application, applicationIndex) => {
        const fieldErrors = requireFields(application);
        _.mapValues(application, (value, key) => {
          const errorMessage = applyValidators(validations[key], value);
          if(errorMessage){
            fieldErrors[key] = errorMessage;
          }
        });
        result[applicationIndex] = fieldErrors;
        return result;
      }, []);

  const errors = {};
  if(applicationErrors.length > 0){
    errors.applications = applicationErrors;
  }

  return errors;
};
