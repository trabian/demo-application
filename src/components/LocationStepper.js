import React from 'react';
import { connect } from 'react-redux';

import { PRODUCT_SELECT, APPLY } from '../router';
import * as colors from '../helpers/colors.js';
import Stepper from '../Stepper';

const LocationStepper = ({location}) => {
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

  return (
    <Stepper
      style={{marginTop: 15}}
      steps={ [{title: 'SELECT PRODUCTS'}, {title: 'APPLY'}, {title: 'DISCLOSURES'}, {title: 'WRAP UP'}] }
      activeStep={activeStep}
      defaultTitleColor={colors.primary_text}
      activeTitleColor={colors.primary_text}
      completeTitleColor={colors.primary_text}
      defaultColor={colors.primary_text}
      completeColor={colors.primary_text}
      activeColor={colors.transparent}
      defaultOpacity='0.5'
    />
  );
}

const mapState = state => {
  const pathname = state.router && state.router.location ? state.router.location.pathname : '/';
  return {location: pathname};
};

export default connect(mapState)(LocationStepper);