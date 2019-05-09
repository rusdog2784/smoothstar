import React from 'react';
import { Switch as RNSwitch } from 'react-native';

import { Colors } from '~styles';

export const Switch = ({ style, value = false, onValueChange, disabled = false }) => {
  return (
    <RNSwitch
      onValueChange={onValueChange}
      style={style}
      disabled={disabled}
      value={value}
      trackColor={{ false: Colors.switchOffColor, true: Colors.switchOnColor }}
      thumbColor={Colors.switchGripColor}
      ios_backgroundColor={Colors.switchOnColor}
    />
  );
};
