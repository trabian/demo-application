import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Flex, Row, Col } from 'jsxstyle';

import { SELECTED, HOVERED } from '../../reducers/selectionReducer';
import ContinueButton from '../ContinueButton';
import SavingsCard from './SavingsCard';
import SpendingCard from './SpendingCard';
import CreditCard from './CreditCard';

import * as colors from '../../helpers/colors';

const getSelectedProductCount = (selectedProducts) => {
  return _.reduce(selectedProducts, (result, state) => {
    if(state === SELECTED || state === HOVERED){
      return result + 1;
    }
    return result;
  }, 0);
};

const mapStateToProps = state => {
  return {
    selected: state.selected,
  };
};

const ApplyButton = connect(mapStateToProps)(({selected}) => {
  const disabled = getSelectedProductCount(selected) === 0;
  const button = <ContinueButton title='APPLY NOW' disabled={disabled} />
  return disabled ? button : <Link to='/apply'>{button}</Link>;
});

class ProductSelect extends Component {
  render() {
    return (
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

        <ApplyButton />
      </Col>
    );
  }
}

export default ProductSelect;
