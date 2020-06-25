import { createStackNavigator, createAppContainer } from "react-navigation";

import { Colors } from "~styles";
import {
  RegisterSmoothStarScreen,
  RegistrationSuccessScreen,
  RegistrationUnsuccessfulScreen,
} from "~screens/RegisterScreens";
import { PrivacyPolicyScreen, TermsScreen } from "~screens/PolicyFAQsScreens";

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
    PrivacyPolicyScreen: {
      screen: PrivacyPolicyScreen,
    },
    TermsScreen: {
      screen: TermsScreen,
    },
  },
  {
    initialRouteName: "RegisterSmoothStarScreen",
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.headerTitleColorDark,
    },
  }
);

export default createAppContainer(RegistrationStack);
