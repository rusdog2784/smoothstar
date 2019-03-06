import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import { Colors } from '~styles';

export const CheckBox = ({ checked, style, color = Colors.checkBoxColor }) => {
  const name = checked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';

  return (
    <TouchableOpacity>
      <Icon style={{ color }} name={name} type="MaterialCommunityIcons" />
    </TouchableOpacity>
  );
};
