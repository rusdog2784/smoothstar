import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { Colors, GlobalStyles } from '~styles';

export const InputBox = props => {
  const { inputTextStyle, textStyle } = GlobalStyles;

  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    style,
    keyboardType,
    multiline = false,
  } = props;

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.inputBoxColor}
      secureTextEntry={secureTextEntry}
      style={[styles.inputStyle, style, inputTextStyle, textStyle]}
      keyboardType={keyboardType}
      autoCapitalize="none"
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.inputBoxColor,
    padding: 10,
    borderRadius: GlobalStyles.borderRadius,
  },
});
