import React from 'react';
import { Card } from 'material-ui/Card';
import { Row, Col, curry } from 'jsxstyle';

import { StyledTextField } from './form_fields';
import * as colors from '../../helpers/colors';

const CenterRow = curry(Row,{ justifyContent: 'center' });

const IdentificationForm = (props)=>{
  return(
    <Card style={{backgroundColor: colors.form_background, padding: 30}}>
      <Col>
          <CenterRow justifyContent='center'>
            {/* Add label as prop to Field in StyledTextField */}
            <StyledTextField hintText='First Name' name='firstName' width={250}/>
            <StyledTextField hintText='Middle Initial' name='middleInitial' width={126} />
            <StyledTextField hintText='Last Name' name='lastName' width={250}/>
          </CenterRow>
          <CenterRow justifyContent='center'>
            <StyledTextField hintText='###-##-####' name='soc' width={250} />
            <StyledTextField hintText='MM/DD/YYYY' name='dob' width={250} type='date'/>
          </CenterRow>
        </Col>
    </Card>

  );
};

export default IdentificationForm;
