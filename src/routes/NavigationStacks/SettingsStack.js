import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
