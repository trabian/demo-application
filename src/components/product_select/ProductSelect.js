import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

import { Flex, Row, Col } from 'jsxstyle';

import SavingsCard from 'src/components/product_select/SavingsCard';
import SpendingCard from 'src/components/product_select/SpendingCard';
import CreditCard from 'src/components/product_select/CreditCard';

import * as colors from 'src/helpers/colors';

const mapState = state => {
  return {selected: state.selected};
};

const ForwardIcon = ({active}) => (
  <i
    className='material-icons'
    style={{display: 'inline-flex', marginBottom: 5, verticalAlign: 'middle', fontSize: 28, color: (active ? colors.basic : '')}}
  >
    forward
  </i>
);

const ApplyButton = connect(mapState)(({selected}) => {
  const active = selected.length !== 0;
  const {disabled, color, fontColor} = active
    ? {disabled: false, color: colors.success, fontColor: colors.basic}
    : {disabled: true, color: colors.primary};


  const buttonInner = (
    <RaisedButton
      backgroundColor={color}
      disabled={disabled}
      icon={<ForwardIcon active={active}/>}
      label='APPLY NOW'
      labelColor={fontColor}
      labelPosition='before'
      style={{width: 275, marginBottom: 10, height: 50}}
      labelStyle={{fontSize: 18, fontWeight: active ? 'bold' : 'normal'}}
    />
  );

  return (
    <div style={{textAlign: 'center', marginTop: 26}}>
      {active ? <Link to='/apply'>{buttonInner}</Link> : buttonInner}
    </div>
  );
});

const ProductSelect = () =>(
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


export default ProductSelect;
