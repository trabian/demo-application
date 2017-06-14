import React from 'react';
import { reduxForm } from 'redux-form';

import { Flex } from 'jsxstyle';
import Checkbox from 'material-ui/Checkbox';
import IdentificationForm from './IdentificationForm';
import ContactInfo from './ContactInfo';
import ContinueButton from '../ContinueButton';
import * as colors from '../../helpers/colors.js';

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
    <form onSubmit={handleSubmit((values)=>console.log(values))} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <br />

      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
      <Flex alignSelf='center' width='40%' style={{marginLeft: 60}}>
        <Checkbox
          label="Add joint applicant to my membership application"
          labelStyle={{color: colors.primary_text}}
          iconStyle={{fill: colors.primary_text}}
        />
      </Flex>
      <center><ContinueButton title='KEEP GOING' buttonProps={{type: 'submit'}} /></center>
    </form>
  </div>
);

export default reduxForm({form: 'apply'})(ApplicantForm);
