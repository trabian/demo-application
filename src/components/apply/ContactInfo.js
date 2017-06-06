import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Row } from 'jsxstyle';

import * as colors from '../../helpers/colors';

const required = value => (value == null ? 'Required' : undefined);

const LeftInput = () => (
  <div style={{borderRight: '2px solid #999'}}>
    <Field name='phoneNumber' component={TextField} hintText='(###) ###-####' validate={required} />
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
