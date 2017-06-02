import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Row } from 'jsxstyle';

import * as colors from '../../helpers/colors';

const FormTextField = ({label, hint}) => (
  <div>
    <label>{label}</label>
    <br />
    <TextField hintText={hint} />
  </div>
);

const LeftInput = () => (
  <div style={{borderRight: '2px solid #999'}}>
    <FormTextField label='Phone Number' hint='(###) ###-####' />
  </div>
);

const RightInput = () => (
  <div>
    Right Input
  </div>
);

const ContactInfo = () => (
  <Card style={{backgroundColor: colors.formBackground}}>
    <CardText>
      <Row>
        <LeftInput />
        <RightInput />
      </Row>
    </CardText>
  </Card>
);

export default ContactInfo;
