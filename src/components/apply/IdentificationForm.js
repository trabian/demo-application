import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';

import { StyledTextField, cardStyle } from './form_styles';

const middleInitial = (value, previousValue)=>(value.length > 1 ? previousValue: value);
const socialDash = (value, previousValue) =>{
  if(value){
    if(value.length > 11){
      return  previousValue;
    }
    if(previousValue && value.length < previousValue.length){
      return value;
    }
    else if((value.length % 3 === 0) && value.length !== 9){
      return value+'-';
    }
  }
  return value;
};

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
          required
        />
        <StyledTextField label='Date of Birth' name='dob' width={160} type='date'/>
      </Row>
    </Col>
  </Card>
);

export default IdentificationForm;
