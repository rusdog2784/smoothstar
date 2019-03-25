import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { RegisterSmoothStarScreen } from '~screens/RegisterScreens';

const RegisterationStack = createSwitchNavigator(
  {
    RegisterSmoothStarScreen: {
      screen: RegisterSmoothStarScreen,
    },
  },
  {
    initialRouteName: 'RegisterSmoothStarScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(RegisterationStack);
