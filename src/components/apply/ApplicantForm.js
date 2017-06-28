import React from 'react';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

import IdentificationForm from 'src/components/apply/IdentificationForm';
import ContactInfo from 'src/components/apply/ContactInfo';
import { validate } from 'src/components/apply/formValidators';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold',
};

const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;

const preventSubmitDefault = e => e.preventDefault();

const ApplicantForm = ({ history, load }) => (
  <div style={{marginBottom: 12}}>
    <form
      onSubmit={preventSubmitDefault}
      style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
    </form>
  </div>
);

export default withRouter(reduxForm({form: 'apply', validate})(ApplicantForm));
