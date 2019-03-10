import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignupScreen from '~screens/SignupScreen';
import LoginScreen from '~screens/LoginScreen';

const AuthNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    SignupScreen: {
      screen: SignupScreen,
    },
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(AuthNavigator);
