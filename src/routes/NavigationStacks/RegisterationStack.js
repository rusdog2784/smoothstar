import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Colors } from '~styles';
import { RegisterSmoothStarScreen, RegisterationSuccessScreen } from '~screens/RegisterScreens';

const RegisterationStack = createStackNavigator(
  {
    RegisterSmoothStarScreen: {
      screen: RegisterSmoothStarScreen,
    },
    RegisterationSuccessScreen: {
      screen: RegisterationSuccessScreen,
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

export default createAppContainer(RegisterationStack);
