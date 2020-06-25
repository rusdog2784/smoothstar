import React, { Component } from "react";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { SplashScreen } from "expo";
import { SafeAreaView } from "react-navigation";
import Amplify from "aws-amplify";
import { Root } from "native-base";

import reducers from "~redux/reducers";
import RootNavigator from "~routes/RootNavigator";
import config from "~config/aws-exports";
import NavigationService from "~utils/NavigationService";

Amplify.configure(config);

if (Platform.OS === "android") {
  SafeAreaView.setStatusBarHeight(0);
}

const STORE = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide();
  }

  render() {
    return (
      <Provider store={STORE}>
        <Root>
          <RootNavigator
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Root>
      </Provider>
    );
  }
}

export default App;
