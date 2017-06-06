import React from 'react';
import {
  TextField
} from 'redux-form-material-ui';
import { Field } from 'redux-form';

import * as colors from '../../helpers/colors';

const required = value => (value == null ? 'Required' : undefined);
export const StyledTextField = ({ hintText, name, width, type })=>(
  <Field
    name={name}
    component={TextField}
    type={type}
    placeholder={hintText}
    underlineStyle={{display: 'none'}}
    validate={required}
    style={{
      borderColor: '#33875c',
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: colors.primary_text,
      width: width,
      height: 30,
      margin:10,
      paddingLeft: 10
    }}
    props={{

    }}
  />
);
