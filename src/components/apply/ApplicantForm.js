import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Flex } from 'jsxstyle';
import { Checkbox } from 'redux-form-material-ui';
import { setSelectedApplicant, setJointApplicantCount } from 'src/reducers/selectedApplicant';

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

const tabStyle = {
  fontSize: '11pt',
  paddingRight: 5,
  paddingLeft: 5,
  fontWeight: 400,
};

const formSubmit = (history) => {
  return (values) =>{
      console.log('submitted.');
      if(!values.addJointApplicant){
        history.push('/disclosures');
      }
  };
};
const selector = formValueSelector('apply');

const mapStateToProps = state => {
  const addJointApplicant = selector(state, 'addJointApplicant');
  return {
    addJointApplicant,
    selectedApplicantId: state.selectedApplicant.id
  };
};

const singleApplicationForm = connect(mapStateToProps)(({ selectedApplicantId, fields, addJointApplicant }) => {
    if(fields.length === 0 || fields.length === selectedApplicantId) {
      fields.push({});
    }

    const fieldMapper = (member, memberIndex) => {
      if(memberIndex !== selectedApplicantId) {
        return null; // only display the currently selected applicant
      }
      return (
        <div key={memberIndex}>
          {fields.map((member, index) => {
            return(
              <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}} key={index}>
                <SectionHeading>Your Identity</SectionHeading>
                <IdentificationForm member={member} />
                <SectionHeading>Contact Information and Address</SectionHeading>
                <ContactInfo member={member} />
                <Flex alignSelf='center' width='45%' style={{marginLeft: 20, marginBottom: 0, marginTop: 30}}>
                  <Field
                    name="addJointApplicant"
                    component={Checkbox}
                    label="Add joint applicant to my membership application"
                    labelStyle={{color: colors.basic}}
                    iconStyle={{fill: colors.basic, marginLeft: 10}}
                  />
                </Flex>
                <center>
                  <ContinueButton
                    title='KEEP GOING'
                    onClick={() => fields.push({})}
                    buttonProps={{type: buttonType(addJointApplicant)}}
                    style={{ marginTop: 10 }}
                  />
                </center>
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <div>
        {fields.map(fieldMapper)}
      </div>
    );
});

      const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;
      const buttonType = (addJointApplicant) => {
        if(addJointApplicant){
          return 'button';
        }
        return 'submit';
      };

      const ApplicantForm = ({selectedApplicantId, jointApplicantCount, setSelectedApplicant, setJointApplicantCount, handleSubmit, history}) => {
        const applicantTabs = _.map(_.range(jointApplicantCount), i => {
          return <Tab style={tabStyle} label={`Joint Applicant ${i + 1}`} key={i} value={i} />;
        });
        // Add an additional tab at the end to add additional joint applicants
        const allTabs = [
          ...applicantTabs,
          <Tab style={tabStyle} label={'+ Add Joint Applicant'} key={applicantTabs.length} value={applicantTabs.length} />
        ];

        const handleTabClick = index => {
          if(index === jointApplicantCount) {
            // the "Add New Applicant" tab was clicked, so add a new applicant to the list
            setJointApplicantCount(jointApplicantCount + 1);
          }
          setSelectedApplicant(index);
        };
        return(
          <div style={{marginBottom: 12}}>
            <form onSubmit={handleSubmit(formSubmit(history))}
              style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Tabs
                style={{width: '100%', marginTop: 26}}
                onChange={handleTabClick}
                value={selectedApplicantId}
                >
                  {allTabs}
                </Tabs>
                <FieldArray name="applications" component={singleApplicationForm} />
              </form>
            </div>
          );
        };

        const mapApplicantFormState = state => ({
          selectedApplicantId: state.selectedApplicant.id,
          jointApplicantCount: state.selectedApplicant.count,
        });

        export default connect(mapApplicantFormState, {setSelectedApplicant, setJointApplicantCount})(
          withRouter(
            reduxForm({form: 'apply', validate})(ApplicantForm)
          )
        );
