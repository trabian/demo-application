import React from 'react';
import { RaisedButton } from 'material-ui';
import { Col, Flex } from 'jsxstyle';


const buttonText = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff'
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
      <Flex style={{ flexDirection:'column', alignItems: 'center' }}>
        <img src={props.img} height='95px' alt='Insert image here' style={{ marginTop: 15 }}/>
      </Flex>

      <Flex style={{ marginTop: 25, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: 200}}>
        <h3 style={{color: '#3c3c3c'}}>{props.title}</h3>
        <p style={{color: '#707275', fontSize: '0.9em', margin: 0, padding: 0}}>{props.subText}</p>
      </Flex>

      <RaisedButton
        fullWidth={true}
        backgroundColor={props.buttonColor}
        style={buttonStyle}
      >
          <div style={{...buttonText, width: '100%', height: '100%'}}>
           {props.buttonText}
          </div>
      </RaisedButton>
    </Col>
  );
}

export default Product_Card;
