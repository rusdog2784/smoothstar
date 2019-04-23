import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Colors, GlobalStyles } from '~styles';

const { inputTextStyle, textStyle } = GlobalStyles;

export const Dropdown = ({
  onValueChange,
  selectedValue,
  style,
  items,
  placeholderLabel,
  Icon,
}) => {
  return (
    <View style={[styles.normalInputStyle, style]}>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        items={items}
        onValueChange={onValueChange}
        value={selectedValue}
        placeholder={{ label: placeholderLabel, value: '' }}
        style={{
          ...pickerSelectStyles,
          placeholder: {
            color: Colors.inputBoxColor,
          },
        }}
        Icon={Icon}
        textInputProps={{ value: selectedValue || placeholderLabel }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  normalInputStyle: {
    minHeight: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.inputBoxColor,
    borderRadius: GlobalStyles.borderRadius,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...inputTextStyle,
    ...textStyle,
    padding: 10,
  },
  inputAndroid: {
    ...inputTextStyle,
    ...textStyle,
    padding: 10,
  },
});
