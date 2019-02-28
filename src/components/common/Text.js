import React from 'react';
import { Text as RNText } from 'react-native';

import { GlobalStyles, Colors } from '~styles';
import { StyleTypes } from '~constants';

export const Text = props => {
  const { children, type, customStyle } = props;

  const {
    textStyle,
    headerTitleStyle,
    titleTextStyle,
    h2Style,
    smallTextStyle,
    pStyle,
  } = GlobalStyles;

  const { headerTitle, h2, p, date, title } = StyleTypes;

  let typeStyle = null;

  switch (type) {
    case headerTitle:
      typeStyle = { ...headerTitleStyle };
      break;
    case title:
      typeStyle = { ...titleTextStyle };
      break;
    case h2:
      typeStyle = { ...h2Style };
      break;
    case p:
      typeStyle = { ...pStyle };
      break;
    case date: {
      typeStyle = { ...smallTextStyle };
      typeStyle.color = Colors.greyTextColor;
      break;
    }
    default:
      break;
  }

  return (
    <RNText {...props} style={[textStyle, typeStyle, customStyle]}>
      {children}
    </RNText>
  );
};
