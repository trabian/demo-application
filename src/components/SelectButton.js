import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import SvgIcon from 'material-ui/SvgIcon';

import { UNSELECTED, SELECTED, HOVERED } from '../reducers/selectionReducer';
import { selectAction, hoverInAction, hoverOutAction } from '../actions';
import * as colors from '../colors';

const removeIcon = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
const selectedIcon = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';
const addIcon = 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z';

const buttonStyle = {
  height: 50,
  marginBottom: 10
};

const buttonTextStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.basic,
  width: '100%',
  height: '100%',
};

const cardInfo = {
  [SELECTED]: { backgroundColor: colors.success, iconPath: selectedIcon, buttonTitle:'SELECTED' },
  [UNSELECTED]: { backgroundColor: colors.primary, iconPath: addIcon, buttonTitle: 'ADD TO MY COLLECTION' },
  [HOVERED]: { backgroundColor: colors.danger, iconPath: removeIcon, buttonTitle: 'REMOVE' }
};


const SelectButton = ({ selected, cardId, selectAction, hoverInAction, hoverOutAction }) => {
  const { backgroundColor, iconPath, buttonTitle } = cardInfo[selected[cardId]];
  return (
    <RaisedButton
      fullWidth
      backgroundColor={backgroundColor}
      style={buttonStyle}
      onClick={ _.partial(selectAction, cardId) }
      onMouseEnter={ _.partial(hoverInAction, cardId) }
      onMouseLeave={ _.partial(hoverOutAction, cardId) }
    >
      <div style={buttonTextStyle}>
        <SvgIcon style={{color: colors.basic}}>
           <path d={iconPath} />
        </SvgIcon>
        {buttonTitle}
      </div>
    </RaisedButton>
  );
};

const mapStateToProps = (state) => {
  return{
    selected: state.selected
  };
};


export default connect(mapStateToProps, { selectAction, hoverInAction, hoverOutAction })(SelectButton);
