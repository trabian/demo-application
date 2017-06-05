import React from 'react';
import { reduxForm, Field } from 'redux-form'

import IdentificationForm from './IdentificationForm';
import ContactInfo from './ContactInfo';

const ApplicantForm = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Your Identity</h2>
      <IdentificationForm />
      <br />

      <h2>Contact Information and Address</h2>
      <ContactInfo />

    </form>
  );
}

export default reduxForm({form: 'apply'})(ApplicantForm);
