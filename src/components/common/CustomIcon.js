import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { Assets } from '~constants';
import { GlobalStyles } from '~styles';
import { Colors } from '../../styles/Theme';

export const CustomIcon = ({
  name,
  onPress,
  style,
  color,
  size,
  button,
  hide = false,
  dark = false,
  shadow,
}) => {
  let cStyle = dark ? { ...GlobalStyles.customIconStyleDark } : { ...GlobalStyles.customIconStyle };

  if (size) {
    cStyle.width = size;
    cStyle.height = size;
  }

  if (color) {
    cStyle.color = color;
  }

  // if (shadow) {
  //   const shadowWidth = cStyle.width / -14;
  //   const shadowHeight = cStyle.height / 11.2;

  //   cStyle = {
  //     ...cStyle,
  //     shadowOffset: { width: shadowWidth, height: shadowHeight },
  //     shadowColor: Colors.iconShadowColor,
  //     shadowOpacity: 1,
  //     shadowRadius: cStyle.width / 2.8,
  //     elevation: 5,
  //   };
  // }

  return !hide ? (
    <TouchableOpacity onPress={onPress} disabled={!button} style={style}>
      <Image style={cStyle} source={Assets.Icons[name]} resizeMode="contain" />
    </TouchableOpacity>
  ) : null;
};
