import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';

import { Assets } from '~constants';
import { GlobalStyles, Colors } from '~styles';
// import { Colors } from '../../styles/Theme';

export const CustomIcon = ({
  name,
  onPress,
  style,
  color,
  size,
  button,
  hide = false,
  light = false,
  custom = false,
  type,
  // shadow,
}) => {
  let cStyle = {};

  if (light) {
    cStyle.color = Colors.iconColorLight;
  }

  if (color) {
    cStyle.color = color;
  }

  if (size) {
    cStyle.fontSize = size;
  }

  if (custom) {
    cStyle = light ? { ...GlobalStyles.customIconStyle } : { ...GlobalStyles.customIconStyleDark };

    if (size) {
      cStyle.width = size;
      cStyle.height = size;
    }

    if (color) {
      cStyle.tintColor = color;
    }
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
      {custom ? (
        <Image style={cStyle} source={Assets.Icons[name]} resizeMode="contain" />
      ) : (
        <Icon style={cStyle} type={type} name={name} />
      )}
    </TouchableOpacity>
  ) : null;
};
