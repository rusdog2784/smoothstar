import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Drawer } from '~components';
import NewsStack from './NavigationStacks/NewsStack';
import RegistrationStack from './NavigationStacks/RegistrationStack';
import EventsStack from './NavigationStacks/EventsStack';
import SettingsStack from './NavigationStacks/SettingsStack';
import HomeStack from './NavigationStacks/HomeStack';
import FAQStack from './NavigationStacks/FAQStack';

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
    FAQStack: {
      screen: FAQStack,
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
