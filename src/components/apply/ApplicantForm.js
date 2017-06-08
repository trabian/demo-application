import React from 'react';
import { reduxForm } from 'redux-form';

import IdentificationForm from './IdentificationForm';
import ContactInfo from './ContactInfo';
import ContinueButton from '../ContinueButton';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold'
};

const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;

const ApplicantForm = ({ handleSubmit }) => (
  <div style={{marginBottom: 12}}>
    <form onSubmit={handleSubmit((values)=>console.log(values))}>
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <br />

      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
      <center><ContinueButton title='KEEP GOING' buttonProps={{type: 'submit'}} /></center>
    </form>
  </div>
);

export default reduxForm({form: 'apply'})(ApplicantForm);
