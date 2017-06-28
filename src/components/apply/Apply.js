import React from 'react';
import { connect } from 'react-redux';
import { getFormValues, initialize, touch, blur } from 'redux-form';
import _ from 'lodash';
import { Tabs, Tab } from 'material-ui/Tabs';

import ApplicantForm from 'src/components/apply/ApplicantForm';
import { addJointApplicant, selectJointApplicant } from 'src/actions';

const tabStyle = {
  fontSize: '11pt',
  paddingRight: 5,
  paddingLeft: 5,
  fontWeight: 400,
};

/**
 * Helper function that initializes the form with the new values provided and executes the validators/normalizers
 * for each untouched field as soon as its loaded, causing error messages to be displayed immediately.
 */
const initializeApplyForm = (formData, touchActionDispatcher, blurActionDispatcher) => {
  // Actually insert the new values into the form
  initialize('apply', formData, false);

  // for each field that has values, simulate a `BLUR` event to trigger validators and normalizers
  _.each(formData, (fieldValue, fieldName) => {
    touchActionDispatcher('apply', fieldName);
    blurActionDispatcher('apply', fieldName, fieldValue);
  });
};

const Apply = ({
  curValues, jointApplicantData, selectedApplicantId, jointApplicantCount,
  addJointApplicant, selectJointApplicant, initialize, touch, blur
}) => {
  const applicantTabs = _.map(_.range(jointApplicantCount), i => {
    return <Tab style={tabStyle} label={`Joint Applicant ${i + 1}`} key={i} value={i} />;
  });
  // Add an additional tab at the end to add additional joint applicants
  const allTabs = [
    ...applicantTabs,
    <Tab style={tabStyle} label={'+ Add Joint Applicant'} key={applicantTabs.length} value={applicantTabs.length} />
  ];

  const numberOfApplicantsAllowed = 4;
  const handleTabClick = index => {
    if(index === jointApplicantCount) {
      if(jointApplicantCount < numberOfApplicantsAllowed){
        addJointApplicant();
      }
    }

    selectJointApplicant(index, curValues);
    initializeApplyForm(jointApplicantData[index], touch, blur);
  };

  const removeAddOption = (tabs) => {
    if(tabs.length > numberOfApplicantsAllowed){
      return tabs.slice(0, numberOfApplicantsAllowed);
    }
    return tabs;
  };

  return (
    <div>
      <Tabs
        style={{width: '100%', marginTop: 26}}
        onChange={handleTabClick}
        value={selectedApplicantId}
      >
        {removeAddOption(allTabs)}
      </Tabs>
      <ApplicantForm />
    </div>
  );
};

const applicantValuesSelector = getFormValues('apply');

const mapStateToProps = state => ({
  selectedApplicantId: state.applicants.cursor,
  jointApplicantCount: state.applicants.forms.length,
  jointApplicantData: state.applicants.forms,
  curValues: applicantValuesSelector(state),
});

export default connect(mapStateToProps, {addJointApplicant, selectJointApplicant, initialize, touch, blur})(Apply);
