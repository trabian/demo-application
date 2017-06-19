import React from 'react';

import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';


import { StyledTextField, cardStyle } from 'src/components/apply/formStyles';
import { validatorNormalizer, maxLengthValidator, numericalValidator, stringValidator } from 'src/components/apply/formNormalizers';

const IdentificationForm = () => (
  <Card style={{...cardStyle, paddingTop: 25}}>
    <Row>
    <Col>
      <Row>
        <StyledTextField label ='Name' hintText='First Name' name='firstName' width={314} required />
        <StyledTextField
          hintText='Middle Initial'
          name='middleInitial'
          width={94}
          required
          normalize={validatorNormalizer([maxLengthValidator(1), stringValidator])}
        />
        <StyledTextField hintText='Last Name' name='lastName' width={351}/>
      </Row>
      <Row>
        <StyledTextField
          label='Social Security Number'
          hintText='###-##-####'
          name='soc'
          width={250}
          required
          normalize={validatorNormalizer([maxLengthValidator(9), numericalValidator])}
        />
        <StyledTextField
          label='Date of Birth'
          name='dob'
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
