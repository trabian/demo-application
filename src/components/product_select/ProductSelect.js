import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import Stepper from '../../Stepper';
import { Flex, Row } from 'jsxstyle';

import SavingsCard from './SavingsCard.js';
import SpendingCard from './SpendingCard.js';
import CreditCard from './CreditCard.js';

import  { Container, Heading } from '../../helpers/container';
import * as colors from '../../helpers/colors.js';

const mapState = state => {
  console.log('state', state);
  return {selected: state.selected};
};

const ApplyButton = connect(mapState)(({selected}) => {
  const active = selected.length !== 0;
  const {disabled, color} = active
    ? {disabled: false, color: colors.selected_button}
    : {disabled: true, color: colors.disabled_button};

  return (
    <div style={{textAlign: 'center'}}>
      <RaisedButton
        backgroundColor={color}
        disabled={disabled}
        label='APPLY NOW'
        style={{marginTop: '26px', width: '275px', height: 50, marginBottom: 10}}
        labelStyle={{fontSize: '18px', fontWeight: active ? 'bold' : 'normal'}}
      />
    </div>
  );
});

class ProductSelect extends Component {
  render() {
    //const stepOneTitle = (this.props.currentStep === 0) ? 'SELECT PRODUCTS' : ('SELECT PRODUCTS ('+this.props.selected.length+')');
    return (
      <Container>

        <Heading>Member Application</Heading>

        <Stepper
          steps={ [{title: 'SELECT PRODUCTS'}, {title: 'APPLY'}, {title: 'DISCLOSURES'}, {title: 'WRAP UP'}] }
          activeStep={ 1 }
          defaultTitleColor='white'
          activeTitleColor='white'
          completeTitleColor='white'
          defaultColor='white'
          completeColor='white'
          activeColor='transparent'
          defaultOpacity='0.5'
        />

        <Flex flexDirection='column' alignItems='center' style={{color: colors.primary_text}}>
          <b style={{ fontSize: '1.5em' }}>Select your products</b>
          <p>Which products would you like?</p>
        </Flex>

        <Row alignSelf='center'>
          <SavingsCard />
          <SpendingCard />
          <CreditCard />
        </Row>

        <ApplyButton />

      </Container>
    );
  }
}

export default ProductSelect;
