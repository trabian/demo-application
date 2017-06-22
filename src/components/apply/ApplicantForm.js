import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Flex } from 'jsxstyle';
import Checkbox from 'material-ui/Checkbox';

import IdentificationForm from 'src/components/apply/IdentificationForm';
import ContactInfo from 'src/components/apply/ContactInfo';
import ContinueButton from 'src/components/ContinueButton';
import { validate } from 'src/components/apply/formValidators';
import * as colors from 'src/helpers/colors';
import { checkedJointAccount } from 'src/actions/';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold',
};

const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;

const ApplicantForm = ({ handleSubmit, checkedJointAccount, checked }) => (
  <div style={{marginBottom: 12}}>
    <form onSubmit={handleSubmit((values) => {
      /* changes the value of checked to false for the next form */
      if(checked){
        checkedJointAccount();
      }
  })} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <SectionHeading>Your Identity</SectionHeading>
      <IdentificationForm />
      <SectionHeading>Contact Information and Address</SectionHeading>
      <ContactInfo />
      <Flex alignSelf='center' width='40%' style={{marginLeft: 60, marginBottom: 0, marginTop: 30}}>
        <Checkbox
          label="Add joint applicant to my membership application"
          labelStyle={{color: colors.basic}}
          iconStyle={{fill: colors.basic}}
          onCheck={checkedJointAccount}
        />
      </Flex>
      <center><ContinueButton title='KEEP GOING' buttonProps={{type: 'submit'}} style={{ marginTop: 10 }}/></center>
    </form>
  </div>
);

const mapStateToProps = state =>( { checked: state.checked } );

export default connect( mapStateToProps, { checkedJointAccount })(reduxForm({form: 'apply', validate})(ApplicantForm));
