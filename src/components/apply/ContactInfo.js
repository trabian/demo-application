import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';

import usStates from 'src/data/usStates';
import { maxLengthValidator, simpleNormalizer } from 'src/components/apply/formNormalizers';

import { StyledTextField, StyledDropdownField, cardStyle } from 'src/components/apply/formStyles';

const LeftInput = () => (
  <Col style={{borderRight: '2px solid #999', height: 140, paddingBottom: 0}}>
    <Row>
      <Col>
        <StyledTextField
          name='phoneNumber'
          label='Phone Number'
          hintText='(###) ###-####'
          width={250}
          required
          normalize={simpleNormalizer(maxLengthValidator(10))}
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
          type='number'
          required
          normalize={simpleNormalizer(maxLengthValidator(5))}
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
