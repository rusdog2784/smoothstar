import { StyleSheet } from 'react-native';

import { Colors } from './Theme';

export const GlobalStyles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto',
  },
  inputTextStyle: {
    fontSize: 12,
    color: Colors.inputBoxTextColor,
  },
  headerTitleStyle: {
    fontSize: 15,
    color: Colors.headerTitleColor,
  },
  headerTitleStyleDark: {
    fontSize: 15,
    color: Colors.headerTitleColorDark,
  },
  titleTextStyle: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.secondaryTextColor,
  },
  h1Style: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primaryTextColor,
  },
  h2Style: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primaryTextColor,
  },
  h3Style: {
    fontSize: 14,
    color: Colors.primaryTextColor,
  },
  pStyle: {
    fontSize: 12,
    color: Colors.primaryTextColor,
  },
  smallTextStyle: {
    fontSize: 10,
    color: Colors.primaryTextColor,
  },
  normalTextStyle: {
    fontSize: 12,
    color: Colors.primaryTextColor,
  },
  textShadowStyle: {
    textShadowOffset: { width: -2, height: 2.5 },
    textShadowRadius: 10,
    textShadowColor: Colors.textShadowColor,
  },
  underlineTextStyle: {
    textDecorationLine: 'underline',
  },
  screenContainerStyle: {
    backgroundColor: Colors.backgroundColor,
  },
  drawerContainerStyle: {
    backgroundColor: Colors.drawerBackgroundColor,
  },
  screenType1ContentStyle: {
    marginHorizontal: 30,
  },
  screenType2ContentStyle: {
    marginHorizontal: 20,
  },
  xlgGapStyle: {
    marginBottom: 55,
  },
  lgGapStyle: {
    marginBottom: 35,
  },
  mdGapStyle: {
    marginBottom: 25,
  },
  smGapStyle: {
    marginBottom: 10,
  },
  inputIconStyle: {
    fontSize: 16,
    color: Colors.inputBoxIconColor,
  },
  customIconStyle: {
    height: 20,
    width: 20,
    tintColor: Colors.iconColorLight,
  },
  customIconStyleDark: {
    height: 20,
    width: 20,
    tintColor: Colors.iconColorDark,
  },
  headerRightStyle: {
    marginRight: 10,
  },
  headerLeftStyle: {
    marginLeft: 10,
  },
});
