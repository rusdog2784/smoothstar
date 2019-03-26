import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { RegisterSmoothStarScreen, RegisterationSuccessScreen } from '~screens/RegisterScreens';

const RegisterationStack = createSwitchNavigator(
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
    headerMode: 'none',
  }
);

export default createAppContainer(RegisterationStack);
