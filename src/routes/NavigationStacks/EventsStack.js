import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '~styles';
import { EventsListScreen, EventDetailScreen } from '~screens/EventsScreens';

const EventsStack = createStackNavigator(
  {
    EventsListScreen: {
      screen: EventsListScreen,
    },
    EventDetailScreen: {
      screen: EventDetailScreen,
    },
  },
  {
    initialRouteName: 'EventsListScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColor,
    },
  }
);

export default createAppContainer(EventsStack);
