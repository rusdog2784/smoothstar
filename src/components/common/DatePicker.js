import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

import { Colors, GlobalStyles } from '~styles';

export const Datepicker = props => {
  const { inputTextStyle, textStyle } = GlobalStyles;
  const {
    date,
    minDate,
    maxDate = Date.now(),
    showIcon = false,
    onDateChange,
    placeholder,
    style,
    mode,
    disable,
  } = props;

  return (
    <DatePicker
      style={[
        CustomStyles.inputStyle,
        style,
        disable && { backgroundColor: Colors.inputBoxDisabledColor },
      ]}
      TouchableComponent={disable ? View : TouchableHighlight}
      date={date}
      mode={mode}
      placeholder={placeholder}
      format="YYYY-MM-DD"
      minDate={minDate && Moment(minDate).format('YYYY-MM-DD')}
      maxDate={maxDate && Moment(maxDate).format('YYYY-MM-DD')}
      showIcon={showIcon}
      customStyles={{
        dateInput: CustomStyles.dateInputStyle,
        dateText: [inputTextStyle, textStyle],
        disabled: { backgroundColor: Colors.inputBoxDisabledColor },
      }}
      onDateChange={onDateChange}
      disabled={disable}
    />
  );
};

const CustomStyles = {
  inputStyle: {
    minHeight: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.inputBoxColor,
    padding: 10,
    borderRadius: GlobalStyles.borderRadius,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dateInputStyle: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
};
