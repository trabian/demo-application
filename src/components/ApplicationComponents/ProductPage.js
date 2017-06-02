import React from 'react';
import { Flex, Row } from 'jsxstyle';

import { Container } from '../../helpers/container';
import * as colors from '../../helpers/colors';


const ProductPage = ()=>{
  return(
    <Container>
      <Flex flexDirection='column' alignItems='center' style={{color: colors.primary_text, marginTop: 25}}>
        <b style={{ fontSize: '1.5em' }}>Select your products</b>
        <p>Which products would you like?</p>
      </Flex>

      <Row alignSelf='center' style={{marginTop: 10}}>
        <SavingsCard />
        <SpendingCard />
        <CreditCard />
      </Row>

      <Flex alignSelf="center" style={{color: colors.primary_text, marginTop: 20}}>
      {"Once you submit your online application, we\'ll contact you within one business day to complete the membership process."}
      </Flex>
    </Container>
  );
};


export default ProductPage;
