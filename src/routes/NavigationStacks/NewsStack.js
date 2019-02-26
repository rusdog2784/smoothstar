import { createStackNavigator, createAppContainer } from 'react-navigation';

import NewsListScreen from '~screens/NewsListScreen';

const NewsStack = createStackNavigator(
  {
    NewsListScreen: {
      screen: NewsListScreen,
    },
  },
  {
    initialRouteName: 'NewsListScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
    },
  }
);

export default createAppContainer(NewsStack);
