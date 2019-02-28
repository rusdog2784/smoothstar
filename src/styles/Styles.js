import { StyleSheet } from 'react-native';

import { Colors } from './Theme';

export const GlobalStyles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto',
  },
  headerTitleStyle: {
    fontSize: 20,
    color: Colors.headerTitleColor,
  },
  titleTextStyle: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.secondaryTextColor,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
    textShadowColor: Colors.textShadowColor,
  },
  h2Style: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryTextColor,
  },
  pStyle: {
    fontSize: 18,
    color: Colors.primaryTextColor,
  },
  smallTextStyle: {
    fontSize: 12,
    color: Colors.primaryTextColor,
  },
});
