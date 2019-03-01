import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SplashScreen, Asset } from 'expo';

import { Assets } from '~constants';

class InitScreen extends Component {
  state = {
    ready: false,
  };

  componentDidMount = () => {
    this.cacheResourcesAsync().then(() => {
      this.props.navigation.navigate('AppNavigator');
    });
  };

  componentWillUnmount = () => {
    SplashScreen.hide();
  };

  cacheResourcesAsync = async () => {
    const { testImg } = Assets.Images;
    const images = [require('~assets/images/splash.png'), testImg];
    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  };

  render() {
    return (
      <View>
        <Text>InitScreen</Text>
      </View>
    );
  }
}

export default InitScreen;
