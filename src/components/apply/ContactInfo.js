import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';

import usStates from 'src/data/usStates';
import { maxLengthValidator, numericalValidator, simpleNormalizer, validatorNormalizer } from 'src/components/apply/formNormalizers';

import { StyledTextField, StyledDropdownField, cardStyle } from 'src/components/apply/formStyles';

const LeftInput = ({namePrefix}) => (
  <Col style={{borderRight: '2px solid #999', height: 140, paddingBottom: 0}}>
    <Row>
      <Col>
        <StyledTextField
          name={`${namePrefix}.phoneNumber`}
          label='Phone Number'
          hintText='(###) ###-####'
          width={204}
          required
          normalize={validatorNormalizer([maxLengthValidator(10), numericalValidator])}
        />
      </Col>
      <Col>
        <StyledDropdownField
          name={`${namePrefix}.phoneNumberType`}
          hintText='Phone Type'
          width={148}
          children={['Home', 'Phone', 'Work']}
          required
        />
      </Col>
    </Row>

    <Row>
      <StyledTextField
        name={`${namePrefix}.emailAddress`}
        label='Email Address'
        hintText='you@amazing.rad'
        width={400}
        required
      />
    </Row>
  </Col>
);

const RightInput = ({namePrefix}) => (
  <Col style={{height: 140}}>
    <Row>
      <Col>
        <StyledTextField
          name={`${namePrefix}.address`}
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
          name={`${namePrefix}.city`}
          label='City Name'
          hintText='Washington DC'
          width={175}
          required
        />
      </Col>
      <Col>
        <StyledDropdownField
          name={`${namePrefix}.state`}
          label='State'
          hintText='DC'
          width={60}
          children={usStates}
          required
        />
      </Col>
      <Col>
        <StyledTextField
          name={`${namePrefix}.zipCode`}
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

const ContactInfo = ({namePrefix}) => (
  <Card style={cardStyle}>
    <Col>
    <Row style={{paddingBottom: 20, paddingTop: 10}}>
      <LeftInput namePrefix={namePrefix} />
      <RightInput namePrefix={namePrefix} />
    </Row>
  </Col>
  </Card>
);

export default ContactInfo;
