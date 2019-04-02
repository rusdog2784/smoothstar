import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from './Text';
import { Colors, GlobalStyles } from '~styles';
import { StyleTypes } from '~constants';

export const NumberBullet = ({ number, style }) => {
  return (
    <View style={styles.parentViewStyle}>
      <Text type={StyleTypes.h2} style={styles.textStyle}>
        {number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    height: GlobalStyles.h1Style.fontSize + 4,
    width: GlobalStyles.h1Style.fontSize + 4,
    borderRadius: (GlobalStyles.h1Style.fontSize + 4) / 2,
    backgroundColor: Colors.bulletColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.bulletTextColor,
  },
});
