import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Content, List } from 'native-base';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import Moment from 'moment';

import { Text } from '~components/common';
import { CardLI } from '~components';
import { Assets, StyleTypes, StaticData } from '~constants';
import { getListNews } from '~redux/actions';

const { height, width } = Dimensions.get('window');

class NewsListScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text type={StyleTypes.headerTitle}>NEWS</Text>,
    headerLeft: <View>{null}</View>,
  };

  state = {
    titleText: StaticData.NewsListTitles[0] || '',
  };

  componentDidMount() {
    this.props.getListNews();
  }

  _onSwiperIndexChanged = index => {
    this.setState({ titleText: StaticData.NewsListTitles[index] });
  };

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
        date={Moment(publishedOn).format('DD/MM/YYYY')}
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
              loop={false}
              dotColor="#bbb"
              activeDotColor="#fff"
              paginationStyle={styles.carouselPaginationStyle}
              onIndexChanged={this._onSwiperIndexChanged}
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
          <View style={styles.carouselTextViewStyle}>
            <Text shadow type={StyleTypes.title} style={styles.carouselTextStyle}>
              {this.state.titleText}
            </Text>
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
    height: height / 2,
    position: 'absolute',
    width: '100%',
  },
  carouselTextViewStyle: {
    height: height / 2,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  carouselTextStyle: {
    textAlign: 'center',
  },
  imageStyle: {
    height: null,
    flex: 1,
  },
  listViewStyle: {
    marginTop: height / 2.5,
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
    top: height / 4,
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
