import React from 'react';
import { reduxForm } from 'redux-form';
import { required, email } from 'redux-form-validators';
// Will be added in the future
import IdentificationForm from 'src/components/apply/IdentificationForm';
import ContactInfo from 'src/components/apply/ContactInfo';
import ContinueButton from 'src/components/ContinueButton';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold'
};

const requiredInput = required({msg: 'Required'});
const validations = {
  'firstName': [requiredInput],
  'lastName':[requiredInput],
  'middleInitial': [requiredInput],
  'soc':[requiredInput],
  'dob':[requiredInput],
  'phoneNumber': [requiredInput],
  'phoneNumberType':[requiredInput],
  'emailAddress':[requiredInput, email({msg: 'Inavlid Email'})],
  'address':[requiredInput],
  'city': [requiredInput],
  'state':[requiredInput],
  zipCode:[requiredInput]
};

const validate = (values) => {
  const errors = {}
  for (let field in validations) {
    let value = values[field]
    errors[field] = validations[field].map(validateField => {
      return validateField(value, values)
    }).find(x => x)
  }
  return errors
}



const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;

const ApplicantForm = ({ handleSubmit }) => (
  <div style={{marginBottom: 12}}>
    <form>
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
      <center><ContinueButton title='KEEP GOING' buttonProps={{type: 'submit'}} /></center>
    </form>
  </div>
);

export default reduxForm({form: 'apply', validate})(ApplicantForm);
