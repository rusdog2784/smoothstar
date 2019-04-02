import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Colors } from '~styles';
import { NewsListScreen, NewsDetailScreen } from '~screens/NewsScreens';

const NewsStack = createStackNavigator(
  {
    NewsListScreen: {
      screen: NewsListScreen,
    },
    NewsDetailScreen: {
      screen: NewsDetailScreen,
    },
  },
  {
    initialRouteName: 'NewsListScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColor,
    },
  }
);

export default createAppContainer(NewsStack);
