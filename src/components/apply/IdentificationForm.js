/* TODO: SETUP REDUX FORMS */

import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Row, Col } from 'jsxstyle';
import {
  TextField
} from 'redux-form-material-ui';
import { Field } from 'redux-form';

import * as colors from '../../helpers/colors';

const required = value => (value == null ? 'Required' : undefined);
const StyledTextField = ({ placeholder, name, width })=>(
  <Field
    name={name}
    component={TextField}
    type="text"
    placeholder={placeholder}
    underlineStyle={{display: 'none'}}
    validate={required}
    style={{
      borderColor: '#33875c',
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: colors.primary_text,
      width: width,
      height: 30,
      marginRight:10,
      marginLeft: 10
    }}
    props={{}}
  />
);


const IdentificationForm = (props)=>{
  return(
    <Card style={{backgroundColor: colors.form_background, padding: 30}}>
      <Col>
          <Row justifyContent='center'>
                {/* Add label as prop to Field */}
                <StyledTextField placeholder='First Name' name='firstName' width={250}/>
                <StyledTextField placeholder='Middle Initial' name='middleInitial' width={100} />
                <StyledTextField placeholder='Last Name' name='lastName' width={250}/>
          </Row>
        </Col>
    </Card>

  );
};

export default IdentificationForm;
