import React from 'react';
import { reduxForm } from 'redux-form';

// Will be added in the future
// import IdentificationForm from 'src/components/apply/IdentificationForm';
// import ContactInfo from 'src/components/apply/ContactInfo';
// import ContinueButton from 'src/components/ContinueButton';

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
    <form onSubmit={handleSubmit}>
      <SectionHeading>Your Identity</SectionHeading>
      {/* <IdentificationForm /> */}
      <br />

      <SectionHeading>Contact Information and Address</SectionHeading>
      {/* <ContactInfo />
      <center><ContinueButton title='KEEP GOING' buttonProps={{type: 'submit'}} /></center> */}
    </form>
  </div>
);

export default reduxForm({form: 'apply'})(ApplicantForm);
