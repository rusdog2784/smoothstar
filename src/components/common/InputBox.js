import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import Tooltip from 'rn-tooltip';
import { Icon } from 'native-base';

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
    iconRight,
    iconType,
    tooltipIconText,
    disable,
    tooltipHeight = 40,
  } = props;

  if (iconRight && tooltipIconText) {
    return (
      <View
        style={[
          styles.viewStyle,
          style,
          disable && { backgroundColor: Colors.inputBoxDisabledColor },
        ]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.inputBoxColor}
          secureTextEntry={secureTextEntry}
          style={[inputTextStyle, textStyle, styles.inputIconStyle]}
          keyboardType={keyboardType}
          autoCapitalize="none"
          multiline={multiline}
          editable={!disable}
        />
        <ToolTipIcon
          disable={disable}
          name={iconRight}
          type={iconType}
          tooltipText={tooltipIconText}
          tooltipHeight={tooltipHeight}
        />
      </View>
    );
  }

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.inputBoxColor}
      secureTextEntry={secureTextEntry}
      style={[
        styles.normalInputStyle,
        style,
        inputTextStyle,
        textStyle,
        disable && { backgroundColor: Colors.inputBoxDisabledColor },
      ]}
      keyboardType={keyboardType}
      autoCapitalize="none"
      multiline={multiline}
      editable={!disable}
    />
  );
};

const ToolTipIcon = ({ tooltipHeight, type, name, tooltipText, disable }) => (
  <Tooltip
    popover={<Text style={{ color: Colors.tooltipTextColor }}>{tooltipText}</Text>}
    tooltipWidth={200}
    height={tooltipHeight}
    withOverlay={false}
    toggleOnPress={!disable}
    highlightColor={Colors.tooltipTextColor}
    backgroundColor={Colors.tooltipColor}>
    <Icon
      style={[GlobalStyles.inputIconStyle, disable ? { color: Colors.inputBoxColor } : null]}
      name={name}
      type={type}
    />
  </Tooltip>
);

const styles = StyleSheet.create({
  normalInputStyle: {
    minHeight: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.inputBoxColor,
    padding: 10,
    borderRadius: GlobalStyles.borderRadius,
  },
  inputIconStyle: {
    flex: 1,
    marginRight: 10,
  },
  viewStyle: {
    minHeight: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.inputBoxColor,
    padding: 10,
    borderRadius: GlobalStyles.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
