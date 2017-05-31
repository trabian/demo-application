import React, { Component } from 'react';

import { Flex, Inline, curry} from 'jsxstyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ProductCard from './components/ProductCard.js';
import savingsImage from './components/images/savings.png';
import cardImage from './components/images/card.png';
import spendingImage from './components/images/spending.png';

const Container = curry(Flex, {
  paddingTop: 30,
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "80vw",
  margin: "0 auto",
});

const Heading = curry(Inline, {
  color: '#fff',
  fontSize: '2.8em',
  alignSelf: 'flex-start'
});

const FlexRow = curry(Flex, {
  flexDirection: 'row'
});

class App extends Component {
  render() {
    return (
      <Container>
        <Flex>
          <Heading color="#fff">Member Application</Heading>
        </Flex>
        <Flex style={{ alignSelf: 'center', flexDirection: 'column', alignItems: 'center', color: 'white'}}>
            <b style={{ fontSize: '1.5em' }}>Select your products</b>
            <p>Which products would you like?</p>
        </Flex>
        <FlexRow style={{ alignSelf: 'center' }}>
          <MuiThemeProvider>
            <ProductCard img={savingsImage} title="Savings Account"
            subText="Your membership begins with a $20 deposit into a savings account. This account also pays dividents."
            buttonText="Add To My Selection" buttonColor="#3d917b" backgroundColor="white"
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ProductCard img={cardImage} title="Spending Account"
            subText="Your spending account is what your debit card, paper checks and other expenditures will draw from. You may also use this account for your direct deposit."
            buttonText="Selected" buttonColor="#64ac31" backgroundColor="white"
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ProductCard img={spendingImage} title="Credit Card"
            subText="We focus on keeping our credit card rates fair and costs low. If you already have a card, we may be able to help you reduce your payments."
            buttonText="Remove" buttonColor="#d40f61" backgroundColor="white"/>
          </MuiThemeProvider>
        </FlexRow>
      </Container>
    );
  }
}

export default App;
