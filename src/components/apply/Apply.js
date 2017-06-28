import React from 'react';
import { connect } from 'react-redux';
import { getFormValues, initialize, touch, blur } from 'redux-form';
import _ from 'lodash';
import { Tabs, Tab } from 'material-ui/Tabs';

import ContinueButton from 'src/components/ContinueButton';
import ApplicantForm from 'src/components/apply/ApplicantForm';
import { addJointApplicant, selectJointApplicant } from 'src/actions';
import { validate } from 'src/components/apply/formValidators';
import * as fieldNames from 'src/helpers/fieldNames';

const blankApplicantForm = () => _.fromPairs(_.map(_.values(fieldNames), fieldName => [fieldName, '']));

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

/**
 * Returns a function that validates each of the forms individually, switching to any invalid applicant tabs
 * in the case of an error and only actually submitting the form if they all all validate successfully.
 */
const createFormSubmitHandler = (jointApplicantData, curData, curApplicantIndex, switchToTab) => () => {
  // manually assign the current form data into the joint applicant data array
  jointApplicantData[curApplicantIndex] = curData;
  // manually validate the data from each of the applicant tabs
  _.each(jointApplicantData, (datum, index) => {
    // combine the data from the state with a blank application so empty fields are validated
    const mergedDatum = _.assign(blankApplicantForm(), datum);
    const errors = validate(mergedDatum);

    if(_.keys(errors).length !== 0) {
      // switch to the first tab that has errors on it
      switchToTab(mergedDatum, index);
    }
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
  const switchToTab = (newData, index) => {
    if(index === jointApplicantCount) {
      if(jointApplicantCount < numberOfApplicantsAllowed){
        addJointApplicant();
      }
    }

    selectJointApplicant(index, curValues);
    initializeApplyForm(newData, touch, blur);
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
        onChange={index => switchToTab(jointApplicantData[index], index)}
        value={selectedApplicantId}
      >
        {removeAddOption(allTabs)}
      </Tabs>

      <ApplicantForm />

      <center>
        <ContinueButton
          title='KEEP GOING'
          buttonProps={{type: 'submit'}}
          style={{ marginTop: 10 }}
          onClick={createFormSubmitHandler(jointApplicantData, curValues, selectedApplicantId, switchToTab)}
        />
      </center>
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
