import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Row } from 'jsxstyle';

import * as colors from '../../helpers/colors';

import { StyledTextField, StyledDropdownField } from './form_fields';

const LeftInput = () => (
  <div style={{borderRight: '2px solid #999'}}>
    <StyledTextField name='phoneNumber' hintText='(###) ###-####' width={250} />
    <StyledDropdownField
      name='phoneNumberType'
      hintText='Phone Type'
      width={148}
      children={['Home', 'Phone', 'Work']}
    />
    <br />
    <StyledTextField name='emailAddress' hintText='Email Address' width={250} />
  </div>
);

const RightInput = () => (
  <div>
    Right Input
  </div>
);

const ContactInfo = () => (
  <Card style={{backgroundColor: colors.form_background}}>
    <CardText>
      <Row>
        <LeftInput />
        <RightInput />
      </Row>
    </CardText>
  </Card>
);

export default ContactInfo;
