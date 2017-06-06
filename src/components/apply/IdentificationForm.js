import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col, curry } from 'jsxstyle';

import { StyledTextField, cardStyle } from './form_styles';

// const CenterRow = curry(Row,{ justifyContent: 'left' });

const IdentificationForm = () => (
  <Card style={cardStyle}>
    <Col>
      <Row>
        {/* Add label as prop to Field in StyledTextField */}
        <StyledTextField label = 'Name' hintText='First Name' name='firstName' width={250}/>
        <StyledTextField hintText='Middle Initial' name='middleInitial' width={94} />
        <StyledTextField hintText='Last Name' name='lastName' width={400}/>
      </Row>
      <Row>
        <StyledTextField label='Social Security Number' hintText='###-##-####' name='soc' width={250} />
        <StyledTextField label='Date of Birth' name='dob' width={160} type='date'/>
      </Row>
    </Col>
  </Card>
);

export default IdentificationForm;
