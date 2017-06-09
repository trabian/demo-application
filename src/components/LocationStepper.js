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
  return _.reduce(selectedProducts, (result, state)=>{
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
      defaultColor={colors.basic}
      completeColor={colors.basic}
      activeColor={colors.transparent}
      defaultOpacity='0.5'
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
