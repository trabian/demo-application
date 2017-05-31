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
  marginBottom: '10px'
};

const wrapperStyles = {
  padding: 20,
  paddingBottom:10,
  width: 250,
  height: 360,
  marginRight: '2vw',
  marginLeft: '2vw'
};

const Product_Card = (props)=>{
  return(
    <Col alignItems='center' style={{...wrapperStyles, backgroundColor: props.backgroundColor}}>
      <Flex style={{ flexDirection:'column', alignItems: 'center' }}>
        <img src={props.img} height="95px" alt="Insert image here" style={{ marginTop: '10px' }}/>
      </Flex>

      <Flex style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: 200}}>
        <br />
        <h3 style={{color: '#3c3c3c'}}>{props.title}</h3>
        <p style={{color: '#707275', fontSize: '0.9em', margin: 0, padding: 0}}>{props.subText}</p>
      </Flex>

      <RaisedButton
        fullWidth={true}
        backgroundColor={props.buttonColor}
        style={buttonStyle}
      >
          <div style={{ width: '100%', height: '100%', ...buttonText}}>
           {props.buttonText}
          </div>
      </RaisedButton>
    </Col>
  );
}

export default Product_Card;
