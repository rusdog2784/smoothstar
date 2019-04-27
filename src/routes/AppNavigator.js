import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Drawer } from '~components';
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
    contentComponent: Drawer,
  }
);

export default createAppContainer(AppNavigator);
