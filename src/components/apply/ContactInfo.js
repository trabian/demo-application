import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';

import usStates from '../../data/usStates';

import { StyledTextField, StyledDropdownField, cardStyle } from 'src/components/apply/form_styles';
import { normalizePhoneNumber, normalizeZipCode } from 'src/components/apply/form_normalizers';
import { validateEmail, validatePhoneNumber, validateZipCode } from 'src/components/apply/form_validators';

const LeftInput = () => (
  <Col style={{borderRight: '2px solid #999', height: 140, paddingBottom: 0}}>
    <Row>
      <Col>
        <StyledTextField
          name='phoneNumber'
          label='Phone Number'
          hintText='(###) ###-####'
          width={250}
          normalize={normalizePhoneNumber}
          validators={[validatePhoneNumber]}
          required
        />
      </Col>
      <Col>
        <StyledDropdownField
          name='phoneNumberType'
          hintText='Phone Type'
          width={148}
          children={['Home', 'Phone', 'Work']}
          required
        />
      </Col>
    </Row>

    <Row>
      <StyledTextField
        name='emailAddress'
        label='Email Address'
        hintText='you@amazing.rad'
        width={444}
        validators={[validateEmail]}
        required
      />
    </Row>
  </Col>
);

const RightInput = () => (
  <Col style={{height: 140}}>
    <Row>
      <Col>
        <StyledTextField
          name='address'
          label='Physical Address'
          hintText='1600 Pennsylvania Ave'
          width={400}
          required
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <StyledTextField
          name='city'
          label='City Name'
          hintText='Washington DC'
          width={175}
          required
        />
      </Col>
      <Col>
        <StyledDropdownField
          name='state'
          label='State'
          hintText='DC'
          width={60}
          children={usStates}
          required
        />
      </Col>
      <Col>
        <StyledTextField
          name='zipCode'
          label='Zip Code'
          hintText='20500'
          width={75}
          normalize={normalizeZipCode}
          type='number'
          validators={[validateZipCode]}
          required
        />
      </Col>
    </Row>
  </Col>
);

const ContactInfo = () => (
  <Card style={cardStyle}>
      <Row style={{paddingBottom: 20, paddingTop: 10}}>
        <LeftInput />
        <RightInput />
      </Row>
  </Card>
);

export default ContactInfo;
