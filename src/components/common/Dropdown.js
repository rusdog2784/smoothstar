import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Colors, GlobalStyles } from '~styles';

const { inputTextStyle, textStyle } = GlobalStyles;

export const Dropdown = ({ onValueChange, selectedValue, style, items }) => {
  return (
    <View style={[styles.normalInputStyle, style]}>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        items={items}
        onValueChange={onValueChange}
        value={selectedValue}
        placeholder={{ label: 'Select Gender', value: '' }}
        style={{
          ...pickerSelectStyles,
          placeholder: {
            color: Colors.inputBoxColor,
          },
        }}
      />
      {/* <Picker mode="dropdown" selectedValue={selectedValue} onValueChange={onValueChange}>
        {pickerItems}
      </Picker> */}
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
    padding: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...inputTextStyle,
    ...textStyle,
  },
  inputAndroid: {
    ...inputTextStyle,
    ...textStyle,
  },
});
