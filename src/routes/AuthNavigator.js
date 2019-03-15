import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SignupScreen from '~screens/SignupScreen';
import LoginScreen from '~screens/LoginScreen';
import AuthVerificationScreen from '~screens/AuthVerificationScreen';

const AuthNavigator = createSwitchNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    SignupScreen: {
      screen: SignupScreen,
    },
    AuthVerificationScreen: {
      screen: AuthVerificationScreen,
    },
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(AuthNavigator);
