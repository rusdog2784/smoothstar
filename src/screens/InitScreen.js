import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SplashScreen } from "expo";
import { Asset } from "expo-asset";
import { connect } from "react-redux";
import Swiper from "react-native-swiper";

import { Assets } from "~constants";
import { Colors } from "~styles";
import {
  setAuth,
  loginChecks,
  checkInitLaunch,
  setInitLaunch,
} from "~redux/actions";

const {
  initial_1,
  initial_2,
  initial_3,
  initial_4,
  surfSkate,
  testImg,
} = Assets.Images;

class InitScreen extends Component {
  state = {
    readyResources: false,
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
    const { readyResources } = this.state;

    if (readyResources && isInitLaunch) {
      SplashScreen.hide();
    } else if (readyResources && !isInitLaunch) {
      this.readyToMove();
    }
  };

  // componentWillUnmount = () => {
  //   const { isInitLaunch } = this.props;

  //   if (!isInitLaunch) {
  //     SplashScreen.hide();
  //   }
  // };

  readyToMove = (params) => {
    const { navigation, user, loading, loadingApp, loginChecks } = this.props;

    if (!loading && !loadingApp) {
      if (user) {
        loginChecks({ username: user.username });
      } else {
        navigation.navigate("AuthNavigator");
      }
    }
  };

  cacheResourcesAsync = async () => {
    const images = [
      testImg,
      surfSkate,
      initial_1,
      initial_2,
      initial_3,
      initial_4,
    ];
    const cacheImages = images.map((image) =>
      Asset.fromModule(image).downloadAsync()
    );
    return Promise.all(cacheImages);
  };

  _swiperIndexChanged = (index) => {
    if (index === 3) {
      setTimeout(this.props.setInitLaunch, 2500);
    }
  };

  render() {
    const { isInitLaunch } = this.props;

    return isInitLaunch ? (
      <View style={styles.carouselViewStyle}>
        <Swiper
          loop={false}
          autoplay
          dotColor="#bbb"
          activeDotColor="#fff"
          onIndexChanged={this._swiperIndexChanged}
          showsPagination={false}
          style={styles.carouselStyle}
        >
          <View style={styles.slideStyle}>
            <Image
              style={styles.imageStyle}
              resizeMode="cover"
              source={Assets.Images.initial_1}
            />
          </View>
          <View style={styles.slideStyle}>
            <Image
              style={styles.imageStyle}
              resizeMode="cover"
              source={Assets.Images.initial_2}
            />
          </View>
          <View style={styles.slideStyle}>
            <Image
              style={styles.imageStyle}
              resizeMode="cover"
              source={Assets.Images.initial_3}
            />
          </View>
          <View style={styles.slideStyle}>
            <Image
              style={styles.imageStyle}
              resizeMode="cover"
              source={Assets.Images.initial_4}
            />
          </View>
        </Swiper>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  carouselViewStyle: {
    flex: 1,
    width: "100%",
  },
  carouselTextStyle: {
    textAlign: "center",
  },
  imageStyle: {
    height: null,
    width: "100%",
    flex: 1,
    backgroundColor: Colors.imageBackgroundColor,
  },
  carouselStyle: {
    flex: 1,
  },
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
});

const mapStateToProps = (state) => {
  const { loading, user, isInitLaunch } = state.auth;
  const { loadingApp } = state.app;

  return {
    loading,
    user,
    loadingApp,
    isInitLaunch,
  };
};

export default connect(
  mapStateToProps,
  { setAuth, loginChecks, checkInitLaunch, setInitLaunch }
)(InitScreen);
