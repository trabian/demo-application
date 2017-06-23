import React from 'react';
import { connect } from 'react-redux';

import { PRODUCT_SELECT, APPLY, DISCLOSURES } from 'src/router';
import * as colors from 'src/helpers/colors';
import Stepper from 'react-stepper-horizontal';

const stepMap = {
  [PRODUCT_SELECT]: 0,
  [APPLY]: 1,
  [DISCLOSURES]: 2
};

const LocationStepper = ({location, selectedProducts}) => (
  <Stepper
    style={{marginTop: 15}}
    steps={ [{title: 'SELECT PRODUCTS'}, {title: 'APPLY'}, {title: 'DISCLOSURES'}, {title: 'WRAP UP'}] }
    activeStep={stepMap[location]}
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

const mapStateToProps = state => {
  const pathname = state.router && state.router.location ? state.router.location.pathname : '/';
  return {
    location: pathname,
    selectedProducts: state.selected,
  };
};

export default connect(mapStateToProps)(LocationStepper);
