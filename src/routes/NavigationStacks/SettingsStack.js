import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Colors } from '~styles';
import { SettingsScreen } from '~screens/SettingsScreens';

const SettingsStack = createStackNavigator(
  {
    SettingsScreen: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'SettingsScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColorDark,
    },
  }
);

export default createAppContainer(SettingsStack);
