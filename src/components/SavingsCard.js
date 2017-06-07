import React from 'react';

import ProductCard from './ProductCard.js';
import savingsImage from './images/savings.svg';
import * as colors from '../colors.js';

const SavingsCard = () => {
  return(
    <ProductCard
    img={savingsImage}
    title='Savings Account'
    cardId='savings'
    subText='Your membership begins with a $20 deposit into a savings account. This account also pays dividents.'
    backgroundColor={colors.basic}
    />
  );
};

export default SavingsCard;
