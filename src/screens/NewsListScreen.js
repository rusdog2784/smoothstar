import React, { Component } from 'react';
import { View, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';

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
          <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />
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
});

export default NewsListScreen;
