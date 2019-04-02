import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import { Text } from './Text';
import { Colors } from '~styles';
import { StyleTypes } from '~constants';

export const Button = props => {
  const { children, icon, iconType = 'IonIcons', color, style, onPress, disable, small } = props;

  const bgColor = disable ? Colors.buttonDisableColor : color || Colors.buttonNormalColor;

  return (
    <TouchableOpacity
      activeOpacity={disable ? 1 : 0.4}
      onPress={onPress}
      style={[
        { backgroundColor: bgColor },
        { ...styles.buttonNormalStyle, maxWidth: small ? 300 : 400 },
        style,
      ]}>
      {icon ? (
        <View style={styles.iconViewStyle}>
          <Icon
            style={[styles.iconStyle, disable && { color: Colors.buttonDisableTextColor }]}
            name={icon}
            type={iconType}
          />
        </View>
      ) : null}

      <Text
        type={StyleTypes.p}
        style={[styles.textStyle, disable && { color: Colors.buttonDisableTextColor }]}>
        {children}
      </Text>

      {icon ? <View style={styles.iconViewStyle} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconViewStyle: {
    minWidth: 20,
  },
  iconStyle: {
    color: Colors.buttonTextColor,
    fontSize: 20,
  },
  textStyle: {
    color: Colors.buttonTextColor,
    flex: 1,
    textAlign: 'center',
  },
  buttonNormalStyle: {
    maxWidth: 400,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
