import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { SplashScreen } from 'expo';
import { SafeAreaView } from 'react-navigation';

import reducers from '~redux/reducers';
import RootNavigator from '~routes/RootNavigator';

if (Platform.OS === 'android') {
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
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
