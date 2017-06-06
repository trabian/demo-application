import React from 'react';
import { reduxForm } from 'redux-form'

import IdentificationForm from './IdentificationForm';
import ContactInfo from './ContactInfo';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold'
};

const SectionHeading = ({children}) => <div style={headingStyle}>{children}</div>;

const ApplicantForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit((values)=>console.log(values))}>
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <br />

      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
      <button type='submit'>Click me</button>
    </form>
  );
}

export default reduxForm({form: 'apply'})(ApplicantForm);
