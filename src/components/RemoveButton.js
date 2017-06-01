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

const RemoveButton = (props)=>{
  return(
    <RaisedButton
      fullWidth
      backgroundColor={ colors.remove_button }
      style={buttonStyle}
      onClick={props.onClick}
      onMouseLeave={props.onMouseLeave}
    >
        <div style={{...buttonText, width: '100%', height: '100%'}}>
         REMOVE
        </div>
    </RaisedButton>
  );
};

export default RemoveButton;
