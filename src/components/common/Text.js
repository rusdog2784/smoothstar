import React from 'react';
import { Text as RNText } from 'react-native';

import { GlobalStyles, Colors } from '~styles';
import { StyleTypes } from '~constants';

export const Text = props => {
  const { children, type, style } = props;

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

  let newProps = { ...props };
  newProps.style = [textStyle, typeStyle];
  style && newProps.style.push(style);

  return <RNText {...newProps}>{children}</RNText>;
};
