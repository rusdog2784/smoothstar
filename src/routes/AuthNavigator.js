import { createSwitchNavigator, createAppContainer } from "react-navigation";

import { AuthVerificationScreen, WelcomeScreen } from "~screens/AuthScreens";
import LoginStack from "./NavigationStacks/LoginStack";
import SignupStack from "./NavigationStacks/SignupStack";

const AuthNavigator = createSwitchNavigator(
  {
    LoginScreen: {
      screen: LoginStack,
    },
    SignupScreen: {
      screen: SignupStack,
    },
    AuthVerificationScreen: {
      screen: AuthVerificationScreen,
    },
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
  },
  {
    initialRouteName: "WelcomeScreen",
    headerMode: "none",
  }
);

export default createAppContainer(AuthNavigator);
