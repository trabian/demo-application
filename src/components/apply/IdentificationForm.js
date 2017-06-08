import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';

import { StyledTextField, cardStyle } from './form_styles';
import { middleInitial, socialDash } from './form_normalizers';
import { valiDate, validateSocialSec } from './form_validators';

const IdentificationForm = () => (
  <Card style={cardStyle}>
    <Col>
      <Row>
        <StyledTextField label = 'Name' hintText='First Name' name='firstName' width={250} required />
        <StyledTextField
          hintText='Middle Initial'
          name='middleInitial'
          width={94}
          normalize={middleInitial}
          required
        />
        <StyledTextField hintText='Last Name' name='lastName' width={400}/>
      </Row>
      <Row>
        <StyledTextField
          label='Social Security Number'
          hintText='###-##-####'
          name='soc'
          width={250}
          normalize={socialDash}
          validators={[validateSocialSec]}
          required
        />
        <StyledTextField
          label='Date of Birth'
          name='dob'
          width={160}
          type='date'
          validators={[valiDate]}
          required
        />
      </Row>
    </Col>
  </Card>
);

export default IdentificationForm;
