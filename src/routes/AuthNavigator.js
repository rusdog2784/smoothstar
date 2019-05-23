import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import {
  LoginScreen,
  SignupScreen,
  AuthVerificationScreen,
  WelcomeScreen,
} from '~screens/AuthScreens';

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
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
  },
  {
    initialRouteName: 'WelcomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(AuthNavigator);
