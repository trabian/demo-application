import React from 'react';
import { RaisedButton } from 'material-ui';
import SvgIcon from 'material-ui/SvgIcon';

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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary_text,
  width: '100%',
  height: '100%',
};

export const SelectButton = ({buttonType, onClick, onMouseEnter, onMouseLeave}) => {
  let backgroundColor;
  let iconPath;
  switch(buttonType) {
    case UNSELECTED:
      backgroundColor = colors.unselected_button;
      iconPath = 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z';
      break;

    case SELECTED_UNHOVERED:
      backgroundColor = colors.selected_button;
      iconPath = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';
      break;

    case SELECTED_HOVERED:
      backgroundColor = colors.remove_button;
      iconPath = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
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
        <SvgIcon style={{color: colors.primary_text}}>
           <path d={iconPath} />
        </SvgIcon>
        {buttonType}
      </div>
    </RaisedButton>
  );
}
