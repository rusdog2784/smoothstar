import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { SplashScreen } from 'expo';
import Swiper from 'react-native-swiper';

import { Text } from '~components/common';
import { Colors } from '~styles';
import { Assets } from '~constants';

class WelcomeScreen extends Component {
  componentDidMount = () => {
    SplashScreen.hide();
  };

  render() {
    const {
      contentStyle,
      buttonViewStyle,
      swiperViewStyle,
      carouselViewStyle,
      imageStyle,
      slideStyle,
    } = styles;

    return (
      <Container style={{ backgroundColor: Colors.backgroundColorDark }}>
        <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
          <View style={carouselViewStyle}>
            <View style={swiperViewStyle}>
              <Swiper loop autoplay autoplayTimeout={4} dotColor="#bbb" activeDotColor="#fff">
                <View style={slideStyle}>
                  <Image style={imageStyle} resizeMode="cover" source={Assets.Images.initSlider1} />
                  <Text type="h3" light style={{ textAlign: 'center' }}>
                    Improve your surfing with us
                  </Text>
                </View>
                <View style={slideStyle}>
                  <Image style={imageStyle} resizeMode="cover" source={Assets.Images.initSlider2} />
                  <Text type="h2" light style={{ marginBottom: 20, textAlign: 'center' }}>
                    EXTEND YOUR WARRANTY
                  </Text>
                  <Text type="h3" light style={{ textAlign: 'center' }}>
                    By signing up to the SmoothStar app, we'll give you an extra 3 moths warranty.
                  </Text>
                </View>
                <View style={slideStyle}>
                  <Image style={imageStyle} resizeMode="cover" source={Assets.Images.initSlider3} />
                  <Text type="h2" light style={{ marginBottom: 20, textAlign: 'center' }}>
                    SURF TRAINING TUTORIALS
                  </Text>
                  <Text type="h3" light style={{ textAlign: 'center' }}>
                    What are level, you get expert surf coaches to get you to the next shop.
                  </Text>
                </View>
                <View style={slideStyle}>
                  <Image style={imageStyle} resizeMode="cover" source={Assets.Images.initSlider4} />
                  <Text type="h2" light style={{ marginBottom: 20, textAlign: 'center' }}>
                    HOW TO GET STARTED
                  </Text>
                  <Text type="h3" light style={{ textAlign: 'center' }}>
                    New to surf training on land? We'll show you how to get the basics so you start
                    right.
                  </Text>
                </View>
              </Swiper>
            </View>
          </View>
          <View style={buttonViewStyle}>
            <BlockButton
              onPress={() => this.props.navigation.navigate('SignupScreen')}
              style={{ marginRight: 1 }}>
              JOIN NOW
            </BlockButton>
            <BlockButton
              onPress={() => this.props.navigation.navigate('LoginScreen')}
              style={{ marginLeft: 1 }}>
              LOGIN
            </BlockButton>
          </View>
        </Content>
      </Container>
    );
  }
}

const BlockButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.blockButtonStyle, style]}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  blockButtonStyle: {
    height: 70,
    width: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonViewStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  carouselViewStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  swiperViewStyle: {
    flex: 1,
  },
  imageStyle: {
    height: 250,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
  },
});

export default WelcomeScreen;
