import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Drawer } from '~components';
import NewsStack from './NavigationStacks/NewsStack';
import RegistrationStack from './NavigationStacks/RegistrationStack';
import EventsStack from './NavigationStacks/EventsStack';
import SettingsStack from './NavigationStacks/SettingsStack';
import HomeStack from './NavigationStacks/HomeStack';

const AppNavigator = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
    },
    NewsStack: {
      screen: NewsStack,
    },
    EventsStack: {
      screen: EventsStack,
    },
    RegistrationStack: {
      screen: RegistrationStack,
    },
    SettingsStack: {
      screen: SettingsStack,
    },
  },
  {
    initialRouteName: 'HomeStack',
    backBehavior: 'none',
    unmountInactiveRoutes: true,
    contentComponent: Drawer,
  }
);

export default createAppContainer(AppNavigator);
