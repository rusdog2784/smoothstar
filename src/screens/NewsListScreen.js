import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Content, List } from 'native-base';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import { Text } from '~components/common';
import { CardLI } from '~components';
import { Assets, StyleTypes } from '~constants';
import { getListNews } from '~redux/actions';

const { height, width } = Dimensions.get('window');

class NewsListScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text type={StyleTypes.headerTitle}>NEWS</Text>,
    headerLeft: <View>{null}</View>,
  };

  componentDidMount() {
    this.props.getListNews();
  }

  _renderRow = ({ title, publishedOn, rawContent }) => {
    return (
      <CardLI
        onPress={() =>
          this.props.navigation.navigate('NewsDetailScreen', {
            imageSource: { uri: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg' },
            heading: title,
            description: rawContent,
          })
        }
        heading={title}
        date={publishedOn}
        imageSource={{ uri: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg' }}
        description={rawContent}
      />
    );
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.carouselViewStyle}>
            <Swiper
              dotColor="#bbb"
              activeDotColor="#fff"
              paginationStyle={styles.carouselPaginationStyle}
              style={styles.carouselStyle}>
              <View style={styles.slideStyle}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={Assets.Images.testImg}
                />
              </View>
              <View style={styles.slideStyle}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={Assets.Images.testImg}
                />
              </View>
              <View style={styles.slideStyle}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={Assets.Images.testImg}
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.carouselTextStyle}>
            <Text type={StyleTypes.title}>Test Heading</Text>
          </View>
          <List
            style={styles.listViewStyle}
            dataArray={this.props.newsList}
            renderRow={this._renderRow}
          />
        </Content>
      </Container>
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

const mapStateToProps = state => {
  const { newsList } = state.app;

  return {
    newsList,
  };
};

export default connect(
  mapStateToProps,
  { getListNews }
)(NewsListScreen);
