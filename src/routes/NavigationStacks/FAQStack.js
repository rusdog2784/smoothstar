import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
