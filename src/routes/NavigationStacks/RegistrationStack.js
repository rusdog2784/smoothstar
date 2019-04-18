import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Colors } from '~styles';
import {
  RegisterSmoothStarScreen,
  RegistrationSuccessScreen,
  RegistrationUnsuccessfulScreen,
} from '~screens/RegisterScreens';

const RegistrationStack = createStackNavigator(
  {
    RegisterSmoothStarScreen: {
      screen: RegisterSmoothStarScreen,
    },
    RegistrationSuccessScreen: {
      screen: RegistrationSuccessScreen,
    },
    RegistrationUnsuccessfulScreen: {
      screen: RegistrationUnsuccessfulScreen,
    },
  },
  {
    initialRouteName: 'RegisterSmoothStarScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColorDark,
    },
  }
);

export default createAppContainer(RegistrationStack);
