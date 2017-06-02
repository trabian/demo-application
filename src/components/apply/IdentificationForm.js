/* TODO: SETUP REDUX FORMS */

import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';
import {
  TextField
} from 'redux-form-material-ui';

import * as colors from '../../helpers/colors';

const FormTextField = ({label, hint}) => (
  <div>
    <label>{label}</label>
    <br />
    <TextField hintText={hint} underlineStyle={{display: 'none'}}/>
  </div>
);

const NameInputs = ()=>{
  return(
    <Row>
      <FormTextField label='Name' hint='First Name' />
      <FormTextField hint='Middle Initial' />
      <FormTextField hint='Last Name' />
    </Row>
  );
};

const SocAndDOB = ()=>{
  return(
    <Row>
      <FormTextField label='Social Security' hint='###-##-####' />
      <FormTextField label='Date of Birth' hint='MM/DD/YYYY' />
    </Row>
  );
};

const IdentificationForm = ()=>{
  return(

    <Card style={{backgroundColor: colors.formBackground}}>
      <CardText>
        <Col justifyContent='center' alignItems='flex-start'>
          <NameInputs />
          <SocAndDOB />
        </Col>
      </CardText>
    </Card>
  );
};

export default IdentificationForm;
