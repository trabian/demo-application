import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Flex, Row, Col } from 'jsxstyle';

import SavingsCard from './SavingsCard.js';
import SpendingCard from './SpendingCard.js';
import CreditCard from './CreditCard.js';
import ContinueButton from '../ContinueButton';

import * as colors from '../../helpers/colors.js';

const mapStateToProps = state => {
  return {
    selected: state.selected,
  };
};

const ApplyButton = connect(mapStateToProps)(({selected}) => {
  const disabled = selected.length === 0;
  const button = <ContinueButton title='APPLY NOW' disabled={disabled} />
  return disabled ? button : <Link to='/apply'>{button}</Link>;
});

const ProductSelect = () => (
  <Col>

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
      {"Once you submit your online application, we'll contact you within one business day to complete the membership process."}
    </Flex>

    <ApplyButton />
  </Col>
);

export default ProductSelect;
