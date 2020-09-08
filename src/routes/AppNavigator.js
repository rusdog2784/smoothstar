import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Drawer } from '~components';
import NewsStack from './NavigationStacks/NewsStack';
import RegistrationStack from './NavigationStacks/RegistrationStack';
import EventsStack from './NavigationStacks/EventsStack';
import SettingsStack from './NavigationStacks/SettingsStack';
import HomeStack from './NavigationStacks/HomeStack';
import FAQStack from './NavigationStacks/FAQStack';
import VideosStack from './NavigationStacks/VideosStack';

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
    VideosStack: {
      screen: VideosStack,
    },
  },
  {
    initialRouteName: 'VideosStack',
    backBehavior: 'none',
    unmountInactiveRoutes: true,
    contentComponent: Drawer,
  }
);

export default createAppContainer(AppNavigator);
