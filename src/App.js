import React, { Component } from 'react';

import { Flex, Inline, curry } from 'jsxstyle';


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
      </Container>
    );
  }
}

export default App;
