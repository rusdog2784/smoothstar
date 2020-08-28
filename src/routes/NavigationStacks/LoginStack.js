import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '~styles';
import { LoginScreen } from '~screens/AuthScreens';
import { PrivacyPolicyScreen, TermsScreen } from '~screens/PolicyFAQsScreens';

const LoginStack = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    PrivacyPolicyScreen: {
      screen: PrivacyPolicyScreen,
    },
    TermsScreen: {
      screen: TermsScreen,
    },
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

export default createAppContainer(LoginStack);
