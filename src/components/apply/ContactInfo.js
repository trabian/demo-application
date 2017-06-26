import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';

import usStates from 'src/data/usStates';
import { maxLengthValidator, numericalValidator, simpleNormalizer, validatorNormalizer } from 'src/components/apply/formNormalizers';

import { StyledTextField, StyledDropdownField, cardStyle } from 'src/components/apply/formStyles';

const LeftInput = ({ member }) => (
  <Col style={{borderRight: '2px solid #999', height: 140, paddingBottom: 0}}>
    <Row>
      <Col>
        <StyledTextField
          name={`${member}.phoneNumber`}
          label='Phone Number'
          hintText='(###) ###-####'
          width={204}
          required
          normalize={validatorNormalizer([maxLengthValidator(10), numericalValidator])}
        />
      </Col>
      <Col>
        <StyledDropdownField
          name={`${member}.phoneNumberType`}
          hintText='Phone Type'
          width={148}
          children={['Home', 'Phone', 'Work']}
          required
        />
      </Col>
    </Row>

    <Row>
      <StyledTextField
        name={`${member}.emailAddress`}
        label='Email Address'
        hintText='you@amazing.rad'
        width={400}
        required
      />
    </Row>
  </Col>
);

const RightInput = ({ member }) => (
  <Col style={{height: 140}}>
    <Row>
      <Col>
        <StyledTextField
          name={`${member}.address`}
          label='Physical Address'
          hintText='1600 Pennsylvania Ave'
          width={403}
          required
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <StyledTextField
          name={`${member}.city`}
          label='City Name'
          hintText='Washington DC'
          width={175}
          required
        />
      </Col>
      <Col>
        <StyledDropdownField
          name={`${member}.state`}
          label='State'
          hintText='DC'
          width={60}
          children={usStates}
          required
        />
      </Col>
      <Col>
        <StyledTextField
          name={`${member}.zipCode`}
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

const ContactInfo = ({ member }) => (
  <Card style={cardStyle}>
    <Col>
    <Row style={{paddingBottom: 20, paddingTop: 10}}>
      <LeftInput member={member}/>
      <RightInput member={member}/>
    </Row>
  </Col>
  </Card>
);

export default ContactInfo;
