import React from 'react';
import { connect } from 'react-redux';

import { PRODUCT_SELECT, APPLY } from 'src/router';
import * as colors from 'src/helpers/colors';
import Stepper from 'src/Stepper';

const stepMap = {
  [PRODUCT_SELECT]: 0,
  [APPLY]: 1
};

const LocationStepper = ({location, selectedProducts}) => (
  <Stepper
    style={{marginTop: 15}}
    steps={ [{title: 'SELECT_PRODUCTS'}, {title: 'APPLY'}, {title: 'DISCLOSURES'}, {title: 'WRAP UP'}] }
    activeStep={stepMap[location]}
    defaultTitleColor={colors.basic}
    activeTitleColor={colors.basic}
    completeTitleColor={colors.basic}
    defaultColor={colors.basic}
    completeColor={colors.basic}
    activeColor={colors.transparent}
    defaultOpacity='0.5'
  />
);

const mapStateToProps = state => {
  const pathname = state.router && state.router.location ? state.router.location.pathname : '/';
  return {
    location: pathname,
    selectedProducts: state.selected,
  };
};

export default connect(mapStateToProps)(LocationStepper);
