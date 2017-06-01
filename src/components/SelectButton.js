import React from 'react';
import { RaisedButton } from 'material-ui';

import * as colors from '../colors';


export const UNSELECTED = 'ADD TO MY COLLECTION';
export const SELECTED_UNHOVERED = 'SELECTED';
export const SELECTED_HOVERED = 'REMOVE';

const buttonStyle = {
  height: 50,
  marginBottom: 10
};

const buttonTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary_text,
  width: '100%',
  height: '100%',
};

export const SelectButton = ({buttonType, onClick, onMouseEnter, onMouseLeave}) => {
  let backgroundColor;
  switch(buttonType) {
    case UNSELECTED:
      backgroundColor = colors.unselected_button;
      break;

    case SELECTED_UNHOVERED:
      backgroundColor = colors.selected_button;
      break;

    case SELECTED_HOVERED:
      backgroundColor = colors.remove_button;
      break;

    default:
  }

  return (
    <RaisedButton
      fullWidth
      backgroundColor={backgroundColor}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={buttonTextStyle}>
        {buttonType}
      </div>
    </RaisedButton>
  );
}
