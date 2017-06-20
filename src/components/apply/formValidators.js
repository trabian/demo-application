import { required, email } from 'redux-form-validators';
/* consider writing own required and email validators to avoid using redux-form-validators all together */
const requiredInput = required({msg: 'Required'});
const validations = {
  firstName: [requiredInput],
  lastName:[requiredInput],
  middleInitial: [requiredInput],
  soc:[requiredInput],
  dob:[requiredInput],
  phoneNumber: [requiredInput],
  phoneNumberType:[requiredInput],
  emailAddress:[requiredInput, email({msg: 'Inavlid Email'})],
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
