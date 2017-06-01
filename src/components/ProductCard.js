import React from 'react';
import { RaisedButton } from 'material-ui';
import { Col, Flex } from 'jsxstyle';

import * as colors from '../colors.js';

const buttonText = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary_text
};

const buttonStyle = {
  height: '6vh',
  marginBottom: 10
};

const wrapperStyles = {
  padding: 20,
  paddingBottom:10,
  width: 250,
  height: 340,
  marginRight: '2vw',
  marginLeft: '2vw'
};

const Product_Card = (props)=>{
  return(
    <Col alignItems='center' style={{...wrapperStyles, backgroundColor: props.backgroundColor}}>
      <Col alignItems='center'>
        <img src={props.img} alt='' style={{ marginTop: 15, height: 95 }}/>
      </Col>

      <Flex flexDirection='column' alignItems='center' justifyContent='flex-start' style={{ marginTop: 25, height: 200}}>
        <h3 style={{color: colors.card_title}}>{props.title}</h3>
        <p style={{color: colors.card_subtext, fontSize: '0.9em', margin: 0, padding: 0}}>{props.subText}</p>
      </Flex>

      <RaisedButton
        fullWidth
        backgroundColor={colors.unseleted_button}
        style={buttonStyle}
      >
          <div style={{...buttonText, width: '100%', height: '100%'}}>
           Add To My Selection
          </div>
      </RaisedButton>
    </Col>
  );
}

export default Product_Card;


/*
Question:
-How will I set the backgroundColor of each button based on the state?
 Each card needs someway to use its title as a property of the state object returned by the selection_reducer.
*/
