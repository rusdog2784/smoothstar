import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import InitScreen from '~screens/InitScreen';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator = createSwitchNavigator(
  {
    InitScreen: {
      screen: InitScreen,
    },
    AuthNavigator: {
      screen: AuthNavigator,
    },
    AppNavigator: {
      screen: AppNavigator,
    },
  },
  {
    initialRouteName: 'InitScreen',
  }
);

export default createAppContainer(RootNavigator);
