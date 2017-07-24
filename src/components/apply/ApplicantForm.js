import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxForm, FieldArray } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Row } from 'jsxstyle';

import IdentificationForm from 'src/components/apply/IdentificationForm';
import ContactInfo from 'src/components/apply/ContactInfo';
import ContinueButton from 'src/components/ContinueButton';
import { validate } from 'src/components/apply/formValidators';
import { setSelectedApplicant, setJointApplicantCount } from 'src/reducers/selectedApplicant';
import { removeJointApplicant } from 'src/actions/';

//maximum number of applications allowed.
const MAX_APPLICANTS = 4;

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
    console.log('submitted.'); // TODO
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

const tabStyle = {
  fontSize: '11pt',
  paddingRight: 5,
  paddingLeft: 5,
  fontWeight: 400,
};
const updatedSelectedIndex = (index, jointApplicantCount) => {
  if(index === 0){
    return 0;
  }
  else if(jointApplicantCount-1 === index){
    return index - 1;
  }
  return index;
}

const removeTab = (index, jointApplicantCount, setJointApplicantCount, setSelectedApplicant, removeJointApplicant) =>(
  () => {
        removeJointApplicant(index);
        setSelectedApplicant(updatedSelectedIndex(index, jointApplicantCount));
        setJointApplicantCount(jointApplicantCount-1);
  }
);

const displayDeleteButton = (jointApplicantCount, onClick) => {
  if(jointApplicantCount > 1){
    return(
        <div style={{position: 'absolute', right: 10, bottom: 15}} onClick={onClick}>X</div>
    );
  }
}

const tabLabel = (index, jointApplicantCount, setJointApplicantCount, setSelectedApplicant, removeJointApplicant) => (
  <Row alignItems='center'>
    {`Joint Applicant ${index + 1}`}
    {displayDeleteButton(jointApplicantCount, removeTab(index, jointApplicantCount, setJointApplicantCount, setSelectedApplicant, removeJointApplicant))}
  </Row>
);

const displayTabs = (tabs) => {
  if(tabs.length < MAX_APPLICANTS){
    return tabs;
  }
  return tabs.slice(0, MAX_APPLICANTS);
}

const ApplicantForm = ({ selectedApplicantId, jointApplicantCount, setSelectedApplicant, setJointApplicantCount, removeJointApplicant, handleSubmit, history }) => {
  const applicantTabs = _.map(_.range(jointApplicantCount), i => {
    return <Tab style={tabStyle}
      label={tabLabel(i, jointApplicantCount, setJointApplicantCount, setSelectedApplicant, removeJointApplicant)}
      key={i} value={i} />;
  });
  // Add an additional tab at the end to add additional joint applicants
  const allTabs = [
    ...applicantTabs,
    <Tab style={tabStyle} label={'+ Add Joint Applicant'} key={applicantTabs.length} value={applicantTabs.length} />
  ];

  const handleTabClick = index => {
    if(index === jointApplicantCount && jointApplicantCount < MAX_APPLICANTS) {
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
          style={{width: '100%', marginTop: 26}}
          onChange={handleTabClick}
          value={selectedApplicantId}
        >
          {displayTabs(allTabs)}
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

export default connect(mapApplicantFormState, {setSelectedApplicant, setJointApplicantCount, removeJointApplicant})(
  withRouter(
    reduxForm({form: 'apply', validate})(ApplicantForm)
  )
);
