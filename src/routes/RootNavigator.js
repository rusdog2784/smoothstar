import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppNavigator from './AppNavigator';
import InitScreen from '~screens/InitScreen';
import AuthStack from './NavigationStacks/AuthStack';

const RootNavigator = createSwitchNavigator(
  {
    InitScreen: {
      screen: InitScreen,
    },
    AuthStack: {
      screen: AuthStack,
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
