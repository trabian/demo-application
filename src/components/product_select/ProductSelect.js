import React, { Component } from 'react';

import Stepper from 'react-stepper-horizontal';
import { Flex, Row } from 'jsxstyle';

import SavingsCard from './SavingsCard.js';
import SpendingCard from './SpendingCard.js';
import CreditCard from './CreditCard.js';

import  { Container, Heading } from '../../helpers/container';
import * as colors from '../../helpers/colors.js';

class ProductSelect extends Component {
  render() {
    return (

      <Container>

        <Heading>Member Application</Heading>

        <Stepper
          steps={ [{title: 'SELECT PRODUCTS'}, {title: 'APPLY'}, {title: 'DISCLOSURES'}, {title: 'WRAP UP'}] }
          activeStep={ 0 }
          defaultTitleColor='white'
          activeTitleColor='white'
          completeTitleColor='white'
          defaultColor='white'
          completedColor='white'
          activeColor='transparent'
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

      </Container>
    );
  }
}

export default ProductSelect;
