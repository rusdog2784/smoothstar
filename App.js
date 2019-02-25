import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { SplashScreen } from 'expo';

import reducers from '~reducers';
import RootNavigator from '~routes/RootNavigator';

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
