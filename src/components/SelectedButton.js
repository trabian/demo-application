import React from 'react';
import { RaisedButton } from 'material-ui';
import * as colors from '../colors.js';

const buttonStyle = {
  height: 50,
  marginBottom: 10
};

const buttonText = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary_text
};

const SelectedButton = (props)=>{
  return(
    <RaisedButton
      fullWidth
      backgroundColor={ colors.selected_button }
      style={buttonStyle}
      onClick={ props.onClick }
    >
        <div style={{...buttonText, width: '100%', height: '100%'}}>
         SELECTED
        </div>
    </RaisedButton>
  );
};

export default SelectedButton;
