import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignupScreen from '~screens/SignupScreen';

const AuthNavigator = createStackNavigator(
  {
    SignupScreen: {
      screen: SignupScreen,
    },
  },
  {
    initialRouteName: 'SignupScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(AuthNavigator);
