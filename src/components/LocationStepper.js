import React from 'react';
import { connect } from 'react-redux';

import { PRODUCT_SELECT, APPLY } from '../router';
import * as colors from '../helpers/colors';
import Stepper from '../Stepper';

const stepMap = {
  [PRODUCT_SELECT]: 0,
  [APPLY]: 1
};

const LocationStepper = ({location, selectedProducts}) => {
  const activeStep = stepMap[location];
  const stepOneTitle = activeStep === PRODUCT_SELECT ? 'SELECT PRODUCTS' : `SELECT PRODUCTS (${selectedProducts.length})`;

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
