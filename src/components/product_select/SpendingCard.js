import React from 'react';

import ProductCard from 'src/components/product_select/ProductCard.js';
import spendingImage from 'src/components/images/spending.svg';
import * as colors from 'src/helpers/colors';

const SpendingCard = () => (
  <ProductCard
    img={spendingImage}
    title='Spending Account'
    cardId='spending'
    subText='Your spending account is what your debit card, paper checks and other expenditures will draw from. You may also use this account for your direct deposit.'
    backgroundColor={colors.basic}
  />
);

export default SpendingCard;
