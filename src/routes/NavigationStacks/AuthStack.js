import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Colors } from '~styles';
import SignupScreen from '~screens/SignupScreen';

const AuthStack = createStackNavigator(
  {
    SignupScreen: {
      screen: SignupScreen,
    },
  },
  {
    initialRouteName: 'SignupScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColor,
    },
  }
);

export default createAppContainer(AuthStack);
