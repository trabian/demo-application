import React from 'react';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';

import * as colors from '../../helpers/colors';

const required = value => (value == null ? 'Required' : undefined);

const sharedStyle = {
  height: 30,
  fontSize: '12pt',
  borderColor: '#33875c',
  borderWidth: 1,
  borderStyle: 'solid',
  backgroundColor: colors.primary_text,
  margin: 10
};

const textFieldStyle = width => {
  return {
    ...sharedStyle,
    width: width
  };
};

const selectFieldStyle = width => {
  return {
    ...sharedStyle,
    height: 30,
    width: width,
  };
};

const hintStyle = {
  paddingTop: 4,
  paddingLeft: 16,
  position: 'inline'
};

export const StyledTextField = ({ hintText, name, width })=>(
  <Field
    name={name}
    component={TextField}
    type="text"
    underlineStyle={{display: 'none'}}
    validate={required}
    style={textFieldStyle(width)}
    props={{
      hintText,
      hintStyle
    }}
  />
);

export const StyledDropdownField = ({ name, hintText, children, width, type }) => {
  const childrenItems = children.map(child => <MenuItem key={child} value={child} primaryText={child} />);

  return (
    <Field
      name={name}
      component={SelectField}
      validate={required}
      type={type}
      underlineStyle={{
        display: 'none',
        // marginTop: 8
      }}
      style={selectFieldStyle(width)}
      props={{
        children: childrenItems,
        hintText,
        hintStyle: {...hintStyle, paddingRight: 32}
        // menuStyle: {
        //   marginTop: -35
        // }
      }}
    />
  );
};
