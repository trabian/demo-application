import React from 'react';

import ProductCard from 'src/components/product_select/ProductCard';
import savingsImage from 'src/components/images/savings.svg';
import * as colors from 'src/helpers/colors';

const SavingsCard = () => (
  <ProductCard
    img={savingsImage}
    title='Savings Account'
    cardId='savings'
    subText='Your membership begins with a $20 deposit into a savings account. This account also pays dividents.'
    backgroundColor={colors.basic}
  />
);

export default SavingsCard;
