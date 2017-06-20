import React from 'react';
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

/* The for loop is boilerplate code from redux-form-validators
   that runs redux-form inputs through their corresponding
   validators and adds an error message to the errors
   object if one of the validators fails. (returns
   error message from first validator to error).
*/
export const validate = (values)=>{
  const errors = {};
  for (let field in validations) {
    let value = values[field]
    errors[field] = validations[field].map(validateField => {
      return validateField(value,values)
    }).find(x => x);
  }
  return errors;
};
