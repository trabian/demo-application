import React from 'react';
import { connect } from 'react-redux';

import { PRODUCT_SELECT, APPLY } from 'src/router';
import * as colors from 'src/helpers/colors';
import Stepper from 'src/Stepper';

const stepMap = {
  [PRODUCT_SELECT]: 0,
  [APPLY]: 1
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
