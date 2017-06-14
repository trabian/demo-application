import React from 'react';

import ProductCard from './ProductCard.js';
import cardImage from '../images/card.svg';
import * as colors from '../../helpers/colors.js';

const CreditCard = () => {
  return(
    <ProductCard
      img={cardImage}
      title='Credit Card'
      cardId='credit'
      subText='We focus on keeping our credit card rates fair and costs low. If you already have a card, we may be able to help you reduce your payments.'
      backgroundColor={colors.basic}
    />
  );
};

export default CreditCard;
