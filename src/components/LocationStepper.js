import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { SELECTED, HOVERED } from '../reducers/selectionReducer';
import { PRODUCT_SELECT, APPLY } from '../router';
import * as colors from '../helpers/colors';
import Stepper from 'react-stepper-horizontal';

const stepMap = {
  [PRODUCT_SELECT]: 0,
  [APPLY]: 1
};

const getSelectedProducts = (selectedProducts) => {
  return _.reduce(selectedProducts, (result, state) => {
    if(state === SELECTED || state === HOVERED){
      return result + 1;
    }
    return result;
  }, 0);
};

const LocationStepper = ({location, selectedProducts}) => {
  const activeStep = stepMap[location];
  const numOfProducts = getSelectedProducts(selectedProducts);
  const stepOneTitle = (location === PRODUCT_SELECT) ? 'SELECT PRODUCTS' : `SELECT PRODUCTS (${numOfProducts})`;

  return (
    <Stepper
      style={{marginTop: 15}}
      steps={ [{title: stepOneTitle}, {title: 'APPLY'}, {title: 'DISCLOSURES'}, {title: 'WRAP UP'}] }
      activeStep={activeStep}
      defaultTitleColor={colors.basic}
      activeTitleColor={colors.basic}
      completeTitleColor={colors.basic}
      defaultColor={colors.transparent}
      defaultBorderColor={colors.basic}
      defaultBorderStyle='solid'
      activeBorderColor={colors.basic}
      activeBorderStyle='solid'
      completeBorderColor={colors.basic}
      completeBorderStyle='solid'
      completeColor={colors.basic}
      activeColor={colors.transparent}
      defaultOpcaity='0.5'
      defaultTitleOpacity='0.5'
      barStyle='dashed'
      completeBarColor={colors.basic}
      defaultBarColor={colors.basic}
    />
  );
}

const mapStateToProps = state => {
  const pathname = state.router && state.router.location ? state.router.location.pathname : '/';
  return {
    location: pathname,
    selectedProducts: state.selected,
  };
};

export default connect(mapStateToProps)(LocationStepper);
