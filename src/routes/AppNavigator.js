import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import NewsStack from './NavigationStacks/NewsStack';

const AppNavigator = createDrawerNavigator(
  {
    NewsStack: {
      screen: NewsStack,
    },
  },
  {
    initialRouteName: 'NewsStack',
  }
);

export default createAppContainer(AppNavigator);
