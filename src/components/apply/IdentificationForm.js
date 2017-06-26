import React from 'react';

import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';

import { StyledTextField, cardStyle } from 'src/components/apply/formStyles';
import { validatorNormalizer, maxLengthValidator, numericalValidator, stringValidator } from 'src/components/apply/formNormalizers';

const IdentificationForm = ({ member }) => (
  <Card style={{...cardStyle, paddingTop: 25}}>
    <Row>
      <Col>
        <Row>
          <StyledTextField label ='Name' hintText='First Name' name={`${member}.firstName`} width={314} required />
          <StyledTextField
            hintText='Middle Initial'
            name={`${member}.middleInitial`}
            width={94}
            required
            normalize={validatorNormalizer([maxLengthValidator(1), stringValidator])}
          />
          <StyledTextField hintText='Last Name' name={`${member}.lastName`} width={351}/>
        </Row>
        <Row>
          <StyledTextField
            label='Social Security Number'
            hintText='###-##-####'
            name={`${member}.soc`}
            width={250}
            required
            normalize={validatorNormalizer([maxLengthValidator(9), numericalValidator])}
          />
          <StyledTextField
            label='Date of Birth'
            name={`${member}.dob`}
            width={160}
            type='date'
            required
          />
        </Row>
      </Col>
    </Row>
  </Card>
);

export default IdentificationForm;
