import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SplashScreen, Asset } from 'expo';
import { connect } from 'react-redux';

import { Assets } from '~constants';
import { setAuth, checkSSRegisteration } from '~redux/actions';

class InitScreen extends Component {
  state = {
    readyResources: false,
  };

  componentDidMount = () => {
    this.props.setAuth();
    this.cacheResourcesAsync().then(() => {
      this.setState({ readyResources: true });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { navigation, user, loading, loadingApp, ready, checkSSRegisteration } = this.props;

    if (!loading && !loadingApp && this.state.readyResources) {
      if (ready) {
        navigation.navigate('AppNavigator');
      } else if (user) {
        checkSSRegisteration(user.username);
      } else {
        navigation.navigate('AuthNavigator');
      }
    }
  };

  componentWillUnmount = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  };

  cacheResourcesAsync = async () => {
    const { testImg, surfSkate } = Assets.Images;
    const images = [require('~assets/images/splash.png'), testImg, surfSkate];
    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>InitScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { loading, user } = state.auth;
  const { loadingApp, ready } = state.app;

  return {
    loading,
    user,
    loadingApp,
    ready,
  };
};

export default connect(
  mapStateToProps,
  { setAuth, checkSSRegisteration }
)(InitScreen);
