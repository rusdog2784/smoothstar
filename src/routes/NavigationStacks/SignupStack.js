import { createStackNavigator, createAppContainer } from "react-navigation";

import { Colors } from "~styles";
import { SignupScreen } from "~screens/AuthScreens";
import { PrivacyPolicyScreen, TermsScreen } from "~screens/PolicyFAQsScreens";

const SignupStack = createStackNavigator(
  {
    SignupScreen: {
      screen: SignupScreen,
    },
    PrivacyPolicyScreen: {
      screen: PrivacyPolicyScreen,
    },
    TermsScreen: {
      screen: TermsScreen,
    },
  },
  {
    initialRouteName: "SignupScreen",
  }
);

export default createAppContainer(SignupStack);
