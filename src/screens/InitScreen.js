import React, { Component } from 'react';
import { ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { SplashScreen, Asset } from 'expo';
import { connect } from 'react-redux';

import { Assets } from '~constants';
import { setAuth, checkSSRegisteration, checkInitLaunch, setInitLaunch } from '~redux/actions';

const { initial_1, initial_2, initial_3, initial_4, surfSkate, testImg } = Assets.Images;
const INIT_IMAGES = [initial_1, initial_2, initial_3, initial_4, initial_4];

class InitScreen extends Component {
  state = {
    readyResources: false,
    initImageIndex: -1,
  };

  componentDidMount = () => {
    this.props.checkInitLaunch();
    this.props.setAuth();
    this.cacheResourcesAsync().then(() => {
      this.setState({ readyResources: true });
    });
  };

  componentDidUpdate = () => {
    const { isInitLaunch } = this.props;
    const { readyResources, initImageIndex } = this.state;

    if (readyResources && isInitLaunch) {
      if (initImageIndex > 3) {
        clearInterval();
        this.readyToMove();
      } else if (initImageIndex === -1) {
        this.incrementImage();
        this.setImageIntervals();
        SplashScreen.hide();
      }
    } else if (readyResources && !isInitLaunch) {
      this.readyToMove();
    }
  };

  componentWillUnmount = () => {
    const { isInitLaunch } = this.props;

    if (isInitLaunch) {
      this.props.setInitLaunch();
    } else {
      SplashScreen.hide();
    }
  };

  readyToMove = params => {
    const { navigation, user, loading, loadingApp, ready, checkSSRegisteration } = this.props;

    if (!loading && !loadingApp) {
      if (ready) {
        navigation.navigate('AppNavigator');
      } else if (user) {
        checkSSRegisteration(user.username);
      } else {
        navigation.navigate('AuthNavigator');
      }
    }
  };

  cacheResourcesAsync = async () => {
    const images = [testImg, surfSkate, initial_1, initial_2, initial_3, initial_4];
    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  };

  setImageIntervals = params => {
    clearInterval();
    setInterval(() => {
      if (this.state.initImageIndex < 4) {
        this.incrementImage();
      }
    }, 5000);
  };

  incrementImage = () => this.setState({ initImageIndex: this.state.initImageIndex + 1 });

  onImagePress = () => {
    if (this.state.initImageIndex < 3) {
      this.incrementImage();
      this.setImageIntervals();
    }
  };

  render() {
    const { isInitLaunch } = this.props;

    return this.state.initImageIndex !== -1 && isInitLaunch ? (
      <TouchableBackground
        onPress={this.onImagePress}
        source={INIT_IMAGES[this.state.initImageIndex]}
      />
    ) : null;
  }
}

const TouchableBackground = ({ source, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={{ flex: 1, backgroundColor: '#000000' }}>
      <ImageBackground source={source} style={{ flex: 1 }} />
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = state => {
  const { loading, user, isInitLaunch } = state.auth;
  const { loadingApp, ready } = state.app;

  return {
    loading,
    user,
    loadingApp,
    ready,
    isInitLaunch,
  };
};

export default connect(
  mapStateToProps,
  { setAuth, checkSSRegisteration, checkInitLaunch, setInitLaunch }
)(InitScreen);
