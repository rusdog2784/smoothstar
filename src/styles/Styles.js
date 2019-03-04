import { StyleSheet } from 'react-native';

import { Colors } from './Theme';

export const GlobalStyles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto',
  },
  headerTitleStyle: {
    fontSize: 15,
    color: Colors.headerTitleColor,
  },
  titleTextStyle: {
    fontSize: 30,
    fontWeight: '900',
    color: Colors.secondaryTextColor,
  },
  h1Style: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primaryTextColor,
  },
  h2Style: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryTextColor,
  },
  pStyle: {
    fontSize: 15,
    color: Colors.primaryTextColor,
  },
  smallTextStyle: {
    fontSize: 12,
    color: Colors.primaryTextColor,
  },
  normalTextStyle: {
    fontSize: 15,
    color: Colors.primaryTextColor,
  },
  textShadowStyle: {
    textShadowOffset: { width: -2, height: 2.5 },
    textShadowRadius: 10,
    textShadowColor: Colors.textShadowColor,
  },
});
