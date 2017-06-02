import React from 'react';

import ProductCard from './ProductCard.js';
import spendingImage from '../images/spending.svg';
import * as colors from '../../helpers/colors.js';

const SpendingCard = () => {
  return(
    <ProductCard
      img={spendingImage}
      title='Spending Account'
      subText='Your spending account is what your debit card, paper checks and other expenditures will draw from. You may also use this account for your direct deposit.'
      backgroundColor={colors.primary_text}
    />
  );
};

export default SpendingCard;