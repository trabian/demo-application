import { required, numericality, length, email } from 'redux-form-validators';

const validations = {
  firstName: [required(), length({is: 2})],
  lastName: [required()],
  middleInitial:[required()],
  soc: [required(), length({is: 11})],
  phoneNumber: [required(), length({is: 14})],
  phoneNumberType: [required()],
  email:    [required(), email()],
  dob:      [
    required(),
    numericality({ int: true }),
    numericality({ '>=': 18, msg: 'Must be 18 years or older to apply.' })
  ],
};

/* this is the default function used in redux-validator-form library */
export const validate = (values) => {
  const errors = {}
  for (let field in validations) {
    let value = values[field]
    errors[field] = validations[field].map(validateField => {
      return validateField(value, values)
    }).find(x => x)
  }
  return errors;
}
