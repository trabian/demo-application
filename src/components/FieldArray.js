import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { Field, FieldArray, reduxForm } from 'redux-form'

import { setSelectedApplicant } from 'src/reducers/selectedApplicant';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const mapState = state => ({
  selectedApplicantId: state.selectedApplicant.id,
});

const renderMembers = connect(mapState, {setSelectedApplicant})(({ selectedApplicantId, setSelectedApplicant, fields, meta: { touched, error, submitFailed } }) => (
  <div>
    <button type="button" onClick={() => fields.push({})}>Add Member</button>
    {(touched || submitFailed) && error && <span>{error}</span>}

    <Tabs
      onChange={setSelectedApplicant}
      value={selectedApplicantId}
    >
      {_.map(fields, (field, i) => <Tab label={`Joint Applicant ${i + 1}`} key={i} value={i} />)}
    </Tabs>

    <SwipeableViews
      index={selectedApplicantId}
      onChangeIndex={setSelectedApplicant}
    >
      {fields.map((member, index) => {
        return (
          <div key={index}>
            <h4>Joint Applicant #{index + 1}</h4>
            <Field
              name={`${member}.firstName`}
              type="text"
              component={renderField}
              label="First Name"
            />
            <Field
              name={`${member}.lastName`}
              type="text"
              component={renderField}
              label="Last Name"
            />
          </div>
        );
      })}
    </SwipeableViews>
  </div>
));

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit((values)=> console.log(values))}>
      <FieldArray name="applications" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'fieldArrays'
})(FieldArraysForm);
