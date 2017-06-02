import React from 'react';

import IdentificationForm from './IdentificationForm';
import ContactInfo from './ContactInfo';

const Apply = () => {
  return (
    <div>
      <h2>Your Identity</h2>
      <IdentificationForm />
      <br />

      <h2>Contact Information and Address</h2>
      <ContactInfo />

    </div>
  );
}

export default Apply;
