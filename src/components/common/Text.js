import React from 'react';
import { Text as RNText } from 'react-native';

import { GlobalStyles, Colors } from '~styles';
import { StyleTypes } from '~constants';

export const Text = props => {
  const { children, type, style, shadow, dark, light } = props;

  const {
    textStyle,
    headerTitleStyle,
    headerTitleStyleDark,
    titleTextStyle,
    h1Style,
    h2Style,
    smallTextStyle,
    normalTextStyle,
    pStyle,
  } = GlobalStyles;

  const { headerTitle, headerTitleDark, h1, h2, p, small, date, title } = StyleTypes;

  let typeStyle = null;

  switch (type) {
    case headerTitle:
      typeStyle = { ...headerTitleStyle, flex: 1, textAlign: 'center' };
      break;
    case headerTitleDark:
      typeStyle = { ...headerTitleStyleDark, flex: 1, textAlign: 'center' };
      break;
    case title:
      typeStyle = { ...titleTextStyle };
      break;
    case h1:
      typeStyle = { ...h1Style };
      break;
    case h2:
      typeStyle = { ...h2Style };
      break;
    case p:
      typeStyle = { ...pStyle };
      break;
    case small:
      typeStyle = { ...smallTextStyle };
      break;
    case date: {
      typeStyle = { ...smallTextStyle };
      typeStyle.color = Colors.greyTextColor;
      break;
    }
    default:
      typeStyle = { ...normalTextStyle };
      break;
  }

  dark && (typeStyle.color = Colors.tertiaryTextColor);

  light && (typeStyle.color = Colors.secondaryTextColor);

  let newProps = { ...props };
  newProps.style = [textStyle, typeStyle];
  style && newProps.style.push(style);

  if (shadow && typeStyle.fontSize) {
    let shadowStyle = {};
    const fontSize = typeStyle.fontSize;

    const shadowWidth = fontSize / -14;
    const shadowHeight = fontSize / 11.2;

    shadowStyle.textShadowRadius = fontSize / 2.8;
    shadowStyle.textShadowOffset = { width: shadowWidth, height: shadowHeight };
    shadowStyle.textShadowColor = Colors.textShadowColor;

    newProps.style.push(shadowStyle);
  }

  return <RNText {...newProps}>{children}</RNText>;
};
