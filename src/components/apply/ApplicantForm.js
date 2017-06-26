import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxForm, FieldArray } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

import IdentificationForm from 'src/components/apply/IdentificationForm';
import ContactInfo from 'src/components/apply/ContactInfo';
import ContinueButton from 'src/components/ContinueButton';
import { validate } from 'src/components/apply/formValidators';
import { setSelectedApplicant, setJointApplicantCount } from 'src/reducers/selectedApplicant';

const headingStyle = {
  fontSize: '18pt',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 22,
  fontWeight: 'bold',
};

const formSubmit = (history) => {
  return (values) => {
    console.log('submitted.');
    if(!values.addJointApplicant){
      history.push('/disclosures');
    }
  };
};

const mapStateToProps = state => ({
  selectedApplicantId: state.selectedApplicant.id,
});

const SectionHeading = ({ children }) => <div style={headingStyle}>{children}</div>;

const singleApplicationForm = connect(mapStateToProps)(({ selectedApplicantId, fields }) => {
  if(fields.length === 0 || fields.length === selectedApplicantId) {
    fields.push({});
    return <span />;
  }

  const fieldMapper = (member, memberIndex) => {
    if(memberIndex !== selectedApplicantId) {
      return null; // only display the currently selected applicant
    }

    return (
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}} key={memberIndex}>
        <SectionHeading>Your Identity</SectionHeading>
        <IdentificationForm namePrefix={member} />
        <SectionHeading>Contact Information and Address</SectionHeading>
        <ContactInfo namePrefix={member} />

        <center>
          <ContinueButton
            title='KEEP GOING'
            style={{ marginTop: 10 }}
          />
        </center>
      </div>
    );
  };

  return (
    <div>
      {fields.map(fieldMapper)}
    </div>
    );
});

const ApplicantForm = ({ selectedApplicantId, jointApplicantCount, setSelectedApplicant, setJointApplicantCount, handleSubmit, history }) => {
  const applicantTabs = _.map(_.range(jointApplicantCount), i => <Tab label={`Joint Applicant ${i + 1}`} key={i} value={i} />);
  const allTabs = [...applicantTabs, <Tab label={'Add Joint Applicant'} key={applicantTabs.length} value={applicantTabs.length} />];

  const handleTabClick = index => {
    if(index === jointApplicantCount) {
      // the "Add New Applicant" tab was clicked, so add a new applicant to the list
      setJointApplicantCount(jointApplicantCount + 1);
    }
    setSelectedApplicant(index);
  };

  return (
    <div style={{marginBottom: 12}}>
      <form
        onSubmit={handleSubmit(formSubmit(history))}
        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <Tabs
          onChange={handleTabClick}
          value={selectedApplicantId}
        >
          {allTabs}
        </Tabs>

        <FieldArray name="applications" component={singleApplicationForm} />
      </form>
    </div>
  );
}

const mapApplicantFormState = state => ({
  selectedApplicantId: state.selectedApplicant.id,
  jointApplicantCount: state.selectedApplicant.count,
});

export default connect(mapApplicantFormState, {setSelectedApplicant, setJointApplicantCount})(withRouter(reduxForm({form: 'apply', validate})(ApplicantForm)));
