import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SplashScreen, Asset } from 'expo';

class InitScreen extends Component {
  state = {
    ready: false,
  };

  componentDidMount = () => {
    this.cacheResourcesAsync().then(() => {
      SplashScreen.hide();
    });
  };

  componentWillUnmount = () => {
    SplashScreen.hide();
  };

  cacheResourcesAsync = async () => {
    const images = [require('~assets/splash.png')];
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
