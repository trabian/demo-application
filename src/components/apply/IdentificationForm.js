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
                <StyledTextField placeholder='First Name' name='firstName' width={250}/>
                <StyledTextField placeholder='Middle Initial' name='middleInitial' width={100} />
                <StyledTextField placeholder='Last Name' name='lastName' width={250}/>
          </CenterRow>
          <CenterRow justifyContent='center'>
            <StyledTextField placeholder='###-##-####' name='soc' width={250} />
            <StyledTextField placeholder='MM/DD/YYYY' name='dob' width={250} type='date'/>
          </CenterRow>
        </Col>
    </Card>

  );
};

export default IdentificationForm;
