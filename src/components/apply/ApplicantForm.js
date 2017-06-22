import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Flex } from 'jsxstyle';
import { Checkbox } from 'redux-form-material-ui';

import IdentificationForm from 'src/components/apply/IdentificationForm';
import ContactInfo from 'src/components/apply/ContactInfo';
import ContinueButton from 'src/components/ContinueButton';
import { validate } from 'src/components/apply/formValidators';
import * as colors from 'src/helpers/colors';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold',
};

const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;

const ApplicantForm = ({ handleSubmit }) => (
  <div style={{marginBottom: 12}}>
    <form onSubmit={handleSubmit((values) => console.log(values))} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
      <Flex alignSelf='center' width='45%' style={{marginLeft: 80, marginBottom: 0, marginTop: 30}}>
        <Field
            name="addJointApplicant"
            component={Checkbox}
            label="Add joint applicant to my membership application"
            labelStyle={{color: colors.basic}}
            iconStyle={{fill: colors.basic, marginLeft: 10}}
        />
      </Flex>
      <center><ContinueButton title='KEEP GOING' buttonProps={{type: 'submit'}} style={{ marginTop: 10 }}/></center>
    </form>
  </div>
);

export default reduxForm({form: 'apply', validate})(ApplicantForm);
