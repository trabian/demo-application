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
const requiredInput = (val) => (val.length === 0 ? 'Required' : '');
//const requiredInput = required({msg: validationMsg('Required')});
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
/*
const applyValidators = (validators, value, values) =>
  _.find(_.map(validators, validator => validator(value, values)));

*/
const applyValidators = (validators, value) =>{
  return _.find(_.map(validators, validator => validator(value)));
}

/**
 * This function is adapted from code from redux-form-validators
 * that runs redux-form inputs through their corresponding
 * validators and adds an error message to the errors
 * object if one of the validators fails. (returns
 * error message from first validator to error).
 */
/*
export const validate = values => {
  const errors = {};
    const applicationsArrayErrors = []
    values.applications.forEach((member, memberIndex) => {
      console.log(memberIndex)
      const memberErrors = {};
      if (!member || !member.firstName) {
        memberErrors.firstName = 'Required'
        applicationsArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.lastName) {
        memberErrors.lastName = 'Required'
        applicationsArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.middleInitial) {
        memberErrors.middleInitial = 'Required'
        applicationsArrayErrors[memberIndex] = memberErrors
      }

      return memberErrors;
    });

    if(applicationsArrayErrors.length) {
      errors.applications = applicationsArrayErrors
    }
  }
  return errors;
}
*/
const requiredContents = ['firstName', 'lastName', 'phoneNumber', 'phoneNumberType', 'emailAddress', 'city', 'state', 'zipCode',
                  'soc', 'dob', 'address'];

const requireFields = (application) => {
  return requiredContents.reduce((acc, val) => {
    if(!application || !application[val]){
      return {...acc, [val]: 'Required'};
    }
    return acc;
  }, {});
};

export const validate = values => {
  const errors = {};
  if (values.applications) {
    const applicationErrors = [];
    values.applications.forEach((application, applicationIndex) => {
      /* go through all values filled out in application. */
      const fieldErrors = requireFields(application);
      _.mapValues(application, (value, key) => {
        const errorMessage = applyValidators(validations[key], value) || requiredInput(value);
        if(errorMessage){
          fieldErrors[key] = errorMessage;
        }
      });
      applicationErrors[applicationIndex] = fieldErrors;
    });
    if(applicationErrors.length > 0){
      errors.applications = applicationErrors;
    }
  }
  return errors;
}

/*
 export const validate = values => {

  if(values.applications){
  let applicationErrors = [];
   values.applications.forEach((member, index) => {
     const errors = _.mapValues(member, (something, key)=>{
          return validations[key] && applyValidators(validations[key], something, values);
     });
     console.log("individual err: ", errors);
     applicationErrors[index] = errors;
   });
   if(applicationErrors.length > 0){
     errors.applications = applicationErrors;
   }
  }
  console.log("Errors: ", errors);
  return errors;
};*/
