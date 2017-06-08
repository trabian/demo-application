import React from 'react';

import { connect } from 'react-redux';
import { Col, Flex } from 'jsxstyle';

import SelectButton from './SelectButton';
import { UNSELECTED } from '../../reducers/selectionReducer';

import * as colors from '../../helpers/colors';

const wrapperStyles = {
  padding: 20,
  paddingBottom:10,
  width: 250,
  height: 340,
  marginRight: '2vw',
  marginLeft: '2vw'
};

const ProductCard = ({ img, backgroundColor, title, subText, selected, cardId }) => {
  const borderColor = (selected[cardId] === UNSELECTED) ? colors.basic : colors.success;
  return (
    <Col alignItems='center' border={`5px solid ${borderColor}`} style={{...wrapperStyles, backgroundColor: backgroundColor}}>
      <Col alignItems='center'>
        <img src={img} alt='' style={{ marginTop: 15, height: 95 }}/>
      </Col>

      <Flex flexDirection='column' alignItems='center' justifyContent='flex-start' style={{ marginTop: 25, height: 200}}>
        <h3 style={{color: colors.heading}}>{title}</h3>
        <p style={{color: colors.subHeading, fontSize: '0.9em', margin: 0, padding: 0}}>{subText}</p>
      </Flex>

      <SelectButton cardId={cardId}/>

    </Col>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.selected
  };
};

export default connect(mapStateToProps)(ProductCard);
