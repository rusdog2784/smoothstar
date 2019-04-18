import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';

import { Text } from '~components/common';
import { StyleTypes, AppConstants } from '~constants';
import { GlobalStyles, Colors } from '~styles';

const { height } = Dimensions.get('window');

class NewsDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text shadow type={StyleTypes.headerTitle}>
        NEWS DETAIL
      </Text>
    ),
    headerRight: <View>{null}</View>,
  };

  renderParagraphs = () => {
    const { paragraphs } = this.props.navigation.state.params;
    return paragraphs.map(item => (
      <Text key={item.id} style={GlobalStyles.smGapStyle} type={StyleTypes.p}>
        {item.content}
      </Text>
    ));
  };

  renderImages = () => {
    const { images } = this.props.navigation.state.params;
    return images.map(item => {
      const image = { uri: `${AppConstants.S3ImageURL}${item.file.key}` };

      return (
        <View key={item.file.key} style={styles.slideStyle}>
          <Image style={styles.imageStyle} resizeMode="cover" source={image} />
        </View>
      );
    });
  };

  render() {
    const { heading } = this.props.navigation.state.params;
    return (
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <View style={styles.carouselViewStyle}>
            <Swiper
              loop={false}
              dotColor="#bbb"
              activeDotColor="#fff"
              paginationStyle={styles.carouselPaginationStyle}
              style={styles.carouselStyle}>
              {this.renderImages()}
            </Swiper>
          </View>
          {/* <Image style={styles.imageStyle} resizeMode="cover" source={image} /> */}

          <View style={styles.textViewStyle}>
            <Text style={styles.headingStyle} type={StyleTypes.h1}>
              {heading}
            </Text>

            {/* <Text type={StyleTypes.p}>{description}</Text> */}
            {this.renderParagraphs()}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  carouselViewStyle: {
    height: height / 2,
    width: '100%',
  },
  imageStyle: {
    height: null,
    width: '100%',
    flex: 1,
    backgroundColor: Colors.imageBackgroundColor,
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
  textViewStyle: {
    marginHorizontal: 25,
    marginVertical: 20,
    ...GlobalStyles.screenType2ContentStyle,
  },
  headingStyle: {
    marginBottom: 10,
  },
});

export default NewsDetailScreen;
