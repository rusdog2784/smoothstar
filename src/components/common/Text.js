import React from 'react';
import { Text as RNText } from 'react-native';

import { Colors, GlobalStyles } from '~styles';

export const Text = ({ children, color }) => {
  const { textStyle } = GlobalStyles;

  const textColor = Colors[color] || color;

  return <RNText style={[textStyle, { color: textColor }]}>{children}</RNText>;
};
