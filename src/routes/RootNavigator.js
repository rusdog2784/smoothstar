import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppNavigator from './AppNavigator';
import InitScreen from '~screens/InitScreen';

const RootNavigator = createSwitchNavigator(
  {
    InitScreen: {
      screen: InitScreen,
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
