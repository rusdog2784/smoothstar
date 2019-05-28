import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Colors } from '~styles';
import HomeScreen from '~screens/HomeScreen';

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColor,
    },
  }
);

export default createAppContainer(HomeStack);
