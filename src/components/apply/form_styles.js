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
  padding: '3px 12px 3px 12px',
  margin: '10px 10px 32px 10px'
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
  bottom: 5
};

const errorStyle = {
  bottom: 0,
  top: 2,
  lineHeight: '24px'
}

const labelStyle = label => {
  return {
    floatingLabelText: label,
    floatingLabelFixed: true,
    floatingLabelStyle: {
      left: 0,
      top: 3,
      // bottom: 38,
      fontSize: '13pt',
      color: '#555'
    }
  };
};

const underlineStyle = {display: 'none'};

export const StyledTextField = ({ hintText, name, width, label='', type='text' })=>(
  <Field
    name={name}
    component={TextField}
    type={type}
    {...labelStyle(label)}
    underlineStyle={underlineStyle}
    validate={required}
    style={textFieldStyle(width)}
    inputStyle={{marginTop: 0}}
    errorStyle={errorStyle}
    props={{
      hintText,
      hintStyle
    }}
  />
);

export const StyledDropdownField = ({ name, hintText, children, width, type, label=' ' }) => {
  const childrenItems = children.map(child => <MenuItem key={child} value={child} primaryText={child} />);

  return (
    <Field
      name={name}
      component={SelectField}
      {...labelStyle(label)}
      validate={required}
      type={type}
      underlineStyle={underlineStyle}
      style={selectFieldStyle(width)}
      errorStyle={{...errorStyle, top: -12}}
      menuStyle={{top: -32}}
      props={{
        children: childrenItems,
        hintText,
        hintStyle
      }}
    />
  );
};

export const cardStyle = {
  backgroundColor: colors.form_background,
  padding: '20px 20px 4px 20px',
  maxWidth: 1000,
  marginLeft: 'auto',
  marginRight: 'auto',
}
