import React, { Component } from 'react';

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
