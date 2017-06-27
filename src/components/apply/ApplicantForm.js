import React from 'react';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

import IdentificationForm from 'src/components/apply/IdentificationForm';
import ContactInfo from 'src/components/apply/ContactInfo';
import ContinueButton from 'src/components/ContinueButton';
import { validate } from 'src/components/apply/formValidators';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold',
};

const formSubmit = (history) => {
  return (values) =>{
    history.push('/disclosures');
  };
};

const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;

const ApplicantForm = ({ handleSubmit, history, load }) => (
  <div style={{marginBottom: 12}}>
    <form
      onSubmit={handleSubmit(formSubmit(history))}
      style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
      <center>
        <ContinueButton title='KEEP GOING' buttonProps={{type: 'submit'}} style={{ marginTop: 10 }}/>
      </center>
    </form>
  </div>
);

export default withRouter(reduxForm({form: 'apply', validate})(ApplicantForm));
