import React from 'react';
import { RaisedButton } from 'material-ui';
import { Col, Flex } from 'jsxstyle';


const flexstyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonStyle = {
  height: '6vh',
  marginBottom: '10px'
};

const Product_Card = (props)=>{
  return(
    <Col alignItems='center' justifyContent='space-between' style={{paddingLeft: '20px',paddingRight: '20px', width: '250px', height: '350px', backgroundColor: props.backgroundColor, marginRight: '2vw', marginLeft: '2vw' }}>
      <Flex style={{ flexDirection:'column', alignItems: 'center'}}>
        <img src={props.img} alt="Insert image here" width="100px" height="100px"/>
        <h2>{props.title}</h2>
      </Flex>
      <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
        <p>{props.subText}</p>
      </Flex>
      <RaisedButton
        fullWidth={true}
        backgroundColor={props.buttonColor}
        labelColor="white"
        style={buttonStyle}
      >
          <div style={{ width: '100%', height: '100%', ...flexstyle}}>
           {props.buttonText}
          </div>
      </RaisedButton>
    </Col>
  );
}

export default Product_Card;
