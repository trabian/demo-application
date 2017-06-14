import React from 'react';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';

import * as colors from 'src/helpers/colors';

const forwardIconStyle = active => {
  return {
    display: 'inline-flex',
    marginBottom: 5,
    verticalAlign: 'middle',
    fontSize: 28,
    color: (active ? colors.basic : '')
  };
}

const ForwardIcon = ({ active }) => <i className="material-icons" style={forwardIconStyle(active)}>{'forward'}</i>;

const InnerButton = ({ color, fontColor, disabled, title, buttonProps, onClick=_.noop }) => (
  <RaisedButton
    {...buttonProps}
    backgroundColor={color}
    disabled={disabled}
    icon={<ForwardIcon active={!disabled}/>}
    label={title}
    labelColor={fontColor}
    labelPosition='before'
    onClick={onClick}
    style={{width: '275px', marginBottom: 10, height: 50}}
    labelStyle={{fontSize: '18px', fontWeight: disabled ? 'normal' : 'bold'}}
  />
);

const buttonStyle = disabled => {
  if(disabled) {
    return {disabled, color: colors.inactive};
  } else {
    return {disabled, color: colors.success, fontColor: colors.basic};
  }
};

export default ({ disabled=false, title, buttonProps={}, onClick }) => (
  <div style={{textAlign: 'center', marginTop: '26px'}}>
    <InnerButton {...buttonStyle(disabled)} title={title} buttonProps={buttonProps} onClick={onClick} />
  </div>
);
