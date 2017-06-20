import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Flex, Row, Col } from 'jsxstyle';

import { UNSELECTED } from 'src/reducers/selectionReducer';
import SavingsCard from 'src/components/product_select/SavingsCard';
import SpendingCard from 'src/components/product_select/SpendingCard';
import CreditCard from 'src/components/product_select/CreditCard';
import ContinueButton from 'src/components/ContinueButton';

import * as colors from 'src/helpers/colors';

const ApplyButton = ({active}) => {
  const buttonInner = <ContinueButton disabled={!active} title='APPLY NOW' />;

  return (
    <div style={{textAlign: 'center', marginTop: 26}}>
      {active ? <Link to='/apply'>{buttonInner}</Link> : buttonInner}
    </div>
  );
};

const ProductSelect = ({active}) => (
  <Col>

    <Flex flexDirection='column' alignItems='center' style={{color: colors.basic, marginTop: 25}}>
      <b style={{ fontSize: '1.5em' }}>Select your products</b>
      <p>Which products would you like?</p>
    </Flex>

    <Row alignSelf='center' style={{marginTop: 10}}>
      <SavingsCard />
      <SpendingCard />
      <CreditCard />
    </Row>

    <Flex alignSelf='center' style={{color: colors.basic, marginTop: 20}}>
      {"Once you submit your online application, we'll contact you within one business day to complete the membership process."}
    </Flex>

    <ApplyButton active={active} />

  </Col>
);

const mapState = state => ({
  active: !_.isUndefined(_.find(state.selected, state => state !== UNSELECTED)),
});

export default connect(mapState)(ProductSelect);
