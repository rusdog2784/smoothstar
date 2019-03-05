import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox as CB } from 'native-base';

import { Colors } from '~styles';

export const CheckBox = ({ checked, style }) => {
  return (
    <CB checked={checked} style={[style, styles.checkboxStyle]} color={Colors.checkBoxColor} />
  );
};

const styles = StyleSheet.create({
  checkboxStyle: {
    borderRadius: 2,
    borderColor: Colors.checkBoxColor,
    alignSelf: 'flex-start',
  },
});
