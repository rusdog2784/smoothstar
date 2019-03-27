import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SplashScreen, Asset } from 'expo';
import { connect } from 'react-redux';

import { Assets } from '~constants';
import { setAuth } from '~redux/actions';

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
    const { user, loading } = this.props;

    if (!loading && this.state.readyResources) {
      if (user) {
        this.props.navigation.navigate('AppNavigator');
      } else {
        this.props.navigation.navigate('AuthNavigator');
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

  return {
    loading,
    user,
  };
};

export default connect(
  mapStateToProps,
  { setAuth }
)(InitScreen);
