import React, { Component } from 'react';
import { View, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { Text } from '~components/common';
import { CardLI } from '~components';
import { Assets, StyleTypes } from '~constants';

const { height, width } = Dimensions.get('window');

class NewsListScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text type={StyleTypes.headerTitle}>NEWS</Text>,
    headerLeft: <View>{null}</View>,
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.carouselViewStyle}>
          <Swiper
            dotColor="#bbb"
            activeDotColor="#fff"
            paginationStyle={styles.carouselPaginationStyle}
            style={styles.carouselStyle}>
            <View style={styles.slideStyle}>
              <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />
            </View>
            <View style={styles.slideStyle}>
              <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />
            </View>
            <View style={styles.slideStyle}>
              <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />
            </View>
          </Swiper>
        </View>
        <View style={styles.carouselTextStyle}>
          <Text type={StyleTypes.title}>Test Heading</Text>
        </View>
        <ScrollView style={styles.listViewStyle}>
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
          <CardLI />
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  carouselViewStyle: {
    height: height / 2.5,
    position: 'absolute',
    width: '100%',
  },
  carouselTextStyle: {
    height: height / 2.5,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: null,
    flex: 1,
  },
  listViewStyle: {
    marginTop: height / 3,
  },
  carouselStyle: {
    flex: 1,
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  carouselPaginationStyle: {
    top: height / 4.5,
  },
});

export default NewsListScreen;
