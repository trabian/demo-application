import React from 'react';
import { reduxForm, Field } from 'redux-form'

import IdentificationForm from './IdentificationForm';
import ContactInfo from './ContactInfo';

const ApplicantForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit((values)=>console.log(values))}>
      <h2>Your Identity</h2>
      <IdentificationForm />
      <br />
      <h2>Contact Information and Address</h2>
      <ContactInfo />
      <button type='submit'>Click me</button>
    </form>
  );
}

export default reduxForm({form: 'apply'})(ApplicantForm);
