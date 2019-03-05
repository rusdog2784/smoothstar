import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import { Text } from './Text';
import { Colors } from '~styles';
import { StyleTypes } from '~constants';

export const Button = props => {
  const { children, icon, iconType = 'IonIcons', color, style, onPress } = props;

  const bgColor = color || Colors.buttonNormalColor;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ backgroundColor: bgColor }, styles.buttonNormalStyle, style]}>
      {icon ? (
        <View style={styles.iconViewStyle}>
          <Icon style={styles.iconStyle} name={icon} type={iconType} />
        </View>
      ) : null}

      <Text type={StyleTypes.p} style={styles.textStyle}>
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
