import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import NewsStack from './NavigationStacks/NewsStack';
import RegisterationStack from './NavigationStacks/RegisterationStack';

const AppNavigator = createDrawerNavigator(
  {
    NewsStack: {
      screen: NewsStack,
    },
    RegisterationStack: {
      screen: RegisterationStack,
    },
  },
  {
    initialRouteName: 'NewsStack',
    backBehavior: 'none',
    unmountInactiveRoutes: true,
  }
);

export default createAppContainer(AppNavigator);
