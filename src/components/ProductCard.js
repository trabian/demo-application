import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import { Col } from 'jsxstyle';


const flexstyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Product_Card = (props)=>{
  return(
    <Col alignItems='center' justifyContent='space-around' style={{paddingLeft: '20px',paddingRight: '20px', width: '18vw', height: '40vh', backgroundColor: props.backgroundColor }}>
      <img src={props.img} alt="Insert image here"/>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subText}</p>
      </div>
      <RaisedButton
        fullWidth={true}
        backgroundColor={props.buttonColor}
        labelColor="white"
        style={{height: '6vh', verticalAlign: 'middle'}}>
          <div style={{ width: '100%', height: '100%', ...flexstyle}}>
           {props.buttonText}
          </div>
      </RaisedButton>
    </Col>
  );
}

export default Product_Card;
