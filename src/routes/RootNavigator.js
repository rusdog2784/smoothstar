import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import InitScreen from '~screens/InitScreen';

const RootNavigator = createSwitchNavigator(
  {
    InitScreen: {
      screen: InitScreen,
    },
  },
  {
    initialRouteName: 'InitScreen',
  }
);

export default createAppContainer(RootNavigator);
