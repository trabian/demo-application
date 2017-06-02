import React, { Component } from 'react';

import Stepper from 'react-stepper-horizontal';
import { Flex, Inline, curry, Row} from 'jsxstyle';

import SavingsCard from './components/SavingsCard.js';
import SpendingCard from './components/SpendingCard.js';
import CreditCard from './components/CreditCard.js';

import * as colors from './colors.js';

const Container = curry(Flex, {
  paddingTop: 30,
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '80vw',
  margin: '0 auto',
});

const Heading = curry(Inline, {
  color: colors.primary_text,
  fontSize: '2.8em',
  alignSelf: 'flex-start'
});

class App extends Component {
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

export default App;
