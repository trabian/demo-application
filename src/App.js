import React, { Component } from 'react';

import { Flex, Inline, curry } from 'jsxstyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ProductCard from './components/ProductCard.js';


const Container = curry(Flex, {
  padding: 30,
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "100vh",
  width: "80vw",
  margin: "0 auto",
})

const Heading = curry(Inline, {
  color: '#fff',
  fontSize: '3em',
})


class App extends Component {
  render() {
    return (
      <Container>
        <Flex>
          <Heading color="#fff">Member Application</Heading>
        </Flex>
        <MuiThemeProvider>
          <ProductCard img="" title="Test" subText="subText" buttonText="button" buttonColor="#3d917b" backgroundColor="white"/>
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default App;
