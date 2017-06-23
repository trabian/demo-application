import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';
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

const formSubmit = (history) => {
  return (values) =>{
      console.log('submitted.');
      if(!values.addJointApplicant){
        history.push('/disclosures');
      }
  };
};

const singleApplicationForm = () => {
  return(
    <div>
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
    </div>
  );
};

const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;
const buttonType = (addJointApplicant) => {
  if(addJointApplicant){
    return 'button';
  }
  return 'submit';
};

const ApplicantForm = ({ handleSubmit, history, addJointApplicant }) => (
  <div style={{marginBottom: 12}}>
    <form onSubmit={handleSubmit(formSubmit(history))}
    style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
    <FieldArray name="applications'" component={singleApplicationForm} />
    <Flex alignSelf='center' width='45%' style={{marginLeft: 80, marginBottom: 0, marginTop: 30}}>
      <Field
        name="addJointApplicant"
        component={Checkbox}
        label="Add joint applicant to my membership application"
        labelStyle={{color: colors.basic}}
        iconStyle={{fill: colors.basic, marginLeft: 10}}
      />
    </Flex>
    <center>
      <ContinueButton title='KEEP GOING' buttonProps={{type: buttonType(addJointApplicant)}} style={{ marginTop: 10 }}/>
    </center>
  </form>
</div>
);


const selector = formValueSelector('apply');
const ApplicantFormWithValues = connect(
  state => {
    const addJointApplicant = selector(state, 'addJointApplicant');
    return {
      addJointApplicant
    };
  }
)(ApplicantForm)

export default withRouter(reduxForm({form: 'apply', validate})(ApplicantFormWithValues));
