import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

import Stepper from '../../Stepper';
import { Flex, Row } from 'jsxstyle';

import SavingsCard from './SavingsCard.js';
import SpendingCard from './SpendingCard.js';
import CreditCard from './CreditCard.js';

import  { Container, Heading } from '../../helpers/container';
import * as colors from '../../helpers/colors.js';

const mapState = state => {
  return {selected: state.selected};
};

const ForwardIcon = ({active}) => (
  <i
    className="material-icons"
    style={{display: 'inline-flex', marginBottom: 5, verticalAlign: 'middle', fontSize: 28, color: (active ? colors.primary_text : '')}}
  >
    forward
  </i>
);

const ApplyButton = connect(mapState)(({selected}) => {
  const active = selected.length !== 0;
  const {disabled, color, fontColor} = active
    ? {disabled: false, color: colors.selected_button, fontColor: colors.primary_text}
    : {disabled: true, color: colors.disabled_button};


  const buttonInner = (
    <RaisedButton
      backgroundColor={color}
      disabled={disabled}
      icon={<ForwardIcon active={active}/>}
      label='APPLY NOW'
      labelColor={fontColor}
      labelPosition='before'
      style={{width: '275px', marginBottom: 10, height: 50}}
      labelStyle={{fontSize: '18px', fontWeight: active ? 'bold' : 'normal'}}
    />
  );

  return (
    <div style={{textAlign: 'center', marginTop: '26px'}}>
      {active ? <Link to='/apply'>{buttonInner}</Link> : buttonInner}
    </div>
  );
});

class ProductSelect extends Component {
  render() {
    //const stepOneTitle = (this.props.currentStep === 0) ? 'SELECT PRODUCTS' : ('SELECT PRODUCTS ('+this.props.selected.length+')');
    return (
      <Container>

        <Heading>Member Application</Heading>

        <Stepper
          style={{marginTop: 15}}
          steps={ [{title: 'SELECT PRODUCTS'}, {title: 'APPLY'}, {title: 'DISCLOSURES'}, {title: 'WRAP UP'}] }
          activeStep={ 1 }
          defaultTitleColor={colors.primary_text}
          activeTitleColor={colors.primary_text}
          completeTitleColor={colors.primary_text}
          defaultColor={colors.primary_text}
          completeColor={colors.primary_text}
          activeColor={colors.transparent}
          defaultOpacity='0.5'
        />

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

        <ApplyButton />

      </Container>
    );
  }
}

export default ProductSelect;
