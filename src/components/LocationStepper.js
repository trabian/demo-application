import React from 'react';
import { connect } from 'react-redux';

import { PRODUCT_SELECT, APPLY } from '../router';
import * as colors from '../helpers/colors';
import Stepper from '../Stepper';

const LocationStepper = ({location, selectedProducts}) => {
  console.log('location', location);
  let activeStep;
  switch(location) {
    case PRODUCT_SELECT:
      activeStep = 0;
      break;

    case APPLY:
      activeStep = 1;
      break;

    default:
  }

  const stepOneTitle = activeStep === 0 ? 'SELECT PRODUCTS' : `SELECT PRODUCTS (${selectedProducts.length})`;

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

const mapState = state => {
  const pathname = state.router && state.router.location ? state.router.location.pathname : '/';
  return {
    location: pathname,
    selectedProducts: state.selected,
  };
};

export default connect(mapState)(LocationStepper);
