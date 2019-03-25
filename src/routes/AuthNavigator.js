import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { LoginScreen, SignupScreen, AuthVerificationScreen } from '~screens/AuthScreens';

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
