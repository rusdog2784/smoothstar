import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import NewsStack from './NavigationStacks/NewsStack';
import RegistrationStack from './NavigationStacks/RegistrationStack';

const AppNavigator = createDrawerNavigator(
  {
    NewsStack: {
      screen: NewsStack,
      navigationOptions: {
        title: 'News',
      },
    },
    RegistrationStack: {
      screen: RegistrationStack,
      navigationOptions: {
        title: 'Registration',
      },
    },
  },
  {
    initialRouteName: 'RegistrationStack',
    backBehavior: 'none',
    unmountInactiveRoutes: true,
  }
);

export default createAppContainer(AppNavigator);
