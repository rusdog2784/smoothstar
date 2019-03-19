import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import { Colors } from '~styles';

export const CheckBox = ({ checked, style, color = Colors.checkBoxColor, onPress }) => {
  const name = checked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon style={{ color }} name={name} type="MaterialCommunityIcons" />
    </TouchableOpacity>
  );
};
