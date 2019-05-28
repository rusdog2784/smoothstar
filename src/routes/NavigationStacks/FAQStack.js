import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Colors } from '~styles';
import { FAQScreen } from '~screens/PolicyFAQsScreens';

const FAQStack = createStackNavigator(
  {
    FAQScreen: {
      screen: FAQScreen,
    },
  },
  {
    initialRouteName: 'FAQScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColorDark,
    },
  }
);

export default createAppContainer(FAQStack);
