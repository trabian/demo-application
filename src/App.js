import React from 'react';

import { Flex, Inline, curry, Row} from 'jsxstyle';

import SavingsCard from 'src/components/SavingsCard.js';
import SpendingCard from 'src/components/SpendingCard.js';
import CreditCard from 'src/components/CreditCard.js';

import * as colors from 'src/helpers/colors.js';

const Container = curry(Flex, {
  paddingTop: 30,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '80vw',
  margin: '0 auto',
});

const Heading = curry(Inline, {
  color: colors.basic,
  fontSize: '2.8em',
  alignSelf: 'flex-start'
});

const App = ()=>(
  <Container>

    <Heading>Member Application</Heading>

    <Flex flexDirection='column' alignItems='center' style={{color: colors.basic}}>
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

export default App;
