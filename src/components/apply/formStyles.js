import React from 'react';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';

import * as colors from 'src/helpers/colors';

const sharedStyle = {
  height: 30,
  fontSize: '12pt',
  border: '1px solid #33875c',
  backgroundColor: colors.basic,
  padding: '3px 12px 3px 12px',
  margin: '10px 10px 32px 10px',
};

const textFieldStyle = width => ({
  ...sharedStyle,
  width: width,
});

const selectFieldStyle = width => ({
  ...sharedStyle,
  height: 30,
  width: width,
});

const hintStyle = {
  bottom: 5,
};

const errorStyle = {
  bottom: 0,
  top: 2,
  lineHeight: '24px',
};

const labelStyle = {
  floatingLabelFixed: true,
  floatingLabelStyle: {
    left: 0,
    top: 3,
    fontSize: '13pt',
    color: '#555',
  }
};

const underlineStyle = {
  display: 'none',
};


export const StyledTextField = ({ hintText, name, width, label=' ', type='text', normalize, required }) => (
  <Field
    name={name}
    component={TextField}
    type={type}
    floatingLabelText={label}
    {...labelStyle}
    underlineStyle={underlineStyle}
    normalize={normalize}
    style={textFieldStyle(width)}
    inputStyle={{marginTop: 0}}
    errorStyle={errorStyle}
    props={{
      hintText,
      hintStyle,
    }}
  />
);

export const StyledDropdownField = ({ name, hintText, children, width, type, label=' ', required=false }) => {
  const childrenItems = children.map(child => <MenuItem key={child} value={child} primaryText={child} />);

  return (
    <Field
      name={name}
      component={SelectField}
      floatingLabelText={label}
      {...labelStyle}
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
  backgroundColor: colors.formBackground,
  padding: '20px 20px 4px 20px',
  width: 1000,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 51
};
