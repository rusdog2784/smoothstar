import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Drawer } from '~components';
import NewsStack from './NavigationStacks/NewsStack';
import RegistrationStack from './NavigationStacks/RegistrationStack';
import EventsStack from './NavigationStacks/EventsStack';
import SettingsStack from './NavigationStacks/SettingsStack';

const AppNavigator = createDrawerNavigator(
  {
    NewsStack: {
      screen: NewsStack,
      navigationOptions: {
        title: 'News',
      },
    },
    EventsStack: {
      screen: EventsStack,
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
    SettingsStack: {
      screen: SettingsStack,
      navigationOptions: {
        title: 'Registration',
      },
    },
  },
  {
    initialRouteName: 'SettingsStack',
    backBehavior: 'none',
    unmountInactiveRoutes: true,
    contentComponent: Drawer,
  }
);

export default createAppContainer(AppNavigator);
